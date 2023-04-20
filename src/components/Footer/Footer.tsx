import { IItemLink } from '@/src/types/types';
import './Footer.module.scss';
import { List } from '../List';
import { ItemLink } from '../ItemLink';
import { Container } from '../Container';

const navList: IItemLink[] = [
  { text: "Мой Иви", link: "!#" },
  { text: "Что нового", link: "!#" },
  { text: "Фильмы", link: "!#" },
  { text: "Сериалы", link: "!#" },
  { text: "Мультфильмы", link: "!#" },
  { text: "TV+", link: "!#" },
]

export const Footer = () => {
  return (
    <Container containerClass='page-header'>

      <nav className='page-header__nav'>
        <List<IItemLink>
          listClass='page-header__nav-list'
          list={navList}
          renderItem={item =>
            <ItemLink
              itemClass='page-header__nav-item'
              item={item}
              color='rgba(255,255,255,.48)'
              hoverColor='#FFFFFF'
              fontWeight={500}
            />}
        />
      </nav>
      <style>
        {`
         div {
           background-color: #100e19;
         }
       `}
      </style>

    </Container>
  );
};
