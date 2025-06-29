const TextArea = ({ value, onChange, placeholder }) => {
  return (
    <div className="input-group">
      <textarea value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
};

export default TextArea;
