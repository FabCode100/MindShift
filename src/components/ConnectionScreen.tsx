import { useState } from "react";
import {
  ArrowLeft,
  Settings,
  Cpu,
  Bluetooth,
  Headphones,
  CheckCircle2,
  Activity,
  User,
} from "lucide-react";

interface Props {
  onConnect: () => void;
  onBack: () => void;
}

export default function ConnectionScreen({ onConnect, onBack }: Props) {
  const [connecting, setConnecting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleConnect = () => {
    setConnecting(true);
    setTimeout(() => {
      setConnecting(false);
      setSuccess(true);
      onConnect();
    }, 2000);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-dark">
      <header className="flex items-center p-6 justify-between z-10">
        <button
          onClick={onBack}
          className="flex items-center justify-center rounded-full bg-primary/10 p-2 text-primary hover:bg-primary/20 transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold tracking-tight text-white">
            MindShift
          </h1>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-primary/80 font-bold">
              Scanning
            </span>
          </div>
        </div>
        <button className="flex items-center justify-center rounded-full bg-primary/10 p-2 text-primary hover:bg-primary/20 transition-colors">
          <Settings size={24} />
        </button>
      </header>

      <main className="flex-1 px-6 pt-4 z-10 max-w-md mx-auto w-full">
        <div className="mb-8">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary/60 mb-4">
            Available Devices
          </h2>

          <div className="space-y-3">
            {/* Target Device */}
            <div className="flex items-center gap-4 glass-panel p-4 rounded-xl border-primary/20 bg-primary/5">
              <div className="flex items-center justify-center rounded-lg bg-primary/20 text-primary shrink-0 size-12">
                <Cpu size={24} />
              </div>
              <div className="flex flex-col flex-1">
                <p className="text-white font-bold">MindShift-ESP32</p>
                <p className="text-primary/60 text-xs">Firmware v2.4.1</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-end gap-0.5 h-4">
                  <div className="w-[3px] rounded-[1px] bg-primary h-1"></div>
                  <div className="w-[3px] rounded-[1px] bg-primary h-2"></div>
                  <div className="w-[3px] rounded-[1px] bg-primary h-3"></div>
                  <div className="w-[3px] rounded-[1px] bg-primary h-4"></div>
                </div>
                <button
                  onClick={handleConnect}
                  disabled={connecting || success}
                  className="bg-primary hover:bg-primary/80 disabled:opacity-50 text-white text-xs font-bold py-1.5 px-4 rounded-full transition-colors min-w-[80px]"
                >
                  {connecting ? "..." : success ? "CONNECTED" : "CONNECT"}
                </button>
              </div>
            </div>

            {/* Other Device 1 */}
            <div className="flex items-center gap-4 glass-panel p-4 rounded-xl opacity-60">
              <div className="flex items-center justify-center rounded-lg bg-slate-500/10 text-slate-400 shrink-0 size-12">
                <Bluetooth size={24} />
              </div>
              <div className="flex flex-col flex-1">
                <p className="text-white font-medium">Unknown Device</p>
                <p className="text-slate-400 text-xs">MAC: 4C:11:AE:0D:33</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-end gap-0.5 h-4">
                  <div className="w-[3px] rounded-[1px] bg-slate-500 h-1"></div>
                  <div className="w-[3px] rounded-[1px] bg-slate-500/30 h-2"></div>
                  <div className="w-[3px] rounded-[1px] bg-slate-500/30 h-3"></div>
                  <div className="w-[3px] rounded-[1px] bg-slate-500/30 h-4"></div>
                </div>
                <button className="border border-slate-500/30 text-slate-400 text-xs font-bold py-1.5 px-4 rounded-full">
                  PAIR
                </button>
              </div>
            </div>

            {/* Other Device 2 */}
            <div className="flex items-center gap-4 glass-panel p-4 rounded-xl">
              <div className="flex items-center justify-center rounded-lg bg-accent-blue/20 text-accent-blue shrink-0 size-12">
                <Headphones size={24} />
              </div>
              <div className="flex flex-col flex-1">
                <p className="text-white font-bold">MindShift-V2</p>
                <p className="text-accent-blue/60 text-xs">Recently Paired</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-end gap-0.5 h-4">
                  <div className="w-[3px] rounded-[1px] bg-accent-blue h-1"></div>
                  <div className="w-[3px] rounded-[1px] bg-accent-blue h-2"></div>
                  <div className="w-[3px] rounded-[1px] bg-accent-blue/30 h-3"></div>
                  <div className="w-[3px] rounded-[1px] bg-accent-blue/30 h-4"></div>
                </div>
                <button className="bg-accent-blue/20 text-accent-blue hover:bg-accent-blue/30 text-xs font-bold py-1.5 px-4 rounded-full transition-colors">
                  CONNECT
                </button>
              </div>
            </div>
          </div>
        </div>

        {success && (
          <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent-blue/20 border border-primary/20 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-8 rounded-full bg-primary flex items-center justify-center text-white">
                  <CheckCircle2 size={20} />
                </div>
                <p className="font-bold text-white">Connection Successful</p>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                MindShift-ESP32 successfully synchronized with your neural
                profile. All sensors are active.
              </p>
            </div>
            <div className="absolute -right-4 -bottom-4 size-24 rounded-full bg-primary/20 blur-2xl"></div>
          </div>
        )}
      </main>

      <nav className="mt-auto border-t border-primary/10 bg-background-dark/80 backdrop-blur-md px-6 py-4 flex justify-between items-center z-10">
        <button className="flex flex-col items-center gap-1 text-primary">
          <Bluetooth size={20} />
          <span className="text-[10px] font-bold uppercase">Connect</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors">
          <Activity size={20} />
          <span className="text-[10px] font-bold uppercase">Activity</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors">
          <User size={20} />
          <span className="text-[10px] font-bold uppercase">Profile</span>
        </button>
      </nav>

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] size-64 bg-primary/5 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[-5%] right-[-5%] size-80 bg-accent-blue/5 rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
}
