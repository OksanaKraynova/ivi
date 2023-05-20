import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './TopCard.module.scss';
import zero from "@/public/icons/numbers/0.svg"
import one from "@/public/icons/numbers/1.svg"
import two from "@/public/icons/numbers/2.svg"
import three from "@/public/icons/numbers/3.svg"
import four from "@/public/icons/numbers/4.svg"
import five from "@/public/icons/numbers/5.svg"
import six from "@/public/icons/numbers/6.svg"
import seven from "@/public/icons/numbers/7.svg"
import eight from "@/public/icons/numbers/8.svg"
import nine from "@/public/icons/numbers/9.svg"

const numbersIcon = [
  zero, one, two, three, four,
  five, six, seven, eight, nine,
];

interface TopCardProps {
  img: string;
  href: string;
  index: number;
}

export const TopCard: FC<TopCardProps> = (props) => {

  let numbers = Array.from(props.index.toString()).filter(item => Number.isInteger(+item));

  return (

    <Link className={styles.box} href={props.href}>

      <img className={styles.img} src={props.img} alt="poster" />

      <div className={styles.fade} />

      <div className={styles.index}>
        {numbers.map((number, index) =>
          <Image key={index} className="icon" src={numbersIcon[+number]} alt={number} />
        )}
      </div>

    </Link>

  );
};