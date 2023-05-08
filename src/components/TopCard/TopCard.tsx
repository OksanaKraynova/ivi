import Link from 'next/link';
import Image from 'next/image';
import styles from './TopCard.module.scss';
import zero from "../../../public/icons/numbers/0.svg"
import one from "../../../public/icons/numbers/1.svg"
import two from "../../../public/icons/numbers/2.svg"
import three from "../../../public/icons/numbers/3.svg"
import four from "../../../public/icons/numbers/4.svg"
import five from "../../../public/icons/numbers/5.svg"
import six from "../../../public/icons/numbers/6.svg"
import seven from "../../../public/icons/numbers/7.svg"
import eight from "../../../public/icons/numbers/8.svg"
import nine from "../../../public/icons/numbers/9.svg"

const numbers = [
  zero, one, two, three, four,
  five, six, seven, eight, nine,
];

interface TopCardProps {
  img: string;
  href: string;
  // index: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  index: number;
}

export const TopCard = ({ img, href, index }: TopCardProps) => {

  return (

    <Link className={styles.box} href={href}>

      <img className={styles.img} src={img} alt="poster" />

      <div className={styles.fade} />

      <div className={styles.index}>
        {
          index === 10 ?
            <>
              <Image className="icon" src={numbers[1]} alt="1" />
              <Image className="icon" src={numbers[0]} alt="0" />
            </> :
            <Image className="icon" src={numbers[index]} alt={`${index}`} />
        }
      </div>

    </Link>

  );
};