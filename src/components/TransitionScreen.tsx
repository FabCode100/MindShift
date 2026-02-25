import { useEffect } from "react";
import { Flame, Radio, Zap, Compass, Settings, Activity } from "lucide-react";

interface Props {
  targetDimension: "ethereal" | "inverted";
  onComplete: () => void;
}

export default function TransitionScreen({
  targetDimension,
  onComplete,
}: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const isToInverted = targetDimension === "inverted";

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background-dark">
      {/* Header / Top Bar */}
      <header className="flex items-center justify-between p-6 z-10">
        <div className="flex items-center gap-3">
          <div className="text-primary flex size-10 items-center justify-center bg-primary/10 rounded-lg">
            <Flame size={24} />
          </div>
          <div>
            <h2 className="text-white text-xl font-bold leading-tight tracking-tight">
              MindShift
            </h2>
            <p className="text-xs text-primary/70 font-medium uppercase tracking-widest">
              Neural Sync Active
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-primary uppercase font-bold tracking-tighter">
              Stability
            </span>
            <span className="text-sm font-mono text-slate-300">98.4%</span>
          </div>
          <button className="bg-primary/20 p-2 rounded-full border border-primary/30">
            <Radio size={20} className="text-primary" />
          </button>
        </div>
      </header>

      {/* Main Transition Area */}
      <main className="flex-1 relative flex flex-col items-center justify-center px-6">
        {/* Background Transition Visual */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br opacity-60 transition-colors duration-3000 ${isToInverted ? "from-blue-900/40 via-background-dark to-red-900/40" : "from-red-900/40 via-background-dark to-blue-900/40"}`}
          ></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(205,43,238,0.15)_0%,rgba(31,16,34,1)_100%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle,#cd2bee_1px,transparent_1px)] [background-size:40px_40px] opacity-10"></div>

          {/* Abstract Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
        </div>

        {/* Cinematic Central Overlay */}
        <div className="relative z-10 w-full max-w-md flex flex-col items-center">
          <div className="w-full aspect-square relative mb-8">
            {/* Circular Distortion Portal */}
            <div
              className="absolute inset-0 rounded-full border border-primary/20 animate-ping"
              style={{ animationDuration: "2s" }}
            ></div>
            <div
              className="absolute inset-4 rounded-full border border-primary/40 animate-spin"
              style={{ animationDuration: "10s" }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-48 h-48 rounded-full bg-cover bg-center overflow-hidden relative border border-primary/20 backdrop-blur-md saturate-150"
                style={{
                  backgroundImage:
                    'url("https://picsum.photos/seed/nebula/400/400")',
                }}
              >
                <div
                  className={`absolute inset-0 mix-blend-overlay transition-colors duration-3000 ${isToInverted ? "bg-red-500/30" : "bg-blue-500/30"}`}
                ></div>
              </div>
            </div>

            {/* Orbiting Data Points */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background-dark border border-primary/50 px-3 py-1 rounded-full flex items-center gap-2">
              <span className="size-2 bg-primary rounded-full animate-ping"></span>
              <span className="text-[10px] font-bold text-white uppercase">
                Dimension {isToInverted ? "Omega-7" : "Alpha-9"}
              </span>
            </div>
          </div>

          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-white text-4xl font-bold tracking-tight">
              Dimension Transition
            </h1>
            <p className="text-slate-400 text-base max-w-xs mx-auto">
              Shift initiated. Merging cognitive layers for deep scientific
              discovery.
            </p>
          </div>

          {/* Transition Progress Card */}
          <div className="mt-12 w-full bg-background-dark/60 border border-primary/20 backdrop-blur-xl p-6 rounded-2xl animate-in fade-in duration-1000 delay-300">
            <div className="flex justify-between items-end mb-4">
              <div className="space-y-1">
                <p className="text-[10px] text-primary uppercase font-bold tracking-widest">
                  Cognitive Load
                </p>
                <h3 className="text-2xl font-bold text-white">
                  4.2{" "}
                  <span className="text-xs font-normal text-slate-500">
                    THz
                  </span>
                </h3>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                  Est. Completion
                </p>
                <p className="text-sm font-mono text-slate-200">00:00:03</p>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary shadow-[0_0_15px_rgba(205,43,238,0.6)] animate-[progress_3s_ease-in-out_forwards]"
                style={{ width: "0%" }}
              >
                <style>{`
                  @keyframes progress {
                    0% { width: 0%; }
                    100% { width: 100%; }
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation Component */}
      <nav className="relative z-20 flex border-t border-primary/20 bg-background-dark/80 backdrop-blur-md px-6 pb-8 pt-4">
        <button className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500 hover:text-white transition-colors">
          <Zap size={24} />
        </button>
        <button className="flex flex-1 flex-col items-center justify-center gap-1 text-primary">
          <Activity size={24} />
        </button>
        <button className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500 hover:text-white transition-colors">
          <Compass size={24} />
        </button>
        <button className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500 hover:text-white transition-colors">
          <Settings size={24} />
        </button>
      </nav>

      {/* Floating HUD Elements */}
      <div className="fixed top-1/2 left-4 -translate-y-1/2 flex flex-col gap-6 opacity-30 pointer-events-none hidden sm:flex">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
        <div
          className="text-[8px] font-mono uppercase tracking-widest"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          System_Protocol_v.4.0
        </div>
      </div>
      <div className="fixed top-1/2 right-4 -translate-y-1/2 flex flex-col gap-6 opacity-30 pointer-events-none items-end hidden sm:flex">
        <div
          className="text-[8px] font-mono uppercase tracking-widest"
          style={{ writingMode: "vertical-rl" }}
        >
          Scanning_Reality_Nodes
        </div>
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
      </div>
    </div>
  );
}
