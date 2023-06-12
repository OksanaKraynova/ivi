import React from 'react';
import NewFilmRow from './NewFilmRow/NewFilmRow';
import MovieBlock from '../../MovieBlock/MovieBlock';
import GenresList from './GenresList/GenresList';
import RatingIvi from './RatingIvi/RatingIvi';
import Card from '../../Card/Card';
import ActorsBlock from '../../ActorsBlock/ActorsBlock';
import { useRouter } from 'next/router';
import ru from '@/locales/titles/ru';
import en from '@/locales/titles/en';

const MainMovieScreen = () => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
        <div>
            <NewFilmRow />
            <GenresList />

            {/* <MovieBlock<Parameters<typeof Card>> title={t.bestMovies} breakpoints={{ 320: { slidesPerView: 2, spaceBetween: 5 }, 499: { slidesPerView: 3, spaceBetween: 20 }, 649: { slidesPerView: 4, spaceBetween: 10 }, 799: { slidesPerView: 5, spaceBetween: 15 }, 998: { slidesPerView: 6, spaceBetween: 10 }, 1149: { slidesPerView: 7, spaceBetween: 10 } }
            } slidesPerView={7} spaceBetween={10} listCardsProps={[[], [], [], [], [], [], [], [], [], [], [], [], [], [], []]} renderItem={() => <Card local={local} label={false} modal={true}/>} />

            <MovieBlock<Parameters<typeof Card>> title={t.ratingIvi} breakpoints={{ 320: { slidesPerView: 2, spaceBetween: 5 }, 499: { slidesPerView: 3, spaceBetween: 20 }, 649: { slidesPerView: 4, spaceBetween: 10 }, 799: { slidesPerView: 5, spaceBetween: 15 }, 998: { slidesPerView: 6, spaceBetween: 10 }, 1149: { slidesPerView: 7, spaceBetween: 10 } }
            } listCardsProps={[[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]} slidesPerView={7} spaceBetween={10} renderItem={() => <Card local={local} label={false} modal={true}/>} /> */}

            <RatingIvi />

            <MovieBlock<Parameters<typeof Card>> title={t.persons} listCardsProps={[[], [], [], [], [], [], [], [], [], [], [], [], [], []]} slidesPerView={7} spaceBetween={10} renderItem={() => <ActorsBlock name='Джонни Депп' movies='20' img='https://thumbs.dfs.ivi.ru/storage28/contents/f/a/615b56d2948eae497a02a935329e36.jpg/153x183/?q=85' />} breakpoints={{ 320: { slidesPerView: 2, spaceBetween: 5 }, 499: { slidesPerView: 3, spaceBetween: 20 }, 649: { slidesPerView: 4, spaceBetween: 10 }, 799: { slidesPerView: 5, spaceBetween: 15 }, 998: { slidesPerView: 6, spaceBetween: 10 }, 1149: { slidesPerView: 7, spaceBetween: 10 } }
            } />

            {/* <MovieBlock<Parameters<typeof Card>> title={t.amediateka} slidesPerView={7} spaceBetween={10} breakpoints={{ 320: { slidesPerView: 2, spaceBetween: 5 }, 499: { slidesPerView: 3, spaceBetween: 20 }, 649: { slidesPerView: 4, spaceBetween: 10 }, 799: { slidesPerView: 5, spaceBetween: 15 }, 998: { slidesPerView: 6, spaceBetween: 10 }, 1149: { slidesPerView: 7, spaceBetween: 10 } }
            } listCardsProps={[[], [], [], [], [], [], [], [], [], [], [], [], [], [], []]} renderItem={() => <Card />} />

            <MovieBlock<Parameters<typeof Card>> title={t.uhd} listCardsProps={[[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]} slidesPerView={7} spaceBetween={10} renderItem={() => <Card />} breakpoints={{ 320: { slidesPerView: 2, spaceBetween: 5 }, 499: { slidesPerView: 3, spaceBetween: 20 }, 649: { slidesPerView: 4, spaceBetween: 10 }, 799: { slidesPerView: 5, spaceBetween: 15 }, 998: { slidesPerView: 6, spaceBetween: 10 }, 1149: { slidesPerView: 7, spaceBetween: 10 } }
            } /> */}
        </div>
    );
};

export default MainMovieScreen;