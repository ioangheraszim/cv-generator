import Input from '../UI/Input';

const GeneralInfoForm = ({ data, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <>
      <h2>General Information</h2>
      <div className="form-group">
        <Input
          label="Full Name"
          name="fullName"
          value={data.fullName || ''}
          onChange={handleChange}
          placeholder="Full Name"
        />
        <Input
          name="email"
          label="Email"
          type="email"
          value={data.email || ''}
          placeholder="john@example.com"
          onChange={handleChange}
        />
        <Input
          name="phoneNumber"
          value={data.phoneNumber || ''}
          label="Phone Number"
          type="tel"
          placeholder="Phone Number"
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default GeneralInfoForm;
