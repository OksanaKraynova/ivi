import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './FooterNavbarDropdown.module.scss';
import downIcon from "../../../../public/icons/down.svg"

interface FooterNavbarDropdownProps<T> {
  buttonTitle: string;
  buttonIcon: string;
  dropdownBlockProps: T;
  dropdownBlock: (item: T) => React.ReactNode;
}

export function FooterNavbarDropdown<T>(props: FooterNavbarDropdownProps<T>) {

  const [hidden, SetHidden] = useState<boolean>(true);

  return (
    <>

      <div
        className={styles.button}
        onClick={() => SetHidden(!hidden)}
      >
        <Image className={styles.icon} src={props.buttonIcon} alt='icon' />
        {props.buttonTitle}
        <Image
          className={hidden ? classNames(styles.icon, styles.up) : styles.icon}
          src={downIcon} alt={hidden ? 'up' : 'down'}
          width={12}
          height={12}
        />

      </div>

      <div
        className={styles.dropdownBox}
        hidden={hidden}
      >

        {props.dropdownBlock(props.dropdownBlockProps)}

      </div>

    </>
  );
};
