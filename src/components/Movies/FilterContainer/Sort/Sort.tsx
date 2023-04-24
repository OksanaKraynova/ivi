import React, { useState } from 'react';
import styles from './sort.module.scss'
import Dropdown from './Dropdown/Dropdown';

const Sort = () => {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState('')
    return (
        <div className={styles.sort}>
            <button className={styles.btn} onClick={() => setOpen(!open)} >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" fill="#fff" height="16" viewBox="0 0 16 16">
                    <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z" />
                </svg>
                <span>По {selected ? selected : 'названию'}</span>
                {open ? <img alt='' src='/up.svg' /> : <img alt='' src='/down.svg' />}
            </button>
            {open && <Dropdown setSelected={setSelected} setOpen={setOpen} /> }
            
        </div>
    );
};

export default Sort;