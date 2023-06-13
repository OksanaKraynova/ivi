import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './FooterNavbarDropdown.module.scss';
import downIcon from "@/public/icons/down.svg"
import Button from '../../Button/Button';

interface FooterNavbarDropdownProps<T> {
  buttonTitle: string;
  buttonIcon: string;
  dropdownBlockProps: T;
  dropdownBlock: (item: T) => React.ReactNode;
}

export default function FooterNavbarDropdown<T>(props: FooterNavbarDropdownProps<T>) {

  const [hidden, setHidden] = useState<boolean>(true);

  return (

    <>

      <Button variant={'smallest'} onClick={() => setHidden(!hidden)}>

        <div className={styles.button}>
          <Image className={styles.icon} src={props.buttonIcon} alt='icon' />
          {props.buttonTitle}
          <Image
            className={hidden ? classNames(styles.icon, styles.up) : styles.icon}
            src={downIcon} alt={hidden ? 'up' : 'down'}
            width={12}
            height={12}
          />
        </div>

      </Button>

      <div className={styles.dropdownBox} hidden={hidden}>
        {props.dropdownBlock(props.dropdownBlockProps)}
      </div>

    </>

  );
};
