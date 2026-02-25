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

  const [player, setPlayer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      setPlayer((prev) => {
        let { x, y } = prev;

        switch (e.key) {
          case "ArrowUp":
          case "w":
            y += 1;
            break;
          case "ArrowDown":
          case "s":
            y -= 1;
            break;
          case "ArrowLeft":
          case "a":
            x -= 1;
            break;
          case "ArrowRight":
          case "d":
            x += 1;
            break;
          default:
            return prev;
        }

        return { x, y };
      });
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background-dark">
      
      {/* GAME WORLD */}
      <div className="flex-1 relative w-full overflow-hidden flex items-center justify-center">
        
        <div className="relative w-full h-full max-w-5xl mx-auto flex items-center justify-center">
          
          {/* CHARACTER */}
          <div
            className="absolute size-8 bg-white rounded-full flex items-center justify-center 
                       shadow-[0_0_20px_5px_rgba(255,255,255,0.6)]
                       transition-transform duration-75"
            style={{
              left: "20%",
              bottom: "28%",
              transform: `translate(${player.x * 8}px, ${-player.y * 8}px)`,
            }}
          >
            <div
              className={`size-4 rounded-full blur-sm ${
                isEthereal ? "bg-primary/50" : "bg-accent-red/50"
              }`}
            />
          </div>

        </div>
      </div>

      {/* HUD (mantive só essencial para não poluir o exemplo) */}
      <div className="bg-background-dark/90 border-t border-primary/20 p-4 z-20">
        <div className="flex gap-4">
          <button
            onClick={onShift}
            className="flex items-center gap-3 px-4 py-2 rounded-xl 
                       bg-primary/20 border border-primary/40 
                       hover:bg-primary/30 transition-all"
          >
            <ArrowLeftRight size={20} className="text-primary" />
            Shift [Shift]
          </button>
        </div>
      </div>
    </div>
  );
}