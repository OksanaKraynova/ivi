import { IItemLink } from '@/src/types/types';
import { List } from '../List';
import { ItemLink } from '../ItemLink';
import { Container } from '../Container';
import styles from './Footer.module.scss';
import { A } from '../A/A';

const aboutList: IItemLink[] = [
  { text: "О компании", link: "!#" },
  { text: "Вакансии", link: "!#" },
  { text: "Программа бета - тестирования", link: "!#" },
  { text: "Информация для партнёров", link: "!#" },
  { text: "Размещение рекламы", link: "!#" },
  { text: "Пользовательское соглашение", link: "!#" },
  { text: "Политика конфиденциальности", link: "!#" },
  { text: "Комплаенс", link: "!#" },
];

const sectionsList: IItemLink[] = [
  { text: "Мой Иви", link: "!#" },
  { text: "Что нового", link: "!#" },
  { text: "Фильмы", link: "!#" },
  { text: "Сериалы", link: "!#" },
  { text: "Мультфильмы", link: "!#" },
  { text: "TV +", link: "!#" },
  { text: "Что посмотреть", link: "!#" },
  { text: "Активация сертификата", link: "!#" },
];

export const Footer = () => {
  return (
    <div>
      <Container containerClass={styles.row}>

        <Container containerClass={styles.box}>

          <p className={styles.linkTitle}>О нас</p>

          <List<IItemLink>
            listClass={styles.linkList}
            list={aboutList}
            renderItem={item =>
              <ItemLink
                itemClass={styles.linkItem}
                item={item}
                color='grey'
              />}
          />

        </Container>

        <Container containerClass={styles.box}>

          <p className={styles.linkTitle}>Разделы</p>

          <List<IItemLink>
            listClass={styles.linkList}
            list={sectionsList}
            renderItem={item =>
              <ItemLink
                itemClass={styles.linkItem}
                item={item}
                color='grey'
              />}
          />

        </Container>

        <Container containerClass={styles.box}>

          <p className={styles.linkTitle}>Служба поддержки</p>
          <p className={styles.linkSubTitle}>Мы всегда готовы вам помочь.<br />Наши операторы онлайн 24/7</p>
          <button>Написать в чате</button>
          <button>Трубка</button>
          <A
            text="ask.ivi.ru"
            href="!#"
            color='white'
          />
          <p className={styles.linkSubTitle}>Ответы на вопросы</p>

        </Container>

        <Container containerClass={styles.box}>

          <button>Трубка</button>
          <p className={styles.linkSubTitle}>Смотрите фильмы, сериалы и мультфильмы без рекламы</p>

        </Container>

      </Container>

      <Container containerClass={styles.row}>

        <button>Трубка</button>
        <p className={styles.linkSubTitle}>© 2023 ООО «Иви.ру»<br />
          HBO ® and related service marks are the property of Home Box Office, Inc</p>

      </Container>
    </div>
  );
};
