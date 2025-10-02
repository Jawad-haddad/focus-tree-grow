interface TreeGrowthProps {
  progress: number;
}

export const TreeGrowth = ({ progress }: TreeGrowthProps) => {
  const getTreeStage = () => {
    if (progress < 20) return "seed";
    if (progress < 40) return "sprout";
    if (progress < 60) return "sapling";
    if (progress < 80) return "young";
    return "mature";
  };

  const stage = getTreeStage();

  return (
    <div className="relative w-64 h-64 flex items-end justify-center">
      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-b from-[hsl(var(--earth))] to-[hsl(var(--trunk))] rounded-full" />
      
      {/* Tree Stages */}
      <div className="relative mb-3 transition-all duration-1000 ease-out">
        {/* Seed */}
        {stage === "seed" && (
          <div className="animate-grow">
            <div className="w-8 h-8 bg-[hsl(var(--seed))] rounded-full shadow-md animate-pulse-soft" />
          </div>
        )}

        {/* Sprout */}
        {stage === "sprout" && (
          <div className="animate-grow">
            <div className="flex flex-col items-center">
              <div className="w-2 h-12 bg-gradient-to-t from-[hsl(var(--trunk))] to-[hsl(var(--leaf))] rounded-t-full" />
              <div className="w-8 h-8 bg-[hsl(var(--seed))] rounded-full -mt-2" />
            </div>
          </div>
        )}

        {/* Sapling */}
        {stage === "sapling" && (
          <div className="animate-grow">
            <div className="flex flex-col items-center">
              <div className="flex gap-4 mb-1">
                <div className="w-6 h-6 bg-[hsl(var(--leaf))] rounded-full opacity-80" />
                <div className="w-6 h-6 bg-[hsl(var(--leaf))] rounded-full opacity-80" />
              </div>
              <div className="w-3 h-24 bg-gradient-to-t from-[hsl(var(--trunk))] to-[hsl(var(--leaf))] rounded-t-lg" />
            </div>
          </div>
        )}

        {/* Young Tree */}
        {stage === "young" && (
          <div className="animate-grow">
            <div className="flex flex-col items-center">
              <div className="relative mb-2">
                <div className="w-16 h-16 bg-[hsl(var(--leaf))] rounded-full opacity-90" />
                <div className="absolute -left-4 top-2 w-10 h-10 bg-[hsl(var(--leaf))] rounded-full opacity-80" />
                <div className="absolute -right-4 top-2 w-10 h-10 bg-[hsl(var(--leaf))] rounded-full opacity-80" />
              </div>
              <div className="w-4 h-32 bg-gradient-to-t from-[hsl(var(--trunk))] to-[hsl(var(--earth))] rounded-t-lg shadow-md" />
            </div>
          </div>
        )}

        {/* Mature Tree */}
        {stage === "mature" && (
          <div className="animate-grow">
            <div className="flex flex-col items-center animate-float">
              <div className="relative mb-3">
                {/* Main canopy */}
                <div className="w-24 h-24 bg-gradient-to-b from-[hsl(var(--accent))] to-[hsl(var(--leaf))] rounded-full shadow-[var(--shadow-tree)]" />
                
                {/* Side canopies */}
                <div className="absolute -left-6 top-4 w-16 h-16 bg-gradient-to-b from-[hsl(var(--accent))] to-[hsl(var(--leaf))] rounded-full opacity-90" />
                <div className="absolute -right-6 top-4 w-16 h-16 bg-gradient-to-b from-[hsl(var(--accent))] to-[hsl(var(--leaf))] rounded-full opacity-90" />
                
                {/* Top canopy */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-20 h-20 bg-gradient-to-b from-[hsl(var(--accent))] to-[hsl(var(--leaf))] rounded-full opacity-95" />
                
                {/* Small accent leaves */}
                <div className="absolute -left-10 top-10 w-8 h-8 bg-[hsl(var(--accent))] rounded-full opacity-70" />
                <div className="absolute -right-10 top-10 w-8 h-8 bg-[hsl(var(--accent))] rounded-full opacity-70" />
              </div>
              
              {/* Trunk */}
              <div className="w-5 h-40 bg-gradient-to-t from-[hsl(var(--trunk))] via-[hsl(var(--earth))] to-[hsl(var(--trunk))] rounded-t-xl shadow-lg relative">
                <div className="absolute top-8 -left-2 w-3 h-12 bg-[hsl(var(--trunk))] rounded-full opacity-60 rotate-45" />
                <div className="absolute top-8 -right-2 w-3 h-12 bg-[hsl(var(--trunk))] rounded-full opacity-60 -rotate-45" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
