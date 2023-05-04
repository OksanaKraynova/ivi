import React from 'react';
import Button from '../Button/Button';

const ButtonWrapper = ({text}: {text: string}) => {
    return (
        <Button variant='minimal'>
            {text}
        </Button>
    );
};

export default ButtonWrapper;