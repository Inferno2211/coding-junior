import { FaStar } from 'react-icons/fa';

const EmojiCard = () => {
    return (
        <div className="bg-white rounded-2xl shadow-lg max-w-xs w-full flex justify-center items-center p-5 gap-4">
            <div>
                <img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQKzrTa7A2ECGL-P8hpF7xWD8e4SpZoVvpl05ZklcGtyOHn5_9u' height={60} width={60}/>
            </div>

            <div className='flex flex-col justify-center gap-2'>
                <h2 className="text-lg font-semibold">Rating</h2>
                <p className="text-sm text-gray-500">2,492 Students</p>
            </div>

            <div className='flex flex-col text-gray-500 justify-center mt-3 gap-2'>
                <div className='flex text-yellow-500'>
                    <FaStar className="mr-1" />
                    <FaStar className="mr-1" />
                    <FaStar className="mr-1" />
                </div>

                <span>3.5</span>
            </div>
        </div>
    )
}

export default EmojiCard