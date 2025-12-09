import type { HoverTargert } from "./Card";

type CardCreatorProps = {
  creator: string;
  creatorImage: string;
  hover: "creator" | null;
  setHover: React.Dispatch<React.SetStateAction<HoverTargert>>
}

export function CardCreator({ creator, creatorImage, hover, setHover }: CardCreatorProps) {

  return (
    <div className="flex items-center gap-3 border-t border-(--text-light) pt-3">
      <img src={creatorImage} alt="Card Creator Image" className="w-8 h-8 border border-white rounded-[50%]" />
      <p className="text-(--text-light)">Creation of
        <span
          className={`text-(--text-color) pl-1.5 ${hover === "creator" ? 'text-(--text-light-blue) cursor-pointer' : ''}`}
          onMouseEnter={() => {
            setHover("creator");
          }}
          onMouseLeave={() => {
            setHover(null)
          }}
        >
          {creator}
        </span>
      </p>
    </div>
  )
}