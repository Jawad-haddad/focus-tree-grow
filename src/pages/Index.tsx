import { useState } from "react";
import { Timer } from "@/components/Timer";
import { SessionHistory } from "@/components/SessionHistory";
import { Sprout } from "lucide-react";

interface Session {
  id: string;
  duration: number;
  completedAt: Date;
}

const Index = () => {
  const [sessions, setSessions] = useState<Session[]>([]);

  const handleSessionComplete = (duration: number) => {
    const newSession: Session = {
      id: crypto.randomUUID(),
      duration,
      completedAt: new Date(),
    };
    setSessions((prev) => [newSession, ...prev]);
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <header className="text-center space-y-3 animate-grow">
          <div className="flex items-center justify-center gap-3">
            <Sprout className="h-10 w-10 text-primary animate-float" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Focus Tree
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Stay focused and watch your tree grow with each session
          </p>
        </header>

        {/* Timer Section */}
        <div className="animate-grow" style={{ animationDelay: "0.1s" }}>
          <Timer onSessionComplete={handleSessionComplete} />
        </div>

        {/* History Section */}
        <div className="animate-grow" style={{ animationDelay: "0.2s" }}>
          <SessionHistory sessions={sessions} />
        </div>
      </div>
    </div>
  );
};

export default Index;
