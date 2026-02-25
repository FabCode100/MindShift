import { useState, useEffect } from "react";
import {
  PauseCircle,
  Settings,
  Sparkles,
  ArrowDown,
  ArrowUp,
  Wifi,
  Power,
  GitMerge,
  Hand,
  Zap,
  ArrowLeftRight,
} from "lucide-react";

interface Props {
  isConnected: boolean;
  dimension: "ethereal" | "inverted";
  onShift: () => void;
  onComplete: () => void;
  onBack: () => void;
}

export default function GameScreen({
  isConnected,
  dimension,
  onShift,
  onComplete,
  onBack,
}: Props) {
  const isEthereal = dimension === "ethereal";

  // 🎮 PLAYER STATE COM FÍSICA
  const [player, setPlayer] = useState({
    x: 0,
    y: 0,
    velocityY: 0,
  });

  const [keys, setKeys] = useState<{ [key: string]: boolean }>({});

  // 🎹 CAPTURA CONTÍNUA DE TECLAS
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

  // 🔄 GAME LOOP COM GRAVIDADE
  useEffect(() => {
    let animationFrame: number;

    const gravity = isEthereal ? -0.4 : 0.4;
    const moveSpeed = 3;
    const jumpForce = 8;

    function loop() {
      setPlayer((prev) => {
        let { x, y, velocityY } = prev;

        // Movimento horizontal
        if (keys["ArrowLeft"] || keys["a"]) x -= moveSpeed;
        if (keys["ArrowRight"] || keys["d"]) x += moveSpeed;

        // Verifica chão
        const onGround = isEthereal ? y <= 0 : y >= 0;

        // Pulo
        if ((keys[" "] || keys["Space"]) && onGround) {
          velocityY = isEthereal ? jumpForce : -jumpForce;
        }

        // Gravidade
        velocityY += gravity;
        y += velocityY;

        // Colisão com chão
        if (isEthereal && y < 0) {
          y = 0;
          velocityY = 0;
        }

        if (!isEthereal && y > 0) {
          y = 0;
          velocityY = 0;
        }

        // Limite lateral
        x = Math.max(-300, Math.min(300, x));

        return { x, y, velocityY };
      });

      animationFrame = requestAnimationFrame(loop);
    }

    animationFrame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrame);
  }, [keys, isEthereal]);

  // 🔁 SHIFT VIA TECLADO
  useEffect(() => {
    if (keys["Shift"]) {
      onShift();
    }
  }, [keys, onShift]);

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background-dark">
      
      {/* HUD TOP */}
      <div className="flex items-center bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-primary/20 z-20">
        <button
          onClick={onBack}
          className="text-primary flex size-12 items-center justify-center hover:bg-primary/10 rounded-full transition-colors"
        >
          <PauseCircle size={28} />
        </button>

        <div className="flex flex-col items-center flex-1">
          <h2 className="text-primary text-lg font-bold tracking-wider uppercase">
            MindShift
          </h2>
        </div>

        <div className="flex w-12 items-center justify-end">
          <Settings size={24} className="text-slate-400" />
        </div>
      </div>

      {/* STATUS */}
      <div className="flex gap-4 p-4 z-20">
        <div className="flex-1 rounded-xl p-4 border backdrop-blur-sm">
          <p className="text-xs uppercase tracking-widest text-slate-400">
            Dimension
          </p>
          <p className="text-white text-xl font-bold capitalize">
            {dimension}
          </p>
        </div>

        <div className="flex-1 rounded-xl p-4 border backdrop-blur-sm">
          <p className="text-xs uppercase tracking-widest text-slate-400">
            Gravity
          </p>
          <p className="text-white text-xl font-bold">
            {isEthereal ? "Normal" : "Inverted"}
          </p>
        </div>

        <div className="flex-1 rounded-xl p-4 border backdrop-blur-sm">
          <p className="text-xs uppercase tracking-widest text-slate-400">
            Connection
          </p>
          <p className="text-white text-xl font-bold">
            {isConnected ? "Active" : "Simulated"}
          </p>
        </div>
      </div>

      {/* GAME WORLD */}
      <div className="flex-1 relative overflow-hidden flex items-center justify-center">
        
        {/* PLAYER COM TRANSFORM GPU */}
        <div
          className="absolute size-8 bg-white rounded-full flex items-center justify-center
                     shadow-[0_0_20px_5px_rgba(255,255,255,0.6)]"
          style={{
            left: "20%",
            bottom: "28%",
            transform: `translate(${player.x}px, ${-player.y}px)`,
          }}
        >
          <div
            className={`size-4 rounded-full blur-sm ${
              isEthereal ? "bg-primary/50" : "bg-accent-red/50"
            }`}
          />
        </div>

        {/* GATE SIMPLES */}
        <div
          onClick={onComplete}
          className="absolute right-20 bottom-28 size-16 rounded-lg border-2 border-primary/40 bg-primary/5 flex items-center justify-center cursor-pointer hover:bg-primary/20 transition"
        >
          <GitMerge size={32} className="text-primary" />
        </div>
      </div>

      {/* CONTROLS HUD */}
      <div className="bg-background-dark/90 border-t border-primary/20 p-4 z-20">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <span className="text-xs text-slate-400">
              A/D → Move
            </span>
            <span className="text-xs text-slate-400">
              Space → Jump
            </span>
            <span className="text-xs text-slate-400">
              Shift → Dimension
            </span>
          </div>

          <button
            onClick={onShift}
            className="px-4 py-2 rounded-xl bg-primary/20 border border-primary/40 hover:bg-primary/30 transition"
          >
            Shift Dimension
          </button>
        </div>
      </div>
    </div>
  );
}