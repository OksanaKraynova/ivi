import React from 'react';
import styles from './dropUserBlock.module.scss'
import DropdownBg from '../../DropdownBg/DropdownBg';
import ListButton from './ListButton/ListButton';
import OtherButtons from './OtherButtons/OtherButtons';

const DropUserBlock = ({className}: {className: string}) => {
    return (
        <DropdownBg className={className}>
            <ListButton/>
            <OtherButtons />
        </DropdownBg>
    );
};

export default DropUserBlock;