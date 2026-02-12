import { cn } from "@/lib/utils";

interface TransitionHookProps {
  text: string;
  className?: string;
}

export function TransitionHook({ text, className }: TransitionHookProps) {
  return (
    <div className={cn("mt-16 flex justify-center", className)}>
      <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-2">
        <div
          className="size-1.5 rounded-full bg-primary animate-pulse"
          aria-hidden="true"
        />
        <p className="text-sm text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}
