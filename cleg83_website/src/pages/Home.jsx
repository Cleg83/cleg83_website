import { motion } from 'framer-motion';

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.75,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.85 },
};

export default function Home() {
  return (
    <div className="relative min-h-screen text-black">
      <div className="absolute inset-0 z-0 bg-[url(/images/pexels-marek-piwnicki-3907296-20066246.jpg)] bg-cover" />
      <div className="relative pt-16 z-10 min-h-screen">
        <motion.div
          className="pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }} 
        >
          <h1 className="text-4xl text-center">Welcome</h1>
        </motion.div>
        <motion.div
          className="pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }} 
        >
          <p className="text-2xl">Let's see what we can build together!</p>
        </motion.div>
        <motion.div
          className="absolute py-2 w-full left-0 bottom-2 flex flex-row justify-around"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[1, 2, 3].map((_, idx) => (
            <motion.div
              key={idx}
              className="size-96 bg-black rounded"
              variants={childVariants}
              transition={{ duration: 1.5 }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
