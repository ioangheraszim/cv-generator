// components/forms/ExperienceForm.jsx
import Input from '../UI/Input';
import TextArea from '../UI/TextArea';

function ExperienceForm({ data, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <>
      <h2>Experience</h2>
      <Input
        name="company"
        value={data.company || ''}
        onChange={handleChange}
        placeholder="Company Name"
      />
      <Input
        name="position"
        value={data.position || ''}
        onChange={handleChange}
        placeholder="Position Title"
      />
      <TextArea
        name="responsibility"
        value={data.responsibility || ''}
        onChange={handleChange}
        placeholder="Main Responsibilities"
      />
      <Input
        name="startDate"
        value={data.startDate || ''}
        onChange={handleChange}
        placeholder="Start Date"
      />
      <Input
        name="endDate"
        value={data.endDate || ''}
        onChange={handleChange}
        placeholder="End Date"
      />
    </>
  );
}

export default ExperienceForm;