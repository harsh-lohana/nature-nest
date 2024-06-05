import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { Avatar } from "flowbite-react";

type ProfileCardProps = {
  name: string;
  username: string;
  avatar: string;
  content: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  username,
  avatar,
  content,
}: ProfileCardProps) => {
  return (
    <div className=" w-full flex flex-col gap-0 rounded-xl border-solid border-1 shadow-lg p-2 md:p-6 border-gray-500 ">
      <div className="flex gap-0">
        <div className="w-20 flex justify-center items-center">
          <Avatar
            img={avatar}
            alt={name}
            rounded
            className="size-8 md:size-10"
          />
        </div>
        <div className="flex flex-col gap-0">
          <span className="flex gap-2 items-center justify-start">
            <p className="text-base">{name}</p>
            <FaXTwitter className="text-black dark:text-white" />
          </span>
          <span className="text-gray-500 text-sm">@{username}</span>
        </div>
      </div>
      <div className="flex-1 flex items-center p-4 md:p-6">
        <p className="text-lg">{content}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
