import styles from './FooterAdaptiveDropdown.module.scss';
import classNames from 'classnames';
import { useState } from 'react';

const arrowDownIcon = <svg xmlns="http://www.w3.org/2000/svg" width="17" height="7" viewBox="0 0 17 7" fill="none">
  <path d="M0.848999 2.44607L1.849 0.862732L8.849 5.0294L15.849 0.862732L16.849 2.44607L9.849 6.61273C9.51567 6.7794 9.18233 6.86273 8.849 6.86273C8.51567 6.86273 8.18233 6.7794 7.849 6.61273L0.848999 2.44607Z" fill="white" />
</svg>

interface FooterAdaptiveDropdownProps<T> {
  buttonTitle: string;
  buttonIcon: JSX.Element;
  dropdownBlockProps: T;
  dropdownBlock: (item: T) => React.ReactNode;
}

export function FooterAdaptiveDropdown<T>(props: FooterAdaptiveDropdownProps<T>) {

  const [hidden, SetHidden] = useState<boolean>(true);

  return (
    <>

      <div
        className={styles.button}
        onClick={() => SetHidden(!hidden)}
      >

        <div className={styles.icon}>
          {props.buttonIcon}
        </div>
        {props.buttonTitle}
        <div className={hidden ? classNames(styles.icon, styles.up) : styles.icon}>
          {arrowDownIcon}
        </div>

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
