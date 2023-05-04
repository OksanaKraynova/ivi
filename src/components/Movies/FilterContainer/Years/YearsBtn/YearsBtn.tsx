import Button from '@/src/components/Button/Button';
import React from 'react';

const YearsBtn = ({title}: {title: string}) => {
    return (
        <Button variant='long' color='darkBlue' >
            {title}
        </Button>
    );
};

export default YearsBtn;