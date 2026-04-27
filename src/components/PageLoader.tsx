import { motion } from "framer-motion";
import { Loader2, Code2, Sparkles, Cpu } from "lucide-react";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-primary/10 backdrop-blur-xl">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/5" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative flex flex-col items-center gap-12"
      >
        {/* Floating icons around logo */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                transform: `rotate(${index * 60}deg) translateY(-120px)`,
              }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut"
                }}
                className="rounded-full bg-primary/10 p-3 backdrop-blur-sm"
              >
                {index % 2 === 0 ? (
                  <Sparkles className="h-6 w-6 text-primary" />
                ) : (
                  <Cpu className="h-6 w-6 text-primary" />
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main logo container */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl scale-150" />
          
          {/* Logo */}
          <div className="relative flex items-center gap-4 rounded-2xl bg-card/50 backdrop-blur-md border border-primary/20 p-8">
            {/* Static icon */}
            <Code2 className="h-20 w-20 text-primary" />
            
            {/* Text stays static */}
            <div className="flex flex-col">
              <span className="font-display text-4xl font-bold text-foreground">IT Park</span>
              <span className="font-display text-xl text-primary">Zomin</span>
            </div>
          </div>
        </div>

        {/* Large loading spinner */}
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
          <div className="absolute inset-0 h-24 w-24 rounded-full border-4 border-primary/20" />
          
          {/* Inner spinner */}
          <Loader2 className="h-24 w-24 text-primary" strokeWidth={3} />
          
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="h-4 w-4 rounded-full bg-primary"
            />
          </div>
        </motion.div>

        {/* Loading text with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center space-y-2"
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-2xl font-bold text-foreground"
          >
            Yuklanmoqda...
          </motion.p>
          <p className="text-lg text-muted-foreground">IT Park Zomin</p>
        </motion.div>

        {/* Progress bars */}
        <div className="flex flex-col items-center gap-4 w-64">
          <div className="flex gap-2">
            {[0, 1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                initial={{ width: 0 }}
                animate={{ width: [0, 40, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
                className="h-2 rounded-full bg-gradient-to-r from-primary to-purple-500"
              />
            ))}
          </div>
          
          {/* Progress percentage */}
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-sm text-muted-foreground"
          >
            Zamonaviy texnologiyalar yuklanmoqda
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PageLoader;
