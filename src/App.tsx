import { useMemo, useState } from 'react';
import Catalogue from 'pages/Catalogue/Catalogue';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

import styles from './App.module.scss';

const App = () => {
  const [cartItems, setCartItems] = useState<any>([]);

  const handleAddToBasket = () => {
    setCartItems((prev: any) => {
      return [...prev, { id: 1, count: 1, favorite: false }];
    });
  };
  const renderProductCount = useMemo(() => {
    if (cartItems[0]?.count > 1 && cartItems[0]?.count < 5) {
      return <h2>{`${cartItems[0]?.count} штуки`}</h2>;
    } else if (cartItems[0]?.count === 1) {
      return <h2>{`${cartItems[0]?.count} штукa`}</h2>;
    } else {
      return <h2>{`${cartItems[0]?.count} штук`}</h2>;
    }
  }, [cartItems]);

  const handleDecrementProductCount = () => {
    if (cartItems[0]?.count === 1) {
      setCartItems([]);
    }
    setCartItems((prev: any) => {
      const updated = prev.map((el: any) => {
        if (el?.id === 1) {
          return {
            ...el,
            count: el?.count - 1,
          };
        }
      });
      return updated;
    });
  };
  const handleIncrementProductCount = () => {
    setCartItems((prev: any) => {
      const updated = prev.map((el: any) => {
        if (el?.id === 1) {
          return {
            ...el,
            count: el?.count + 1,
          };
        }
      });
      return updated;
    });
  };
  const handleAddToFavorite = () => {
    setCartItems((prev: any) => {
      const updated = prev.map((el: any) => {
        if (el?.id === 1) {
          return {
            ...el,
            favorite: !el?.favorite,
          };
        }
      });
      return updated;
    });
  };
  const sumPrice = useMemo(() => {
    return cartItems[0]?.count * 3232 || 0;
  }, [cartItems]);
  return (
    <div className={styles.app}>
      <Header sumPrice={sumPrice} />
      <Catalogue
        cartItems={cartItems}
        handleAddToBasket={handleAddToBasket}
        renderProductCount={renderProductCount}
        handleDecrementProductCount={handleDecrementProductCount}
        handleIncrementProductCount={handleIncrementProductCount}
        handleAddToFavorite={handleAddToFavorite}
      />
      <Footer />
    </div>
  );
};

export default App;
