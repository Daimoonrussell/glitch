import { useState } from 'react';

export type FAQItem = {
  question: string;
  answer: string;
};

export const FAQAccordion = ({ items }: { items: FAQItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="rounded-xl border-l-4 border-primary-500 bg-gray-900 p-6 text-left text-white shadow transition-all duration-300"
        >
          <button
            className="mb-1 flex w-full items-center justify-between text-lg font-bold text-primary-300 focus:outline-none"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
          >
            <span>{item.question}</span>
            <span
              className={`ml-4 transition-transform duration-300${openIndex === idx ? 'rotate-45' : 'rotate-0'}`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'mt-2 max-h-40 opacity-100' : 'mt-0 max-h-0 opacity-0'}`}
            style={{ pointerEvents: openIndex === idx ? 'auto' : 'none' }}
          >
            <div className="pb-2 text-base text-gray-100">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
