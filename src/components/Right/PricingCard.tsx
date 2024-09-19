import { FaVideo, FaFileAlt, FaFolderOpen, FaMobileAlt } from 'react-icons/fa';

const PricingCard = () => {
    return (
        <div className='bg-white rounded-[20px] shadow-lg p-6 max-w-xs w-full'>
            <div className="mb-4">
                <p className="text-gray-500 text-sm">Full course</p>
                <div className="flex items-center">
                    <span className="text-2xl font-bold">$15.99</span>
                    <span className="text-gray-400 text-sm ml-2 line-through">$39.99</span>
                </div>
            </div>

            <div className="mb-6">
                <p className="font-semibold mb-2">Course includes:</p>
                <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                        <FaVideo className="mr-2 text-gray-500" />
                        56 hours on-demand video
                    </li>
                    <li className="flex items-center">
                        <FaFileAlt className="mr-2 text-gray-500" />
                        6 Articles
                    </li>
                    <li className="flex items-center">
                        <FaFolderOpen className="mr-2 text-gray-500" />
                        8 Downloadable resources
                    </li>
                    <li className="flex items-center">
                        <FaMobileAlt className="mr-2 text-gray-500" />
                        Mobile version
                    </li>
                </ul>
            </div>

            <div className="mb-4">
                <button className="bg-main-purple text-white font-semibold w-full py-2 rounded hover:bg-blue-600 transition">
                    Add to cart
                </button>
            </div>
            <div>
                <button className="border border-main-purple text-main-purple font-semibold w-full py-2 rounded hover:bg-blue-50 transition">
                    Buy now
                </button>
            </div>

            <p className="text-center text-gray-400 text-sm mt-4">
                30-Day money-back guarantee
            </p>
        </div>
    );
}

export default PricingCard;