import { X, Cpu, Zap, ArrowRight, Share2, RotateCcw } from "lucide-react";

interface Props {
  onNext: () => void;
}

export default function CompletionScreen({ onNext }: Props) {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col bg-background-dark overflow-x-hidden">
      <div className="flex items-center p-6 justify-between z-10">
        <button
          onClick={onNext}
          className="text-white flex size-12 shrink-0 items-center justify-start cursor-pointer hover:text-primary transition-colors"
        >
          <X size={28} />
        </button>
        <h2 className="text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12 font-display uppercase tracking-widest">
          MindShift
        </h2>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-6 max-w-2xl mx-auto w-full z-10">
        <div className="w-full mb-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
            <div
              className="relative w-full aspect-square max-w-[320px] mx-auto bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-full border border-primary/30 shadow-[0_0_40px_10px_rgba(205,43,238,0.15)]"
              style={{
                backgroundImage:
                  'url("https://picsum.photos/seed/completion/600/600")',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4 animate-in slide-in-from-bottom-8 fade-in duration-1000">
          <h1 className="text-white tracking-tight text-4xl md:text-5xl font-bold leading-tight font-display">
            Lógica Refinada
          </h1>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full my-6"></div>
          <p className="text-slate-400 text-lg font-light leading-relaxed max-w-md mx-auto">
            No espaço entre o Verdadeiro e o Falso, você encontrou a clareza. A
            lógica booleana não é apenas sobre escolhas binárias; é o alicerce
            do pensamento estruturado e da harmonia digital.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full mt-12 mb-12 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-150">
          <div className="flex flex-col items-center justify-center gap-2 rounded-xl p-6 border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <Cpu size={24} className="text-primary mb-1" />
            <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">
              Portas Lógicas
            </p>
            <p className="text-white text-3xl font-bold leading-tight font-display">
              12
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 rounded-xl p-6 border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <Zap size={24} className="text-primary mb-1" />
            <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">
              Precisão
            </p>
            <p className="text-white text-3xl font-bold leading-tight font-display">
              98%
            </p>
          </div>
        </div>

        <div className="w-full pb-12 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-300">
          <button
            onClick={onNext}
            className="w-full py-5 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 flex items-center justify-center gap-3 group"
          >
            <span>Próxima Experiência</span>
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

          <div className="mt-6 flex justify-center gap-8">
            <button className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors">
              <Share2 size={20} />
              <span className="text-sm font-medium">Compartilhar</span>
            </button>
            <button className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors">
              <RotateCcw size={20} />
              <span className="text-sm font-medium">Revisar Nível</span>
            </button>
          </div>
        </div>
      </main>

      <footer className="p-6 text-center text-slate-500 text-xs font-light tracking-widest uppercase z-10">
        Sincronização de Consciência Completa
      </footer>
    </div>
  );
}
