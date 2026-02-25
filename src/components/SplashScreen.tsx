import { useEffect, useState } from "react";
import { BrainCircuit, Lightbulb } from "lucide-react";

export default function SplashScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return p + Math.floor(Math.random() * 15) + 5;
      });
    }, 300);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-background-dark">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background-dark"></div>
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full blur-[1px] animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary/40 rounded-full blur-[2px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-white/60 rounded-full blur-[1px] animate-pulse"></div>
      </div>

      <div className="relative z-10 flex w-full items-center justify-end p-6 opacity-0">
        <div className="size-12"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        <div className="relative mb-8 group">
          <div className="absolute -inset-8 bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
          <div className="relative flex size-32 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/80 to-background-dark border border-primary/30 shadow-2xl shadow-primary/20">
            <BrainCircuit
              size={64}
              className="text-white font-light"
              strokeWidth={1}
            />
          </div>
        </div>

        <h1 className="text-white tracking-[0.2em] text-5xl md:text-6xl font-bold uppercase leading-tight">
          Mind<span className="text-primary text-glow">Shift</span>
        </h1>
        <p className="mt-4 text-slate-400 text-sm md:text-lg font-light tracking-widest uppercase">
          Interface Cognitiva Imersiva
        </p>
      </div>

      <div className="relative z-10 w-full max-w-sm px-8 pb-16 flex flex-col gap-4">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-primary uppercase tracking-tighter">
              System Status
            </span>
            <p className="text-white text-sm font-medium">
              Synchronizing Neurons...
            </p>
          </div>
          <p className="text-slate-400 text-xs font-mono">
            {Math.min(progress, 100)}%
          </p>
        </div>

        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full bg-primary shadow-[0_0_10px_rgba(205,43,238,0.5)] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-primary/10 bg-primary/5 p-4 backdrop-blur-sm">
          <Lightbulb className="text-primary shrink-0" size={20} />
          <p className="text-slate-400 text-xs leading-relaxed italic">
            "A lógica é a estrutura invisível que sustenta a realidade."
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
    </div>
  );
}
