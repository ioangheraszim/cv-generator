const TextArea = ({ label, value, onChange, placeHolder }) => {
  <div className="input-group">
    <label htmlFor="">{label}</label>
    <textarea value={value} onChange={onchange} placeholder={placeHolder} />
  </div>;
};

export default TextArea;
