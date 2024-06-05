import React from "react";
import dynamic from "next/dynamic";

const ProfileCard = dynamic(
  () => import("@/components/ProfileCard").then((mod) => mod.default),
  {
    loading: () => (
      <div className="w-full h-full rounded-lg bg-slate-500">Loading</div>
    ),
  }
);
interface Posts {
  name: string;
  username: string;
  avatar: string;
  content: string;
}

type TestimonialsProps = {
  list: Posts[];
};

const Testimonials: React.FC<TestimonialsProps> = ({
  list,
}: TestimonialsProps) => {
  return (
    <div className="flex flex-col items-center justify-between">
      <h2 className="text-4xl md:text-5xl text-center">Testimonials</h2>
      <div className="w-full p-2 sm:p-4 md:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        {list.map((post, index) => (
          <ProfileCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
