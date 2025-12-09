import { CardCreator } from './CardCreator';
import { CardDescription } from './CardDescription';
import { CardImageComp } from './CardImageComp';
import CreatorImage from '../../assets/images/image-avatar.png';
import CardImage from '../../assets/images/image-equilibrium.jpg';
import { useState } from 'react';

export type HoverTarget = "image" | "title" | "creator" | null;

export function Card() {

  const [hover, setHover] = useState<HoverTarget>(null)
  const card = {
    title: 'Equilibrium #3429',
    description: 'Our Equilibrium collection promotes balance and calm.',
    eth: '0.041 ETH',
    timeLeft: '3 days left',
    creator: 'Jules Wyvern',
    creatorImage: CreatorImage,
    image: CardImage
  }

  return (
    <article className="bg-(--card-color) flex flex-col justify-center max-w-[80vw] w-84 p-6 gap-4 rounded-[1.250rem] shadow-(--box-shadow)">
      <CardImageComp
        image={card.image}
        hover={hover === "image" ? "image" : null}
        setHover={setHover}
      />
      <CardDescription
        title={card.title}
        description={card.description}
        eth={card.eth}
        timeLeft={card.timeLeft}
        hover={hover === "title" ? "title" : null}
        setHover={setHover}
      />
      <CardCreator
        creator={card.creator}
        creatorImage={card.creatorImage}
        hover={hover === "creator" ? "creator" : null}
        setHover={setHover}
      />
    </article>
  )
}