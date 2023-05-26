import { FC } from 'react';
import Image from 'next/image';
import Button from '../Button/Button';
import styles from './DataBlock.module.scss';
import closeIcon from "../../../public/icons/close.svg"

interface DataBlockProps {
  items: string[];
  placeholder?: string;
  deliteItem?: (index: number) => void;
}

export const DataBlock: FC<DataBlockProps> = (props) => {

  return (

    <div className={styles.box}>

      {props.items.map((item, index) =>
        <div className={styles.button} key={index}>
          <Button
            variant="small"
          >
            <div className={styles.buttonTitle}>
              <p className={styles.text}>{item}</p>
              <Image
                className={styles.icon}
                src={closeIcon.src}
                alt="Удалить"
                width={12}
                height={12}
                onClick={() => { props.deliteItem && props.deliteItem(index); }}
              />
            </div>
          </Button>
        </div>

      )}

      <div className={styles.placholder}>
        {props.placeholder}
      </div>

    </div>

  );
}