import React from 'react';
import styles from './actorPage.module.scss'
import ActorPhoto from './ActorPhoto/ActorPhoto';
import ActorDesc from './ActorDesc/ActorDesc';
import ActorLinks from './ActorLinks/ActorLinks';
import Filmography from './Filmography/Filmography';

const ActorPage = () => {
    return (
        <div className={styles.wrapper}>
           <ActorPhoto/> 
           <ActorDesc />
           <ActorLinks />
           <Filmography/>
        </div>
    );
};

export default ActorPage;