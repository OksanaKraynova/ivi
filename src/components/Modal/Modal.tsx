import React, { Dispatch, SetStateAction } from 'react';
import styles from './modal.module.scss'

interface IModal {
    placeholder: string,
    arr: { title: string; }[],
    setActive: Dispatch<SetStateAction<boolean>>,
}

const Modal = ({ placeholder, setActive, arr }: IModal) => {
    return (
        <div className={styles.modal}>
              <button className={styles.modal__close} onClick={()=> setActive(false)} >
                    <svg width="20" height="20" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.9115 8.80583L2.84406 13.9567L0.961665 12.0433L6.02911 6.89245L1.0675 1.84914L2.85992 0.0272091L7.82153 5.07052L12.7673 0.0433371L14.6497 1.95672L9.70392 6.9839L14.6655 12.0272L12.8731 13.8491L7.9115 8.80583Z" fill="#d9d7e0" />
                    </svg>

                </button>
            <div className={styles.modal__overlay}>
              
                <div className={styles.modal__content}>
                    <h4>Поиск</h4>
                    <form >
                        <label>
                            <span className='span'>{placeholder}</span>
                            <input type="text" />
                        </label>
                    </form>
                    <ul>
                        {arr.map(item => (
                            <li key={item.title} >
                               <span> {item.title}</span>
                                </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Modal;