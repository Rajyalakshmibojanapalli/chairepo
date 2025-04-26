import React, { useState } from "react";

const faqs = [
  {
    question: "What is the eligibility criteria?",
    answer:
      "Any Indian student with a completed undergraduate degree or in final year of study can apply for the lottery.",
  },
  {
    question: "What does Rs. 888 cover?",
    answer:
      "Rs. 888 is your entry fee that includes registration, access to the quiz, and entry into the lottery draw.",
  },
  {
    question: "Who pays the UK tuition & visa fees?",
    answer:
      "INU Choose and Global Alliance Academy fully sponsor the 3 selected students for tuition, visa, and application fees.",
  },
  {
    question: "How are winners chosen?",
    answer:
      "Winners are selected through a transparent, randomized lottery system among those who complete the quiz.",
  },
  {
    question: "Can I apply again if I don’t win?",
    answer:
      "Yes, you can register and participate again in the next intake round.",
  },
  {
    question: "What are the quiz topics?",
    answer:
      "Quiz topics include UK study basics, visa process, cost of living, university knowledge, and simple logic or academic aptitude.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#5a7a9a] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 mt-20 text-white text-center">
          ❓ Frequently Asked Questions (FAQs)
        </h2>
        <p className="text-center mb-8 text-white">
          Find answers to all your questions about INU Choose.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left text-lg font-medium text-[#5a7a9a] hover:bg-gray-100 transition-all duration-200"
              >
                {faq.question}
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-800 border-t">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
