import Avatar from 'icons/Avatar';
import BottomArrow from 'icons/BottomArrow';
import BrandLogo from 'icons/BrandLogo';
import BrandName from 'icons/BrandName';
import Cart from 'icons/Cart';
import Exit from 'icons/Exit';
import Menu from 'icons/Menu';
import Message from 'icons/Message';
import Notification from 'icons/Notification';
import Percent from 'icons/Percent';
import Search from 'icons/Search';
import Button from 'ui/Button/Button';

import styles from './Header.module.scss';

const Header = ({ sumPrice }: any) => {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_up}>
        <div className={styles.header_up__brand}>
          <BrandLogo />
          <BrandName />
        </div>
        <Button width={127} height={48} Img={<Menu />} txt={'Меню'} />
        <form>
          <input placeholder="Название запроса" />
          <Exit />
          <Search />
        </form>
        <div className={styles.header_up__call_like}>
          <div className={styles.call__img_container}>
            <Notification />
          </div>
        </div>
        <div className={styles.header_up__price}>
          <Cart fill={'#1551E5'} />
          <div className={styles.price_txt}>
            <h2>{`${sumPrice} price ₽`}</h2>
          </div>
        </div>
        <div className={styles.header_up__person_info}>
          <Avatar />
          <div className={styles.person_info__txt}>
            <h2>Иванов И.</h2>
          </div>
          <div className={styles.person_info__string_img}>
            <BottomArrow />
          </div>
        </div>
      </div>
      <div className={styles.header_down}>
        <div className={styles.header_down__menu}>
          <h2>Мои заказы</h2>
          <h2>Сотрудники</h2>
          <h2>Шаблоны заказов</h2>
          <h2>Обращения</h2>
        </div>
        <div className={styles.header_down__blog}>
          <div className={styles.blog_manager}>
            <Message />
            <h2>Ваш менеджер</h2>
          </div>
          <div className={styles.header_down__stock}>
            <Percent />
            <h2>Акции</h2>
          </div>
          <h2>Блог</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
