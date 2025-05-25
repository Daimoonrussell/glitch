import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 64 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`mx-auto max-w-screen-lg px-3 ${
        props.yPadding ? props.yPadding : 'py-16'
      }`}
    >
      {(props.title || props.description) && (
        <div className="mb-12 text-center">
          {props.title && (
            <h2 className="text-4xl font-bold text-white">{props.title}</h2>
          )}
          {props.description && (
            <div className="mt-4 text-xl md:px-20">{props.description}</div>
          )}
        </div>
      )}

      {props.children}
    </motion.div>
  );
};

export { Section };
