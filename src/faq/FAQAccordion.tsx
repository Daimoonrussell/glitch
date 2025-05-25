import { useState } from "react";

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
          className="bg-gray-900 rounded-xl p-6 shadow text-left border-l-4 border-primary-500 text-white transition-all duration-300"
        >
          <button
            className="w-full flex justify-between items-center font-bold mb-1 text-primary-300 text-lg focus:outline-none"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
          >
            <span>{item.question}</span>
            <span
              className={`ml-4 transform transition-transform duration-300 ${openIndex === idx ? "rotate-45" : "rotate-0"}`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}`}
            style={{ pointerEvents: openIndex === idx ? "auto" : "none" }}
          >
            <div className="text-gray-100 text-base pb-2">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
