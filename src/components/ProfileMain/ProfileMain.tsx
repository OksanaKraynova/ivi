import styles from "./profileMain.module.scss";
import DopButtons from "./DopButtons/DopButtons";
import ProfileCards from "./ProfileCards/ProfileCards";
import ProfileDopFunc from "./ProfileDopFunc/ProfileDopFunc";
import ProfileUserBlock from "./ProfileUserBlock/ProfileUserBlock";

export default function ProfileMain() {

  return (

    <div className={`${styles.hero} container`}>

      <div className={styles.heroWrapper}>

        <ProfileUserBlock />

        <div className={styles.profileMain}>
          <DopButtons />
          <ProfileDopFunc />
          <ProfileCards />
        </div>

      </div>

    </div>

  );
};
