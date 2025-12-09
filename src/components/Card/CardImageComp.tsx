import type { HoverTarget } from "./Card";
import ViewIcon from '../../assets/icons/icon-view.svg';

type CardImageProps = {
  image: string;
  hover: "image" | null;
  setHover: React.Dispatch<React.SetStateAction<HoverTarget>>
}

export function CardImageComp({ image, hover, setHover }: CardImageProps) {
  return (
    <div
      className={`flex relative justify-center items-center cursor-pointer `}
      onMouseEnter={() => {
        setHover("image");
      }}
      onMouseLeave={() => {
        setHover(null)
      }}
    >
      <img
        src={image}
        alt="Card Image"
        className="rounded-[0.625rem]"
      />
      {hover === 'image' && (
        <>
          <div className="absolute inset-0 rounded-[0.625rem] bg-(--image-light-blue) opacity-50" />

          <img
            src={ViewIcon}
            alt="View Icon"
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
          />
        </>


      )}

    </div>
  )
}