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
      className={`mx-auto max-w-screen-lg px-3 py-8 md:py-24 ${
        props.yPadding ? props.yPadding : ''
      } flex flex-col items-center`}
    >
      {(props.title || props.description) && (
        <div className="mb-8 flex w-full flex-col items-center text-center md:mb-14">
          {props.title && (
            <h2 className="xs:text-3xl w-full text-center text-2xl font-extrabold tracking-tight text-white md:text-5xl">
              {props.title}
            </h2>
          )}
          {props.description && (
            <div className="mt-2 w-full px-2 text-center text-base text-gray-300 md:px-20 md:text-xl">
              {props.description}
            </div>
          )}
          <div className="mx-auto mb-6 mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400 opacity-80 md:w-24" />
        </div>
      )}
      <div className="flex w-full flex-col items-center">{props.children}</div>
    </motion.div>
  );
};

export { Section };
