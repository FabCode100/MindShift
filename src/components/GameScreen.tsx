import { useState, useEffect, useMemo } from "react";
import { PauseCircle, Settings, GitMerge } from "lucide-react";

interface Props {
  isConnected: boolean;
  dimension: "ethereal" | "inverted";
  onShift: () => void;
  onComplete: () => void;
  onBack: () => void;
}

interface Platform {
  x: number;
  y: number;
  width: number;
  height: number;
}

export default function GameScreen({
  dimension,
  onShift,
  onComplete,
  onBack,
}: Props) {
  const isEthereal = dimension === "ethereal";

  const [player, setPlayer] = useState({
    x: -300,
    y: 0,
    velocityY: 0,
  });

  const [keys, setKeys] = useState<{ [key: string]: boolean }>({});

  // 🧱 MINI LABIRINTO
  const platforms: Platform[] = useMemo(
    () => [
      { x: -350, y: 0, width: 300, height: 20 },   // chão inicial
      { x: -50, y: 80, width: 200, height: 20 },   // primeira subida
      { x: 200, y: 160, width: 200, height: 20 },  // plataforma alta
      { x: 450, y: 0, width: 200, height: 20 },    // lado final
    ],
    []
  );

  const gate = { x: 550, y: 60, size: 60 };

  // 🎹 Teclas
  useEffect(() => {
    const down = (e: KeyboardEvent) =>
      setKeys((prev) => ({ ...prev, [e.key]: true }));

    const up = (e: KeyboardEvent) =>
      setKeys((prev) => ({ ...prev, [e.key]: false }));

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  // 🔄 GAME LOOP
  useEffect(() => {
    let frame: number;

    const gravity = isEthereal ? -0.4 : 0.4;
    const moveSpeed = 3;
    const jumpForce = 9;

    function loop() {
      setPlayer((prev) => {
        let { x, y, velocityY } = prev;

        // Movimento lateral
        if (keys["a"] || keys["ArrowLeft"]) x -= moveSpeed;
        if (keys["d"] || keys["ArrowRight"]) x += moveSpeed;

        velocityY += gravity;
        y += velocityY;

        // Colisão com plataformas
        platforms.forEach((p) => {
          const playerWidth = 32;
          const playerHeight = 32;

          const px = x;
          const py = y;

          const onPlatform =
            px + playerWidth > p.x &&
            px < p.x + p.width &&
            py + playerHeight > p.y &&
            py + playerHeight < p.y + p.height + 20 &&
            velocityY >= 0;

          if (!isEthereal && onPlatform) {
            y = p.y - playerHeight;
            velocityY = 0;
          }

          const onPlatformInverted =
            px + playerWidth > p.x &&
            px < p.x + p.width &&
            py < p.y + p.height &&
            py > p.y - 20 &&
            velocityY <= 0;

          if (isEthereal && onPlatformInverted) {
            y = p.y + p.height;
            velocityY = 0;
          }
        });

        // Pulo
        const grounded = velocityY === 0;
        if ((keys[" "] || keys["Space"]) && grounded) {
          velocityY = isEthereal ? 9 : -9;
        }

        // Limites
        x = Math.max(-380, Math.min(700, x));

        // Vitória automática
        if (
          x + 32 > gate.x &&
          x < gate.x + gate.size &&
          y + 32 > gate.y &&
          y < gate.y + gate.size
        ) {
          onComplete();
        }

        return { x, y, velocityY };
      });

      frame = requestAnimationFrame(loop);
    }

    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, [keys, isEthereal, platforms, onComplete]);

  // Shift via teclado
  useEffect(() => {
    if (keys["Shift"]) onShift();
  }, [keys, onShift]);

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">

      {/* HUD */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between z-20">
        <button onClick={onBack} className="text-white">
          <PauseCircle size={28} />
        </button>
        <h2 className="text-white font-bold tracking-widest">
          MindShift - Mini Lab
        </h2>
        <Settings size={24} className="text-white" />
      </div>

      {/* WORLD */}
      <div className="relative w-full h-full flex items-center justify-center">

        {/* Plataformas */}
        {platforms.map((p, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-purple-500/30 to-blue-500/30 border border-white/10 rounded-full"
            style={{
              left: `calc(50% + ${p.x}px)`,
              bottom: `calc(30% + ${p.y}px)`,
              width: p.width,
              height: p.height,
            }}
          />
        ))}

        {/* Gate */}
        <div
          className="absolute border-2 border-green-400 bg-green-500/10 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(0,255,120,0.5)]"
          style={{
            left: `calc(50% + ${gate.x}px)`,
            bottom: `calc(30% + ${gate.y}px)`,
            width: gate.size,
            height: gate.size,
          }}
        >
          <GitMerge size={32} className="text-green-400" />
        </div>

        {/* Player */}
        <div
          className="absolute size-8 bg-white rounded-full shadow-[0_0_20px_5px_rgba(255,255,255,0.6)]"
          style={{
            left: `calc(50% + ${player.x}px)`,
            bottom: `calc(30% + ${player.y}px)`,
          }}
        />
      </div>

      {/* Controles */}
      <div className="absolute bottom-0 w-full p-4 text-center text-xs text-gray-400">
        A/D → Mover | Space → Pular | Shift → Inverter Gravidade
      </div>
    </div>
  );
}