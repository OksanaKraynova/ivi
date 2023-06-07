import React, { useEffect, useRef, useState } from 'react';
import styles from './genres.module.scss'
import ButtonFilter from '@/src/components/ButtonFilter/ButtonFilter';
import BgWrapper from '@/src/components/BgWrapper/BgWrapper';
import ListChoose from '@/src/components/BgWrapper/ListChoose/ListChoose';
import { useRouter } from 'next/router';
import ru from '@/locales/genresMovie/ru';
import en from '@/locales/genresMovie/en';
import MovieBlock from '@/src/components/MovieBlock/MovieBlock';
import ItemGenre from './ItemGenre/ItemGenre';

const Genres = () => {
    const [show, setShow] = useState(false)
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
        <div className={styles.container}>
            <ButtonFilter img={show ? '/icons/up.svg' : '/icons/down.svg'} className={styles.btn} text={t.genres} onClick={() => setShow(!show)} />
            {show &&
                <BgWrapper className={styles.dop}>
                   <MovieBlock<Parameters<typeof ItemGenre>[0]> blockClass={styles.slider} slidesPerView={5} spaceBetween={10} breakpoints={ { 320: { slidesPerView: 3, spaceBetween: 5 }, 429: { slidesPerView: 4, spaceBetween: 20 },  649: { slidesPerView: 4, spaceBetween: 10 },   799: { slidesPerView: 5, spaceBetween: 15 },}
    } listCardsProps={ t.miniRowGenres} renderItem={(props) => <ItemGenre {...props} />} />
                    <ListChoose list={t.movies} />
                </BgWrapper>
            }
        </div>
    );
};

export default Genres;