import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const QuestionAndAnswer = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className="w-[800px] bg-white p-3 rounded-lg shadow-lg mb-4 cursor-pointer"
            onClick={toggleAnswer}
        >
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-normal">{question}</h3>
                <FaChevronDown className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`} />
            </div>

            <div
                className={`mt-4 transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'
                    }`}
            >
                <p className="text-gray-500">{answer}</p>
            </div>
        </div>
    );
};

export default QuestionAndAnswer;