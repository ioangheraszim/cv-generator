const Input = ({
  label,
  value = '',
  onChange,
  type = 'text',
  placeholder,
  name,
}) => (
  <div className="input-group">
    {label && <label htmlFor={name}>{label}</label>}
    <input
      type={type}
      name={name}
      value={value || ''}
      onChange={onChange}
      placeholder={placeholder}
      id={name}
    />
  </div>
);

export default Input;
