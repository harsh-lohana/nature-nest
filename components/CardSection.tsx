import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Loading from "./Loading";

const Card = dynamic(() => import("flowbite-react").then((mod) => mod.Card), {
  loading: () => <Loading />,
});
interface Link {
  name: string;
  src: string;
}

type CardSectionProps = {
  title: string;
  list: Link[];
};

const CardSection: React.FC<CardSectionProps> = ({
  title,
  list,
}: CardSectionProps) => {
  return (
    <section className="flex flex-col">
      <h2 className=" lg:text-6xl sm:text-5xl text-black text-center py-14">
        {title}
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:p-8 p-6 place-items-center">
        {list.map((suggestion, index) => (
          <Link href={"/"} className="w-full h-full" key={index}>
            <Card
              className="w-full overflow-hidden"
              renderImage={() => (
                <div className="relative w-full pb-[75%] overflow-hidden">
                  <Image
                    src={suggestion.src}
                    alt={suggestion.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
            >
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                {suggestion.name}
              </p>
            </Card>
          </Link>
        ))}
      </section>
    </section>
  );
};

export default CardSection;
