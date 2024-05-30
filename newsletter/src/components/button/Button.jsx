import * as styles from './button.module.css';

const Button = ({label, onClick}) => {
  return (
    <button
      className={`body-bold ${styles.button} `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
