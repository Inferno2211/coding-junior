import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { PiNumberCircleOne, PiNumberCircleTwo, PiNumberCircleThree, PiNumberCircleFour, PiNumberCircleFive } from 'react-icons/pi';

interface ModuleProps {
    title: string;
    subModules: string[];
    children?: React.ReactNode;
}

// Array of icons, indexed from 0 to 4
const icons = [
    <PiNumberCircleOne key={0} size={25} color='#8576f5' />,
    <PiNumberCircleTwo key={1} size={25} color='grey' />,
    <PiNumberCircleThree key={2} size={25} color='grey' />,
    <PiNumberCircleFour key={3} size={25} color='grey' />,
    <PiNumberCircleFive key={4} size={25} color='grey' />
];

const Module: React.FC<ModuleProps> = ({ title, subModules, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(prev => !prev);

    return (
        <div className="mb-4">
            <div
                onClick={toggleOpen}
                className="flex justify-between items-center cursor-pointer p-2 hover:bg-slate-800 rounded text-base text-gray-200"
            >
                <span>{title}</span>
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {isOpen && (
                <div className="pl-1 mt-2">
                    <ul>
                        {subModules.map((subModule, idx) => (
                            <li key={idx} className="flex justify-between items-center p-1 hover:bg-gray-600 rounded mt-1">
                                <div className='flex items-center gap-2'>
                                    {icons[idx] || null}
                                    <span>{subModule}</span>
                                </div>
                                {idx === 0 && <span className="text-sm bg-zinc-600 px-2 py-0.5 rounded">Preview</span>}
                            </li>
                        ))}
                    </ul>
                    {children && <div className="mt-2">{children}</div>}
                </div>
            )}
        </div>
    );
};

export default Module;