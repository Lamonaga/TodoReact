import "./button.css";

const Button = ({ className, children, type, onClick, name }) => {
  return (
    <button className={className} name={name} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
