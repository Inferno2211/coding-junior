import { FaStar, FaUsers, FaChalkboardTeacher, FaClipboardList } from 'react-icons/fa';

const PublishCard = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs w-full h-auto">
            <h2 className="text-lg font-semibold mb-4">Publisher</h2>

            {/* Profile */}
            <div className="flex items-center mb-4">
                <img
                    src="https://via.placeholder.com/50" // Replace this with actual image URL
                    alt="Ryan Curtis"
                    className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                    <h3 className="text-md font-semibold">Ryan Curtis</h3>
                    <p className="text-sm text-gray-500">3D Artist</p>
                </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-4">
                Hey! My name is Ryan, I’m 26 and a freelance 3D Artist with around 6 years of experience.
            </p>

            {/* Stats */}
            <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                    <FaStar className="mr-2 text-gray-500" />
                    4.8 Instructor rating
                </li>
                <li className="flex items-center">
                    <FaClipboardList className="mr-2 text-gray-500" />
                    889 Reviews
                </li>
                <li className="flex items-center">
                    <FaUsers className="mr-2 text-gray-500" />
                    4,887 Students
                </li>
                <li className="flex items-center">
                    <FaChalkboardTeacher className="mr-2 text-gray-500" />
                    6 Courses
                </li>
            </ul>
        </div>
    );
};

export default PublishCard;