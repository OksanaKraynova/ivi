import { default as LinkNext } from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import Button from '../../Button/Button';
import Link from '../../Link/Link';
import FooterSupport from '../FooterSupport/FooterSupport';
import FooterNavbarDropdown from '../FooterNavbarDropdown/FooterNavbarDropdown';
import FooterNavbarDropdownList from '../FooterNavbarDropdownList/FooterNavbarDropdownList';
import FooterButtonsIcon from '../FooterButtonsIcon/FooterButtonsIcon';
import IItemLink from '@/types/IItemLink';
import styles from './FooterNavbarMore.module.scss';
import filmsIcon from "@/public/icons/camera.svg"
import serialsIcon from "@/public/icons/folders.svg"
import animationsIcon from "@/public/icons/locomotive.svg"
import tvLogo from "@/public/icons/devices/tv+.svg"
import aboutIcon from "@/public/icons/info.svg"
import codeIcon from "@/public/icons/code.svg"
import supportIcon from "@/public/icons/dialog.svg"
import subLogo from "@/public/icons/diamond.svg"
import sertificateLogo from "@/public/icons/reward.svg"
import devicesLogo from "@/public/icons/devices/devices.svg"

const buttonsFirst = [
  { logo: subLogo, text: "Подключить подписку" },
  { logo: sertificateLogo, text: "Активация сертификата" }
]

const buttonsSecond = [
  { logo: tvLogo, text: "Смотрите на", device: "Smart TV" },
  { logo: devicesLogo, text: "", device: "Все устройства" }
];

const aboutList: IItemLink[] = [
  { text: "О компании", link: "https://corp.ivi.ru" },
  { text: "Вакансии", link: "https://corp.ivi.ru/career" },
  { text: "Программа бета-тестирования", link: "https://www.ivi.ru/pages/beta" },
  { text: "Информация для партнёров", link: "https://www.ivi.ru/info/partners" },
  { text: "Размещение рекламы", link: "https://corp.ivi.ru/advertisers" },
  { text: "Пользовательское соглашение", link: "https://www.ivi.ru/info/agreement" },
  { text: "Политика конфиденциальности", link: "https://www.ivi.ru/info/confidential" },
  { text: "Комплаенс", link: "https://www.ivi.ru/info/goryachaya-liniya-komplaens" },
];

const linkListFirst: IItemLink[] = [
  { text: "Мой Иви", link: "/" },
  { text: "Что нового", link: "https://www.ivi.ru/new" }
];

const linkListSecond: IItemLink[] = [
  { text: "Иви.рейтинг фильмы", link: "/" },
  { text: "Иви.рейтинг сериалы", link: "/" }
];

const dropdownFilms: Parameters<typeof FooterNavbarDropdown<Parameters<typeof FooterNavbarDropdownList>[0]>>[0] = {
  buttonTitle: "Фильмы",
  buttonIcon: filmsIcon,
  dropdownBlockProps: {
    subTitle: { text: "Все фильмы", link: "" },
    firstColumn: {
      title: "Жанры",
      list: [
        {
          text: "Артхаус",
          link: "/"
        },
        {
          text: "Боевики",
          link: "/"
        },
        {
          text: "Вестерн",
          link: "/"
        },
        {
          text: "Военные",
          link: "/"
        },
        {
          text: "Для всей семьи",
          link: "/"
        },
        {
          text: "Для детей",
          link: "/"
        }]
    },
    secondColumn: [
      {
        title: "Страны",
        list: [
          {
            text: "Русские",
            link: "/"
          },
          {
            text: "Зарубежные",
            link: "/"
          },
          {
            text: "Советское кино",
            link: "/"
          }]
      },
      {
        title: "Годы",
        list: [
          {
            text: "Фильмы 2023 года",
            link: "/"
          },
          {
            text: "Фильмы 2022 года",
            link: "/"
          },
          {
            text: "Фильмы 2021 года",
            link: "/"
          },
          {
            text: "Фильмы 2020 года",
            link: "/"
          }
        ]
      }
    ],
    thirdColumn: [
      {
        list: [
          {
            text: "Новинки",
            link: "/"
          },
          {
            text: "Подборки",
            link: "/"
          },
          {
            text: "Иви.Рейтинг",
            link: "/"
          },
          {
            text: "Скоро на Иви",
            link: "/"
          }
        ]
      }
    ]
  },
  dropdownBlock: (item) => <FooterNavbarDropdownList {...item} />
};

const dropdownSerials: Parameters<typeof FooterNavbarDropdown<Parameters<typeof FooterNavbarDropdownList>[0]>>[0] = {
  buttonTitle: "Сериалы",
  buttonIcon: serialsIcon,
  dropdownBlockProps: {
    subTitle: { text: "Все сериалы", link: "" },
    firstColumn: {
      title: "Жанры",
      list: [
        {
          text: "Биография",
          link: "/"
        },
        {
          text: "Боевики",
          link: "/"
        },
        {
          text: "Военные",
          link: "/"
        },
        {
          text: "Детективы",
          link: "/"
        },
        {
          text: "Для всей семьи",
          link: "/"
        },
        {
          text: "Документальные",
          link: "/"
        }]
    },
    secondColumn: [
      {
        title: "Страны",
        list: [
          {
            text: "Русские",
            link: "/"
          },
          {
            text: "Зарубежные",
            link: "/"
          },
          {
            text: "Американские",
            link: "/"
          },
          {
            text: "Корейские",
            link: "/"
          },
          {
            text: "Турецкие",
            link: "/"
          }
        ]
      },
      {
        title: "Годы",
        list: [
          {
            text: "Сериалы 2023 года",
            link: "/"
          },
          {
            text: "Сериалы 2022 года",
            link: "/"
          },
          {
            text: "Сериалы 2021 года",
            link: "/"
          },
          {
            text: "Сериалы 2020 года",
            link: "/"
          }
        ]
      }
    ],
    thirdColumn: [
      {
        list: [
          {
            text: "Новинки",
            link: "/"
          },
          {
            text: "Иви.Рейтинг",
            link: "/"
          },
          {
            text: "Сериалы в HD",
            link: "/"
          },
          {
            text: "Бесплатные сериалы",
            link: "/"
          }
          ,
          {
            text: "Сериалы Amediateka",
            link: "/"
          }
          ,
          {
            text: "Сериалы Paramount Play",
            link: "/"
          }
        ]
      }
    ]
  },
  dropdownBlock: (item) => <FooterNavbarDropdownList {...item} />
};

const dropdownAnimations: Parameters<typeof FooterNavbarDropdown<Parameters<typeof FooterNavbarDropdownList>[0]>>[0] = {
  buttonTitle: "Мультфильмы",
  buttonIcon: animationsIcon,
  dropdownBlockProps: {
    subTitle: { text: "Все мультфильмы", link: "" },
    firstColumn: {
      title: "Жанры",
      list: [
        {
          text: "Аниме",
          link: "/"
        },
        {
          text: "Боевики",
          link: "/"
        },
        {
          text: "Детектив",
          link: "/"
        },
        {
          text: "Для взрослых",
          link: "/"
        },
        {
          text: "Для всей семьи",
          link: "/"
        }]
    },
    secondColumn: [
      {
        title: "Страны",
        list: [
          {
            text: "Советские",
            link: "/"
          },
          {
            text: "Русские",
            link: "/"
          },
          {
            text: "Американские",
            link: "/"
          },
          {
            text: "Зарубежные",
            link: "/"
          }
        ]
      },
      {
        title: "Годы",
        list: [
          {
            text: "Мультики 2023 года",
            link: "/"
          },
          {
            text: "Мультики 2022 года",
            link: "/"
          },
          {
            text: "Мультики 2021 года",
            link: "/"
          },
          {
            text: "Мультики 2020 года",
            link: "/"
          }
        ]
      }
    ],
    thirdColumn: [
      {
        list: [
          {
            text: "Новинки",
            link: "/"
          },
          {
            text: "Мультики в HD",
            link: "/"
          },
          {
            text: "Мультфильмы Paramount Play / Nickelodeon",
            link: "/"
          }
          ,
          {
            text: "Мультфильмы Dreamworks",
            link: "/"
          }
          ,
          {
            text: "Мультфильмы СТС Kids",
            link: "/"
          }
        ]
      }
    ]
  },
  dropdownBlock: (item) => <FooterNavbarDropdownList {...item} />
};

const dropdownFirstList = [
  dropdownFilms,
  dropdownSerials,
  dropdownAnimations
];

const dropdownAbout: Parameters<typeof FooterNavbarDropdown<Parameters<typeof FooterNavbarDropdownList>[0]>>[0] = {
  buttonTitle: "О нас",
  buttonIcon: aboutIcon,
  dropdownBlockProps: {
    firstColumn: { list: aboutList }
  },
  dropdownBlock: (item) => <FooterNavbarDropdownList {...item} />
};

const dropdownSupport: Parameters<typeof FooterNavbarDropdown<Parameters<typeof FooterSupport>[0]>>[0] = {
  buttonTitle: "Служба поддержки",
  buttonIcon: supportIcon,
  dropdownBlockProps: {
    subTitleClass: styles.subTitle,
    buttonBoxClass: styles.buttonBox
  },
  dropdownBlock: (item) => <div className={styles.support}><FooterSupport {...item} /></div>
};

export default function FooterNavbarMore() {

  return (

    <div className={classNames(styles.container, "container")}>

      <div className={styles.rowBorder}>

        <div className={styles.buttons}>

          {buttonsFirst.map((button, index) =>

            <Button
              key={index}
              variant='long'
              color='darkBlue'
              href=""
              onClick={(event) => event.preventDefault()}
            >
              <div className={styles.buttonBox}>
                <Image className="icon" src={button.logo} alt='icon' />
                <p className={styles.bold}>{button.text}</p>
              </div>
            </Button>

          )}

        </div>

      </div>

      <div className={styles.rowBorder}>

        {linkListFirst.map((item, index) =>
          <Link
            key={index}
            text={item.text}
            href={item.link}
            color={'white'}
            fontWeight={500}
          />
        )}

        {dropdownFirstList.map((item, index) =>
          <FooterNavbarDropdown
            key={index}
            {...item}
          />
        )}

        <Link
          text="Что посмотреть"
          href="https://www.ivi.ru/goodmovies"
          color={'white'}
          fontWeight={500}
        />

      </div>

      <div className={styles.rowBorder}>

        {linkListSecond.map((item, index) =>
          <Link
            key={index}
            text={item.text}
            href={item.link}
            color={'white'}
            fontWeight={500}
          />
        )}

      </div>

      <div className={styles.rowBorder}>

        <FooterNavbarDropdown {...dropdownAbout} />
        <LinkNext className={styles.button} href="/">
          <Image className="icon" src={codeIcon} alt='icon' />
          Вход по коду
        </LinkNext>

        <div className={styles.buttons}>

          {buttonsSecond.map((button, index) =>

            <Button
              key={index}
              variant='small'
              color='darkBlue'
              href=""
              onClick={(event) => event.preventDefault()}
            >
              <div className={styles.buttonBox}>
                <Image className="icon" src={button.logo} alt='icon' />
                <div className={styles.textBox}>
                  <p className={styles.text}>{button.text}</p>
                  <p className={styles.bold}>{button.device}</p>
                </div>
              </div>
            </Button>

          )}

        </div>

      </div>

      <div className={styles.rowBorder}>
        <FooterNavbarDropdown {...dropdownSupport} />
      </div>

      <div className={styles.buttonsIcon}>
        <FooterButtonsIcon />
      </div>

      <p className={styles.subTitle}>© 2023 ООО «Иви.ру»<br />
        HBO ® and related service marks are the property of Home Box Office, Inc</p>

    </div>

  );
};
