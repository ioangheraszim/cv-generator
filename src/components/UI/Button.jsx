import '../../styles/Buttons.css';

const Button = ({ onClick, text, variant = 'primary' }) => {
  const className = variant === 'outline' ? 'btn-outline' : 'btn';
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
