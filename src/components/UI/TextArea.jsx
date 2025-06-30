const TextArea = ({ value = '', onChange, placeholder, name }) => {
  return (
    <div className="input-group">
      <textarea
        name={name}
        value={value || ''}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextArea;
