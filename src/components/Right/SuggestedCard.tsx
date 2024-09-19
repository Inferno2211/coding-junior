import { FaStar } from 'react-icons/fa';
import suggestedCourses from '../../data/suggestedCourses.json'

const SuggestedCard = () => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-4 max-w-xs w-full">
            <h2 className="text-lg font-semibold mb-4">Suggested courses</h2>

            {suggestedCourses.map((course, idx) => (
                <div key={idx} className="flex items-center mb-4">
                    {/* Course Image */}
                    <img
                        src={course.image}
                        alt={course.title}
                        className="w-16 h-16 rounded-lg mr-4"
                    />
                    {/* Course Info */}
                    <div className="flex flex-col">
                        <h3 className="text-md font-semibold">{course.title}</h3>
                        <p className="text-sm text-gray-500">By {course.author}</p>
                        <div className="flex items-center text-gray-500">
                            <div className='text-yellow-500 flex'>
                            <FaStar className="mr-1" />
                            <FaStar className="mr-1" />
                            <FaStar className="mr-1" />
                            </div>
                            <span>{course.rating}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SuggestedCard;