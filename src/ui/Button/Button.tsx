import styles from './Button.module.scss';

const Button = ({ width, height, txt, Img, ...props }: any) => {
  return (
    <button
      type="button"
      style={{ width: `${width}px`, height: `${height}px` }}
      className={styles.button_container}
      {...props}
    >
      <div>
        {Img}
        <h2>{txt}</h2>
      </div>
    </button>
  );
};

export default Button;
