import * as styles from './success.module.css'
import Button from "../button/Button.jsx";
import SuccessImg from "../images/SuccessImg.jsx";

const Success = ({email, setEmail}) => {

  const handleDismiss = () => {
    setEmail('');

  }

  return (
    <div className={styles.successContainer}>
      <div className={styles.successContent}>
        <SuccessImg />
        <h2>Thanks for subscribing!</h2>
        <p className="body">A confirmation email has been sent to <b>{email}</b>. Please open it and click the button inside to confirm
          your subscription</p>
      </div>
      <Button
        label="Dismiss Message"
        type={"dismiss"}
        onClick={handleDismiss}
      />
    </div>
  );
};

export default Success;
