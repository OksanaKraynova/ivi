import React, { useState } from 'react';
import styles from './profileIserBlock.module.scss'
import ChooseUserProfile from './ChooseUserProfile/ChooseUserProfile';
import Button from '../../Button/Button';
import Image from 'next/image';

const profileUserBlock = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLogin, setIsLogin] = useState(true)
    return (
        <div>
            {isLogin ?
                <ChooseUserProfile />
                :
                <Button variant='minimal' color='pink' >
                    <div className={styles.btn} >
                        <img src='/icons/profile/Frame.svg' alt="icon" />
                        Войти или зарегистрироваться
                    </div>
                </Button>

            }
        </div>
    );
};

export default profileUserBlock;