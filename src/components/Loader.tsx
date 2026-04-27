import { motion } from "framer-motion";
import { Loader2, Sparkles } from "lucide-react";

interface LoaderProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  text?: string;
}

const Loader = ({ size = "md", className = "", text }: LoaderProps) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-16 w-16", 
    lg: "h-24 w-24",
    xl: "h-32 w-32"
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm", 
    lg: "text-base",
    xl: "text-lg"
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="flex flex-col items-center gap-6"
      >
        {/* Glow effect */}
        <div className="relative">
          <div className={`absolute inset-0 rounded-full bg-primary/20 blur-xl scale-150`} />
          
          {/* Main spinner */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="relative"
          >
            {/* Outer ring */}
            <div className={`absolute inset-0 rounded-full border-4 border-primary/20 ${size === "xl" ? "h-32 w-32" : size === "lg" ? "h-24 w-24" : size === "md" ? "h-16 w-16" : "h-8 w-8"}`} />
            
            {/* Inner spinner */}
            <Loader2 
              className={`${sizeClasses[size]} text-primary`}
              strokeWidth={3}
            />
            
            {/* Center dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.5, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="h-3 w-3 rounded-full bg-primary"
              />
            </div>
          </motion.div>

          {/* Floating sparkles */}
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                transform: `rotate(${index * 120}deg) translateY(-30px)`,
              }}
            >
              <motion.div
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.7,
                  ease: "easeInOut"
                }}
                className="rounded-full bg-primary/10 p-2"
              >
                <Sparkles className="h-4 w-4 text-primary" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {text && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center space-y-2"
          >
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`${textSizes[size]} font-medium text-foreground`}
            >
              {text}
            </motion.p>
            
            {/* Mini progress dots */}
            <div className="flex justify-center gap-1">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                  className="h-1.5 w-1.5 rounded-full bg-primary"
                />
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Loader;
