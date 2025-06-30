// components/forms/GeneralInfoForm.jsx
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
          name="fullName"
          value={data.fullName || ''}
          onChange={handleChange}
          placeholder="Full Name"
        />
        <Input
          name="email"
          type="email"
          value={data.email || ''}
          placeholder="Email"
          onChange={handleChange}
        />
        <Input
          name="phoneNumber"
          type="tel"
          value={data.phoneNumber || ''}
          placeholder="Phone Number"
          onChange={handleChange}
        />
        <Input
          name="linkedIn"
          type="text"
          value={data.linkedIn || ''}
          placeholder="LinkedIn"
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default GeneralInfoForm;
