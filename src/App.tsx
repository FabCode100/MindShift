import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import HomeScreen from "./components/HomeScreen";
import ConnectionScreen from "./components/ConnectionScreen";
import GameScreen from "./components/GameScreen";
import TransitionScreen from "./components/TransitionScreen";
import CompletionScreen from "./components/CompletionScreen";

export type ScreenType =
  | "splash"
  | "home"
  | "connection"
  | "game"
  | "transition"
  | "completion";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>("splash");
  const [isConnected, setIsConnected] = useState(false);
  const [dimension, setDimension] = useState<"ethereal" | "inverted">(
    "ethereal",
  );

  return (
    <div className="min-h-screen bg-background-dark text-white font-display selection:bg-primary/30">
      {currentScreen === "splash" && (
        <SplashScreen onComplete={() => setCurrentScreen("home")} />
      )}
      {currentScreen === "home" && (
        <HomeScreen isConnected={isConnected} onNavigate={setCurrentScreen} />
      )}
      {currentScreen === "connection" && (
        <ConnectionScreen
          onConnect={() => setIsConnected(true)}
          onBack={() => setCurrentScreen("home")}
        />
      )}
      {currentScreen === "game" && (
        <GameScreen
          isConnected={isConnected}
          dimension={dimension}
          onShift={() => setCurrentScreen("transition")}
          onComplete={() => setCurrentScreen("completion")}
          onBack={() => setCurrentScreen("home")}
        />
      )}
      {currentScreen === "transition" && (
        <TransitionScreen
          targetDimension={dimension === "ethereal" ? "inverted" : "ethereal"}
          onComplete={() => {
            setDimension((d) => (d === "ethereal" ? "inverted" : "ethereal"));
            setCurrentScreen("game");
          }}
        />
      )}
      {currentScreen === "completion" && (
        <CompletionScreen onNext={() => setCurrentScreen("home")} />
      )}
    </div>
  );
}
