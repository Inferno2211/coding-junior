import { IoIosShare } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { IconType } from "react-icons";
import { FaRegEye, FaRegClock } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { RxVideo } from "react-icons/rx";
import qnaData from '../data/qna.json'
import QuestionAndAnswer from "./QuestionAndAnswer";

interface CourseCardProps {
  icon: IconType;
  count: string;
  heading: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  icon: Icon,
  count,
  heading,
}) => {
  return (
    <div className="bg-white rounded-lg inline-block p-6 min-w-[160px] mx-2">
      <p className="text-gray-600 mb-1 text-lg">{heading}</p>
      <div className="flex items-center gap-3">
        <Icon className="text-2xl text-gray-800" />
        <p className="font-semibold text-gray-800 text-lg">{count}</p>
      </div>
    </div>
  );
};

const UserProfile = () => (
  <div className="flex items-center">
    <div className="bg-green-900 rounded-full w-[60px] h-[60px] m-6 ml-0 mt-3"></div>
    <div className="flex flex-col items-start mb-2">
      <p className="text-lg text-gray-700">Abir Thakur</p>
      <p className="text-md text-gray-500">Software Development Engineer</p>
    </div>
  </div>
);

const UserActions = () => (
  <div className="flex items-center gap-10">
    <div className="flex items-center gap-3">
      <IoHeart className="text-2xl text-gray-800" />
      <p className="font-bold text-gray-800 text-lg">962</p>
    </div>
    <div className="flex items-center gap-3">
      <IoIosShare className="text-2xl text-gray-800" />
      <p className="font-bold text-gray-800 text-lg">Share</p>
    </div>
    <PiDotsThreeOutlineFill className="text-2xl text-gray-800" />
  </div>
);

const Hero = () => {
  return (
    <div>
      <div>
        <div className="w-[800px] h-[420px] rounded-xl mb-4 overflow-hidden">
          <img
            src="https://img.youtube.com/vi/2RHpvof_NpI/maxresdefault.jpg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-between w-[800px]">
          <UserProfile />
          <UserActions />
        </div>
      </div>

      <div className="mt-6">
        <p className="font-bold text-2xl text-gray-800 mb-2">Description</p>
        <p className="w-[800px] font-light text-gray-600 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          itaque reiciendis modi autem fuga? Saepe eligendi laudantium dolorum,
          ad ipsum mollitia corrupti natus temporibus labore iure nesciunt
          itaque vel repudiandae! Ipsum, ullam! Tenetur excepturi nemo suscipit
          tempora dignissimos iste nulla nobis error aspernatur doloremque, enim
          eos.
        </p>
      </div>

      <div className="mt-6">
        <p className="font-semibold text-2xl text-gray-800 mb-2">Course Details</p>
        <div className="flex gap-6" >
          <CourseCard icon={RxVideo} count="128" heading="Lessons" />
          <CourseCard icon={FaRegClock} count="56h 28min" heading="Duration" />
          <CourseCard icon={SlGraph} count="Beginner" heading="Skill Level" />
          <CourseCard icon={FaRegEye} count="12,680" heading="Views" />
        </div>
      </div>

      <div className="mt-6">
        <p className="font-semibold text-2xl text-gray-800 mb-2">Frequently asked questions</p>
        <div className="flex flex-col gap-1" >
          {qnaData.map((item, idx) => (
            <QuestionAndAnswer key={idx} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Hero;