import { useEffect } from "react";
import { motion } from "framer-motion";

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 4500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-bg flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="flex flex-col items-center gap-3">
        <motion.span
          className="text-7xl sm:text-8xl md:text-9xl font-serif text-fg tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          atlas.
        </motion.span>

        <motion.p
          className="text-base sm:text-lg text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          a{" "}
          <a
            href="https://kaushikieee.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg underline underline-offset-2 decoration-border hover:decoration-accent transition-colors"
          >
            kaushikieee.me
          </a>{" "}
          initiative
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-[15%] w-48 h-[2px] bg-border overflow-hidden rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.div
          className="h-full bg-accent rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, delay: 0.9, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
