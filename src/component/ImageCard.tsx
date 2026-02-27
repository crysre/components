export const ImageCard = () => {
  const imgs = [
    "https://images.pexels.com/photos/33382359/pexels-photo-33382359.jpeg",
    "https://images.pexels.com/photos/33382356/pexels-photo-33382356.jpeg",
    "https://images.pexels.com/photos/34219448/pexels-photo-34219448.jpeg",
  ];

  return (
    <div className="h-full w-full bg-neutral-950 pt-[20%]">
      <div className=" group  hover:rotate-y-40 transition-all duration-400 relative h-200 w-200  mx-auto">
        <Card
          className=" hover:top-40  z-10 left-70 top-30 group-hover:left-110 group-hover:top-60 h-40 w-60 transition-all duration-400"
          img={imgs[0]}
          index={0}
        />
        <Card
          className=" hover:top-40  z-10 left-65 top-40 group-hover:left-80 group-hover:top-55 h-50 w-70 transition-all duration-400"
          img={imgs[1]}
          index={0}
        />
        <Card
          className=" hover:top-40  z-10 left-60 top-50 group-hover:left-50 group-hover:top-50 h-60 w-80 transition-all duration-400 "
          img={imgs[2]}
          index={0}
        />
      </div>
    </div>
  );
};

type CardProps = {
  className: string;
  img: string;
  index: number;
};

const Card = ({ className, img, index }: CardProps) => {
  return (
    <div
      key={index}
      className={`${className} absolute rounded-2xl overflow-hidden bg-neutral-500`}
    >
      <img src={`${img}`} alt="" />
    </div>
  );
};
