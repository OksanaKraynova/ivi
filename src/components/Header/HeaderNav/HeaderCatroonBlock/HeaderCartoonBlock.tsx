import React from 'react';
import DropdownField from '../../DropdownField/DropdownField';
import { useRouter } from 'next/router';
import ru from '@/locales/genresCartoon/ru';
import en from '@/locales/genresCartoon/en';

const HeaderCartoonBlock = () => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
        <DropdownField text={t.title} genres={t.genres} countries={t.countries} years={t.years} dopFilter={t.dopFilte} />
    );
};

export default HeaderCartoonBlock;