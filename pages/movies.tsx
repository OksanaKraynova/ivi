import { Footer } from '@/src/components/Footer/Footer';
import Header from '@/src/components/Header/Header';
import Movies from '@/src/components/Movies/Movies';
import React from 'react';


const movies = () => {
    return (
        <>
            <Header />
            <Movies />
            <Footer />
        </>
    );
};

export default movies;