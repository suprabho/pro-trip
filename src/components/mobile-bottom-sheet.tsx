"use client";

import { useState, useRef, useCallback, type ReactNode } from "react";

const SNAP_PEEK = 48;
const SNAP_HALF = 50; // percent of viewport
const SNAP_FULL = 90; // percent of viewport

type Snap = "peek" | "half" | "full";

function snapToPixels(snap: Snap) {
  if (snap === "peek") return SNAP_PEEK;
  const vh = window.innerHeight;
  if (snap === "half") return vh * (SNAP_HALF / 100);
  return vh * (SNAP_FULL / 100);
}

function closestSnap(height: number): Snap {
  const vh = window.innerHeight;
  const peekDist = Math.abs(height - SNAP_PEEK);
  const halfDist = Math.abs(height - vh * (SNAP_HALF / 100));
  const fullDist = Math.abs(height - vh * (SNAP_FULL / 100));
  const min = Math.min(peekDist, halfDist, fullDist);
  if (min === peekDist) return "peek";
  if (min === halfDist) return "half";
  return "full";
}

export function MobileBottomSheet({ children }: { children: ReactNode }) {
  const [snap, setSnap] = useState<Snap>("half");
  const [dragging, setDragging] = useState(false);
  const [dragHeight, setDragHeight] = useState<number | null>(null);
  const startY = useRef(0);
  const startHeight = useRef(0);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      startY.current = e.clientY;
      startHeight.current = snapToPixels(snap);
      setDragging(true);
    },
    [snap]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging) return;
      const delta = startY.current - e.clientY;
      const newHeight = Math.max(SNAP_PEEK, Math.min(startHeight.current + delta, window.innerHeight * (SNAP_FULL / 100)));
      setDragHeight(newHeight);
    },
    [dragging]
  );

  const onPointerUp = useCallback(() => {
    if (!dragging) return;
    setDragging(false);
    if (dragHeight !== null) {
      setSnap(closestSnap(dragHeight));
    }
    setDragHeight(null);
  }, [dragging, dragHeight]);

  const height = dragHeight ?? snapToPixels(snap);

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-1001 flex flex-col bg-paper rounded-t-2xl shadow-[0_-4px_24px_rgba(0,0,0,0.12)] border-t border-line"
      style={{
        height,
        transition: dragging ? "none" : "height 0.3s cubic-bezier(0.25, 1, 0.5, 1)",
      }}
    >
      <div
        className="flex items-center justify-center py-2.5 cursor-grab active:cursor-grabbing shrink-0 touch-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        <div className="w-9 h-1 rounded-full bg-[#ccc]" />
      </div>
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
}
