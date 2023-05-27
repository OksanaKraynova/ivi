import React from 'react';
import DropdownField from '../../DropdownField/DropdownField';
import { useRouter } from 'next/router';
import ru from '@/locales/genresMovie/ru';
import en from '@/locales/genresMovie/en';

const HeaderMovieBlock = () => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
       
        <DropdownField text={t.title} genres={t.movies} countries={t.countries} years={t.years} dopFilter={t.dopFilter} />
           
    );
};

export default HeaderMovieBlock;