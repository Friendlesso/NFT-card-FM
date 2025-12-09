import EthIcon from '../../assets/icons/icon-ethereum.svg';
import ClockIcon from '../../assets/icons/icon-clock.svg';
import type { HoverTarget } from "./Card";

type CardDescriptionProps = {
  title: string
  description: string
  eth: string
  timeLeft: string
  hover: "title" | null;
  setHover: React.Dispatch<React.SetStateAction<HoverTarget>>
}

export function CardDescription({ title, description, eth, timeLeft, hover, setHover }: CardDescriptionProps) {
  return (
    <div className='flex flex-col gap-3'>
      <h3
        className={`text-(--text-color) w-fit text-xl/[150%] cursor-pointer transition-colors duration-150 ${hover === "title" ? 'text-(--text-light-blue)' : ''}`}
        onMouseEnter={() => {
          setHover("title")
        }}
        onMouseLeave={() => {
          setHover(null)
        }}
      >
        {title}
      </h3>
      <p className='text-(--text-light)'>{description}</p>
      <div className="flex justify-between items-center">
        {/* Eth and Days left */}
        <div className='flex gap-2 items-center'>
          <img src={EthIcon} alt="Eth icon" />
          <p className="text-(--text-light-blue)">{eth}</p>
        </div>
        <div className='flex items-center gap-2'>
          <img src={ClockIcon} alt="Clock Icon" />
          <p className='text-(--text-light)'>{timeLeft}</p>
        </div>
      </div>
    </div>
  )
}