import React, { LegacyRef, MouseEvent, useEffect, useRef, useState } from 'react';
import styles from './countries.module.scss'
import ButtonFilter from '@/src/components/ButtonFilter/ButtonFilter';
import BgWrapper from '@/src/components/BgWrapper/BgWrapper';
import ListChoose from '@/src/components/BgWrapper/ListChoose/ListChoose';
import { useRouter } from 'next/router';
import ru from '@/locales/countries/ru';
import en from '@/locales/countries/en';
import MovieBlock from '@/src/components/MovieBlock/MovieBlock';
import ButtonWrapper from '@/src/components/ButtonWrapper/ButtonWrapper';

const Countries = () => {
    const [show, setShow] = useState(false)
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
        <div className={styles.container}>
            <ButtonFilter img={show ? '/icons/up.svg' : '/icons/down.svg'} text={t.countries} onClick={() => setShow(!show)} className='btn' />
            {show &&
                <div >
                    <BgWrapper className={styles.dop}  >
                        <MovieBlock<Parameters<typeof ButtonWrapper>[0]> blockClass={styles.slider} slidesPerView={7} spaceBetween={10} breakpoints={{ 320: { slidesPerView: 3, spaceBetween: 5 }, 399: { slidesPerView: 4, spaceBetween: 5 }, 499: { slidesPerView: 5, spaceBetween: 10 }, 579: { slidesPerView: 6, spaceBetween: 10 }, 629: { slidesPerView: 7, spaceBetween: 10 } }
                        } listCardsProps={t.miniList} renderItem={(props) => <ButtonWrapper {...props} />} />
                        <ListChoose list={t.list} />
                    </BgWrapper>
                </div>
            }
        </div>
    );
};

export default Countries;