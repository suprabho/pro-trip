"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import type { Stop } from "@/lib/generated-trips";

interface TodoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  stop: Stop;
}

export function TodoDialog({ open, onOpenChange, stop }: TodoDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-paper">
        <DialogHeader>
          <DialogTitle className="font-serif text-lg">
            {stop.emoji} {stop.name}
          </DialogTitle>
          <DialogDescription>
            {stop.todos!.filter((t) => t.done).length} of {stop.todos!.length}{" "}
            completed
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 mt-1">
          {stop.todos!.map((todo, i) => (
            <div
              key={i}
              className={cn(
                "flex items-start gap-2.5 rounded-lg border border-line px-3 py-2.5",
                todo.done && "opacity-50"
              )}
            >
              <span className="mt-0.5 text-sm">
                {todo.done ? "✅" : "⬜"}
              </span>
              <div className="flex-1 min-w-0">
                <p
                  className={cn(
                    "text-sm leading-snug",
                    todo.done && "line-through text-muted-foreground"
                  )}
                >
                  {todo.note}
                </p>
                {todo.link && (
                  <a
                    href={todo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-blue-600 hover:underline truncate block mt-0.5"
                  >
                    {todo.link}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
