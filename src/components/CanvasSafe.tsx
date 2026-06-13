import { useState, useEffect, type ReactNode } from "react";

export default function CanvasSafe({ children, fallback }: { children: ReactNode; fallback?: ReactNode }) {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    try {
      const c = document.createElement("canvas");
      if (c.getContext("2d")) setOk(true);
    } catch {
      // canvas not supported
    }
  }, []);

  return ok ? <>{children}</> : <>{fallback ?? null}</>;
}
