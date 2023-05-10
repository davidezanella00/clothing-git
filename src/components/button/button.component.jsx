// we have three types of button : default, inverted, google signin
import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, className, onClick }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
