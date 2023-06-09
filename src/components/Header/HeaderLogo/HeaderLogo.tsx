import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeaderLogo = () => {
    return (
        <Link href='/'>
            <Image src='/icons/logo.svg' alt='logo' width={66} height={48} />
        </Link>
    );
};

export default HeaderLogo;