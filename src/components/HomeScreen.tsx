import {
  Brain,
  Bluetooth,
  BluetoothConnected,
  Play,
  Gamepad2,
  Settings,
} from "lucide-react";
import { ScreenType } from "../App";

interface Props {
  isConnected: boolean;
  onNavigate: (screen: ScreenType) => void;
}

export default function HomeScreen({ isConnected, onNavigate }: Props) {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-x-hidden bg-background-dark">
      <header className="flex items-center p-6 justify-between z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Brain size={20} className="text-white" />
          </div>
          <h2 className="text-white text-xl font-bold tracking-tight">
            MindShift
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${isConnected ? "bg-emerald-500/10 border-emerald-500/20" : "bg-primary/10 border-primary/20"}`}
          >
            {isConnected ? (
              <BluetoothConnected size={16} className="text-emerald-500" />
            ) : (
              <Bluetooth size={16} className="text-primary" />
            )}
            <span
              className={`text-xs font-medium uppercase tracking-widest ${isConnected ? "text-emerald-500" : "text-primary/80"}`}
            >
              {isConnected ? "Connected" : "Disconnected"}
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(205,43,238,0.15)_0%,rgba(18,8,20,0)_70%)] pointer-events-none"></div>

        <div className="w-full max-w-md z-10 flex flex-col items-center">
          <div className="relative aspect-square w-64 mx-auto mb-12 group">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
            <div className="relative w-full h-full bg-slate-900/40 backdrop-blur-sm rounded-full border border-primary/30 flex items-center justify-center overflow-hidden soft-glow">
              <img
                src="https://picsum.photos/seed/mindshift/600/600"
                alt="Abstract nebula"
                className="w-full h-full object-cover mix-blend-overlay opacity-60"
                referrerPolicy="no-referrer"
              />
              <Brain
                size={80}
                className="text-primary opacity-80 absolute"
                strokeWidth={1}
              />
            </div>
          </div>

          <div className="text-center space-y-2 mb-10">
            <h1 className="text-white text-5xl font-bold tracking-tighter">
              MindShift
            </h1>
            <p className="text-slate-400 text-lg font-light tracking-wide italic">
              Experience the shift in consciousness.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full max-w-xs">
            <button
              onClick={() => onNavigate("game")}
              className="flex items-center justify-center gap-3 rounded-xl h-14 bg-primary text-white text-base font-bold tracking-wide transition-all hover:scale-[1.02] active:scale-[0.98] soft-glow"
            >
              <Play size={20} fill="currentColor" />
              <span>Iniciar Experiência</span>
            </button>

            <button
              onClick={() => onNavigate("connection")}
              className="flex items-center justify-center gap-3 rounded-xl h-14 bg-white/5 text-white text-base font-semibold border border-primary/20 backdrop-blur-md transition-all hover:bg-primary/20"
            >
              <Gamepad2 size={20} />
              <span>Conectar Controle</span>
            </button>

            <button className="flex items-center justify-center gap-3 rounded-xl h-12 text-slate-400 text-sm font-medium hover:text-primary transition-colors mt-2">
              <Settings size={18} />
              <span>Configurações</span>
            </button>
          </div>
        </div>
      </main>

      <footer className="p-8 flex justify-between items-end z-10">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
            System Status
          </span>
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary/30"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary/30"></div>
          </div>
        </div>
        <div className="text-right">
          <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
            v 2.4.0
          </span>
        </div>
      </footer>
    </div>
  );
}
