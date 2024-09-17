import { FaChevronLeft } from 'react-icons/fa';
import Module from './Module';

import modulesData from '../data/modules.json';

const Sidebar = () => {
    return (
        <aside className="bg-main-dark text-white w-80 h-screen p-4">
            <div className='flex items-center gap-[10px] text-base text-gray-200 mb-8'>
                <FaChevronLeft />
                Back to courses
            </div>
            <h3 className="text-sm font-light mb-1 text-gray-300">Course</h3>
            <h2 className="text-xl font-semibold mb-8">Blender 3D fundamentals</h2>
            <nav>
                {modulesData.map((module, idx) => (
                    <Module key={idx} title={module.moduleTitle} subModules={module.subModules} />
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;