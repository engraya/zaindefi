import { motion } from 'framer-motion';
import StatCard from './StatCard';

function Stats() {
  const cards = new Array(7).fill(null).map((_, idx) => <StatCard key={idx} />);

  return (
    <div className="w-full sm:px-16">
      <div className="mx-auto flex flex-col items-center lg:items-start justify-center lg:justify-start">
        {/* Infinite scrolling with framer-motion */}
        <div className="w-full overflow-hidden mx-auto lg:w-[95%]">
          <motion.div
            className="w-full h-[10vh] flex gap-3 justify-between items-center"
            animate={{
              x: ['0%', '-100%'],
            }}
            transition={{
              x: {
                repeat: Infinity, 
                repeatType: 'loop',
                duration: 10, 
                ease: 'linear',
              },
            }}
          >
            {cards.concat(cards)} 
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
