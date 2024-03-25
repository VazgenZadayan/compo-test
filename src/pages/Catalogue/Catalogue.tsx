import Cart from 'icons/Cart';
import Favorite from 'icons/Favorite';
import LeftArrow from 'icons/LeftArrow';
import Minus from 'icons/Minus';
import Plus from 'icons/Plus';
import RightArrow from 'icons/RightArrow';
import Button from 'ui/Button/Button';

import Boot1 from '../../assets/Boot1.svg';
import Boot2 from '../../assets/Boot2.svg';
import Boot3 from '../../assets/Boot3.svg';
import Boot4 from '../../assets/Boot4.svg';
import Boot5 from '../../assets/Boot5.svg';

import styles from './Catalogue.module.scss';

const Catalogue = ({
  cartItems,
  handleAddToBasket,
  renderProductCount,
  handleDecrementProductCount,
  handleIncrementProductCount,
  handleAddToFavorite,
}: any) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card__content}>
        <div className={styles.card__product_container}>
          <div className={styles.product_container__menu}>
            <div className={styles.product_container__menu_item}>
              <h2>Каталог</h2>
              <h2>/</h2>
            </div>
            <div className={styles.product_container__menu_item}>
              <h2>Обувь</h2>
              <h2>/</h2>
            </div>
            <div className={styles.product_container__menu_item}>
              <h2>Кроссовки</h2>
              <h2>/</h2>
            </div>
            <div className={styles.product_container__menu_item}>
              <h2>Беговые</h2>
              <h2>/</h2>
            </div>
          </div>
          <div className={styles.product_container__product_name}>
            <h2>Кроссовки мужские Skechers Sunny Dale</h2>
          </div>
        </div>
        <div className={styles.product_container__info}>
          <div className={styles.product_container__photo}>
            <img src={Boot1} alt="Boot1" width={400} height={400} style={{ borderRadius: '8px' }} />
            <div className={styles.photo_carusel__container}>
              <div className={styles.photo_carusel__arrow}>
                <LeftArrow />
              </div>
              <div className={styles.photo_carusel__content_container}>
                <div className={styles.photo_carusel__items_container} style={{ right: `20px` }}>
                  <div className={styles.carusel_item}>
                    <img alt="Boot2" src={Boot2} width={64} height={64} />
                  </div>
                  <div className={styles.carusel_item}>
                    <img alt="Boot3" src={Boot3} width={64} height={64} />
                  </div>
                  <div className={styles.carusel_item}>
                    <img alt="Boot4" src={Boot4} width={64} height={64} />
                  </div>
                  <div className={styles.carusel_item}>
                    <img alt="Boot5" src={Boot5} width={64} height={64} />
                  </div>
                  <div className={styles.carusel_item}>
                    <img style={{ borderRadius: `16px` }} alt="Boot1" src={Boot1} width={64} height={64} />
                  </div>
                  <div className={styles.carusel_item}>
                    <img alt="Boot4" src={Boot4} width={64} height={64} />
                  </div>
                  <div className={styles.carusel_item}>
                    <img alt="Boot5" src={Boot5} width={64} height={64} />
                  </div>
                  <div className={styles.carusel_item}>
                    <img style={{ borderRadius: `16px` }} alt="Boot1" src={Boot1} width={64} height={64} />
                  </div>
                </div>
              </div>
              <div className={styles.photo_carusel__arrow}>
                <RightArrow />
              </div>
            </div>
          </div>
          <div className={styles.product_container__description}>
            <div className={styles.product_container__description_up}>
              <div className={styles.description_up__left}>
                <div className={styles.description_up__left_price}>
                  <div className={styles.left_price__up}>
                    <h2>{`1221 цена без скидки`}</h2>
                    <div className={styles.up__bottom}>
                      <h2>{`3232 ₽`}</h2>
                      <div className={styles.up_bottom__procent}>
                        <h2>-15%</h2>
                      </div>
                    </div>
                  </div>
                  <div className={styles.left_price__down}>
                    <div className={styles.left_price__down_left}>
                      <h2>{'12 штук в уп'}</h2>
                    </div>
                  </div>
                </div>
                <div className={styles.description_up__left_delivery}>
                  <div className={styles.delivery__items}>
                    <h2>Завтра</h2>
                    <h3>Доставка</h3>
                  </div>
                  <div className={styles.delivery__items}>
                    <h2>7 шт.</h2>
                    <h3>Тарасовка</h3>
                  </div>
                  <div className={styles.delivery__items}>
                    <h2>7 шт.</h2>
                    <h3>Тарасовка</h3>
                  </div>
                </div>
                <div className={styles.description_up__left_btn}>
                  {cartItems[0]?.count ? (
                    <div className={styles.left_btn__quantity}>
                      <div className={styles.quantity__change}>
                        <Minus onClick={handleDecrementProductCount} />
                      </div>
                      <div className={styles.quantity__content}>{renderProductCount}</div>
                      <div className={styles.quantity__change}>
                        <Plus onClick={handleIncrementProductCount} />
                      </div>
                    </div>
                  ) : (
                    <Button
                      onClick={handleAddToBasket}
                      width={284}
                      height={56}
                      Img={<Cart fill={'#ffffff'} />}
                      txt={'В корзину'}
                    />
                  )}

                  {!!cartItems?.length && (
                    <div className={styles.left_btn__like} onClick={handleAddToFavorite}>
                      <Favorite filled={cartItems[0]?.favorite} />
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.description_up__right}>
                <h2>Характеристики</h2>
                <div className={styles.up_right__txt_container}>
                  <div className={styles.txt__items}>
                    <div className={styles.txt__item}>
                      <h2>ELC00696</h2>
                      <h3>Код поставщика</h3>
                    </div>
                    <div className={styles.txt__item}>
                      <h2>ELC0200000696</h2>
                      <h3>Артикул</h3>
                    </div>
                  </div>
                  <div className={styles.txt__items}>
                    <div className={styles.txt__item}>
                      <h2>ELC00696</h2>
                      <h3>Код РАЭК</h3>
                    </div>
                    <div className={styles.txt__item}>
                      <h2>ELC00696</h2>
                      <h3>Код ЕТМ</h3>
                    </div>
                  </div>
                  <div className={styles.txt__items}>
                    <div className={styles.txt__item}>
                      <h2>Electric used</h2>
                      <h3>Бренд</h3>
                    </div>
                    <div className={styles.txt__item}>
                      <h2>ELC00696</h2>
                      <h3>Серия</h3>
                    </div>
                  </div>
                  <div className={styles.txt__items}>
                    <div className={styles.txt__item}>
                      <h2>ELC0200000696</h2>
                      <h3>Код производителя </h3>
                    </div>
                    <div className={styles.txt__item}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.product_container__description_down}>
              <h2>Описание товара</h2>
              <h3>
                Создание приверженного покупателя специфицирует неопровержимый комплексный анализ ситуации. CTR{' '}
                <br></br> существенно индуцирует из ряда вон выходящий SWOT-анализ. Воздействие на потребителя
                определяет <br></br> возрастающий интеграл по поверхности, что известно даже школьникам. Отсюда
                естественно следует, что <br></br>
                коммуникация уравновешивает косвенный фактор коммуникации. Поле направлений естественно допускает{' '}
                <br></br> экспериментальный скачок функции, таким образом сбылась мечта идиота - утверждение полностью
                доказано. <br></br>Арифметическая прогрессия притягивает линейно зависимый пул лояльных изданий.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
