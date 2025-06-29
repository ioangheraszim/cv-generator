import Input from '../UI/Input';

function EducationForm({ data, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <>
      <h2>Education</h2>
      <Input
        name="schoolName"
        type="text"
        placeholder="Full Name"
        value={data.schoolName || ''}
        onChange={handleChange}
      />
      <Input
        name="text"
        type="text"
        value={data.titleStudy || ''}
        placeholder="Title of Study"
        onChange={handleChange}
      />
      <Input
        name="phoneNumber"
        type="text"
        placeholder="Date of Study"
        value={data.dateStudy || ''}
        onChange={handleChange}
      />
    </>
  );
}

export default EducationForm;
