import Image from 'next/image';
import styles from './MaterialBox.module.scss';
import clockIcon from "@/public/icons/clock-arrow.svg";
import IMaterial from '@/types/IMaterial';

interface MaterialBoxProps {
  material: IMaterial;
  clockIcon: boolean;
  openMaterial: (materialUrl: string) => void;
}

export default function MaterialBox(props: MaterialBoxProps) {

  return (

    <div className={styles.trailerBox}>
      <img
        className={styles.img}
        src={props.material.poster}
        alt={props.material.name}
        onClick={() => props.openMaterial(props.material.video ?? props.material.poster)}
      />
      <p className={styles.title}>{props.material.name}</p>
      {
        props.clockIcon && props.material.video &&
        < Image
          className={styles.icon}
          src={clockIcon}
          alt="время"
          width={15}
          height={15}
        />
      }
      <p className={styles.subtitle}>{props.material.time}</p>
    </div>
  );
};
