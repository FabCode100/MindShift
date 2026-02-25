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
            y -= 1;
            break;
          case "ArrowDown":
          case "s":
            y += 1;
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
      {/* Top Navigation / HUD Bar */}
      <div className="flex items-center bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-primary/20 z-20">
        <button
          onClick={onBack}
          className="text-primary flex size-12 shrink-0 items-center justify-center hover:bg-primary/10 rounded-full transition-colors"
        >
          <PauseCircle size={28} />
        </button>
        <div className="flex flex-col items-center flex-1">
          <h2 className="text-primary text-lg font-bold leading-tight tracking-wider uppercase">
            MindShift
          </h2>
          <div className="flex gap-4 mt-1">
            <div className="flex items-center gap-1">
              <GitMerge size={12} className="text-accent-blue" />
              <span className="text-[10px] text-slate-400 uppercase tracking-widest">
                Link: Stable
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-12 items-center justify-end">
          <button className="flex cursor-pointer items-center justify-center rounded-lg h-12 bg-transparent text-slate-100 hover:text-primary transition-colors">
            <Settings size={24} />
          </button>
        </div>
      </div>

      {/* Status Indicators */}
      <div className="flex flex-wrap gap-4 p-4 z-20">
        <div
          className={`flex min-w-[140px] flex-1 flex-col gap-1 rounded-xl p-4 border backdrop-blur-sm transition-colors duration-1000 ${isEthereal ? "bg-primary/10 border-primary/30" : "bg-accent-red/10 border-accent-red/30"}`}
        >
          <p
            className={`${isEthereal ? "text-primary/70" : "text-accent-red/70"} text-xs font-bold uppercase tracking-widest`}
          >
            Dimension
          </p>
          <div className="flex items-center gap-2">
            <Sparkles
              size={20}
              className={isEthereal ? "text-primary" : "text-accent-red"}
            />
            <p className="text-white text-xl font-bold leading-tight capitalize">
              {dimension}
            </p>
          </div>
        </div>

        <div
          className={`flex min-w-[140px] flex-1 flex-col gap-1 rounded-xl p-4 border backdrop-blur-sm transition-colors duration-1000 ${isEthereal ? "bg-accent-blue/10 border-accent-blue/30" : "bg-primary/10 border-primary/30"}`}
        >
          <p
            className={`${isEthereal ? "text-accent-blue/70" : "text-primary/70"} text-xs font-bold uppercase tracking-widest`}
          >
            Gravity
          </p>
          <div className="flex items-center gap-2">
            {isEthereal ? (
              <ArrowDown size={20} className="text-accent-blue" />
            ) : (
              <ArrowUp size={20} className="text-primary" />
            )}
            <p className="text-white text-xl font-bold leading-tight">
              {isEthereal ? "Normal" : "Inverted"}
            </p>
          </div>
        </div>

        <div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-xl p-4 bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm">
          <p className="text-emerald-500/70 text-xs font-bold uppercase tracking-widest">
            Connection
          </p>
          <div className="flex items-center gap-2">
            <Wifi size={20} className="text-emerald-500" />
            <p className="text-white text-xl font-bold leading-tight">
              {isConnected ? "Active" : "Simulated"}
            </p>
          </div>
    </div>
  </div>

  {/* Game World Container */}
      <div className="flex-1 relative w-full overflow-hidden flex items-center justify-center">
        {/* Atmospheric Background Elements */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none transition-all duration-1000"
          style={{
            backgroundImage: isEthereal
              ? "radial-gradient(circle at 20% 30%, #cd2bee 0%, transparent 40%), radial-gradient(circle at 80% 70%, #2b67ee 0%, transparent 40%)"
              : "radial-gradient(circle at 20% 30%, #ee2b4d 0%, transparent 40%), radial-gradient(circle at 80% 70%, #cd2bee 0%, transparent 40%)",
          }}
        ></div>

        {/* Level Elements */}
        <div className="relative w-full h-full max-w-5xl mx-auto flex items-center justify-center">
          {/* Main Platforms */}
          <div
            className={`absolute ${isEthereal ? "bottom-1/4" : "top-1/4"} left-10 w-64 h-4 rounded-full transition-all duration-1000 ${isEthereal ? "bg-gradient-to-r from-accent-blue/20 to-primary/20 border border-white/10 shadow-[0_0_15px_rgba(43,103,238,0.3)]" : "bg-gradient-to-r from-primary/20 to-accent-red/20 border border-white/10 shadow-[0_0_15px_rgba(238,43,77,0.3)]"}`}
          ></div>

          <div
            className={`absolute ${isEthereal ? "top-1/3" : "bottom-1/3"} right-20 w-80 h-4 rounded-full transition-all duration-1000 ${isEthereal ? "bg-gradient-to-r from-primary/20 to-accent-blue/20 border border-white/10 shadow-[0_0_15px_rgba(205,43,238,0.3)]" : "bg-gradient-to-r from-accent-red/20 to-primary/20 border border-white/10 shadow-[0_0_15px_rgba(205,43,238,0.3)]"}`}
          ></div>

          <div className="absolute bottom-1/2 left-1/3 w-48 h-4 bg-gradient-to-r from-white/10 to-white/5 border border-white/10 rounded-full"></div>

          {/* Logic Gates / Puzzle Elements */}
          <div
            className={`absolute ${isEthereal ? "top-1/3" : "bottom-1/3"} right-[32rem] flex flex-col items-center gap-2 transition-all duration-1000`}
          >
            <div
              className="size-16 rounded-lg border-2 border-primary/40 bg-primary/5 flex items-center justify-center backdrop-blur-sm group cursor-pointer"
              onClick={onComplete}
            >
              <GitMerge size={32} className="text-primary font-light" />
            </div>
            <span className="text-[10px] text-primary/60 font-bold uppercase tracking-tighter">
              AND Gate (Click to Win)
            </span>
          </div>

          <div
            className={`absolute ${isEthereal ? "bottom-1/4" : "top-1/4"} right-40 flex flex-col items-center gap-2 transition-all duration-1000`}
          >
            <div className="size-12 rounded-full border-2 border-accent-blue/40 bg-accent-blue/10 flex items-center justify-center cursor-pointer hover:bg-accent-blue/30 transition-all">
              <Power size={24} className="text-accent-blue" />
            </div>
            <span className="text-[10px] text-accent-blue/60 font-bold uppercase tracking-tighter">
              Switch [E]
            </span>
          </div>

          {/* Vertical Gate */}
          <div className="absolute top-1/4 right-[25rem] w-2 h-40 bg-primary/20 border-x border-primary/50 shadow-[0_0_20px_rgba(205,43,238,0.2)]">
            <div className="absolute inset-0 bg-primary/40 animate-pulse"></div>
          </div>

          {/* The Character (Sphere of Light) */}
          <div
            className={`absolute ${isEthereal ? "bottom-[28%]" : "top-[28%]"} left-[20%] size-8 bg-white rounded-full flex items-center justify-center transition-all duration-1000 shadow-[0_0_20px_5px_rgba(255,255,255,0.6)]`}
          >
            <div
              className={`size-4 rounded-full blur-sm ${isEthereal ? "bg-primary/50" : "bg-accent-red/50"}`}
            ></div>
          </div>

          {/* Floating Geometric Decoration */}
          <div className="absolute top-20 left-40 size-12 border border-slate-700 rotate-45 opacity-40"></div>
          <div className="absolute bottom-20 right-60 size-20 border border-slate-700 -rotate-12 opacity-30"></div>
        </div>
      </div>

      {/* HUD: Lower Controls & Energy */}
      <div className="bg-background-dark/90 border-t border-primary/20 p-4 z-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex gap-6 justify-between items-end">
              <div className="flex flex-col">
                <p className="text-primary/80 text-xs font-bold uppercase tracking-widest mb-1">
                  Energy Core
                </p>
                <p className="text-white text-2xl font-bold leading-none">
                  65.8<span className="text-primary/50 text-sm">%</span>
                </p>
              </div>
              <div className="flex gap-2">
                <div className="size-2 rounded-full bg-primary animate-pulse"></div>
                <div className="size-2 rounded-full bg-primary/40"></div>
                <div className="size-2 rounded-full bg-primary/40"></div>
              </div>
            </div>
            <div className="h-3 w-full rounded-full bg-slate-800/50 overflow-hidden border border-white/5">
              <div
                className={`h-full rounded-full shadow-[0_0_10px_rgba(205,43,238,0.5)] transition-colors duration-1000 ${isEthereal ? "bg-gradient-to-r from-accent-blue to-primary" : "bg-gradient-to-r from-primary to-accent-red"}`}
                style={{ width: "65.8%" }}
              ></div>
            </div>
          </div>

          {/* Action HUD */}
          <div className="flex flex-wrap gap-4 justify-between">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/40 transition-all cursor-pointer group">
                <Hand
                  size={20}
                  className="text-slate-400 group-hover:text-primary transition-colors"
                />
                <div className="flex flex-col items-start">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">
                    Interact
                  </span>
                  <span className="text-xs text-slate-200 font-bold">[F]</span>
                </div>
              </button>

              <button className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/40 transition-all cursor-pointer group">
                <Zap
                  size={20}
                  className="text-slate-400 group-hover:text-primary transition-colors"
                />
                <div className="flex flex-col items-start">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">
                    Trigger
                  </span>
                  <span className="text-xs text-slate-200 font-bold">
                    [Space]
                  </span>
                </div>
              </button>

              <button
                onClick={onShift}
                className="flex items-center gap-3 px-4 py-2 rounded-xl bg-primary/20 border border-primary/40 hover:bg-primary/30 transition-all cursor-pointer group"
              >
                <ArrowLeftRight size={20} className="text-primary" />
                <div className="flex flex-col items-start">
                  <span className="text-[10px] text-primary font-bold uppercase">
                    Shift
                  </span>
                  <span className="text-xs text-slate-200 font-bold">
                    [Shift]
                  </span>
                </div>
              </button>
            </div>

            <div className="flex items-center gap-4 text-slate-500 hidden sm:flex">
              <div className="text-right">
                <p className="text-[10px] uppercase font-bold tracking-widest">
                  Sector
                </p>
                <p className="text-sm text-slate-300 font-bold">0x-AETHER-9</p>
              </div>
              <div className="h-8 w-px bg-slate-800"></div>
              <div className="text-right">
                <p className="text-[10px] uppercase font-bold tracking-widest">
                  Time
                </p>
                <p className="text-sm text-slate-300 font-bold">04:12:09</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
