const Input = ({ label, value, onChange, type = 'text' }) => {
  <div className="input-group">
    <label>{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>;
};
