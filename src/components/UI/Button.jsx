const Button = ({ onClick, children, variant = 'primary' }) => {
  const className = variant === 'outline' ? 'btn-outline' : 'btn';
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
