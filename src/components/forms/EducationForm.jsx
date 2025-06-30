// components/forms/EducationForm.jsx
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
        value={data.schoolName || ''}
        onChange={handleChange}
        placeholder="School Name"
      />
      <Input
        name="titleStudy"
        value={data.titleStudy || ''}
        onChange={handleChange}
        placeholder="Title of Study"
      />
      <Input
        name="dateStudy"
        value={data.dateStudy || ''}
        onChange={handleChange}
        placeholder="Date of Study"
      />
    </>
  );
}

export default EducationForm;
