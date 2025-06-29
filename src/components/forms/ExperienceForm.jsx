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
        type="text"
        name="company"
        value={data.company}
        onChange={handleChange}
        placeholder="Company Name"
      />
      <Input
        type="text"
        name="position"
        value={data.position}
        onChange={handleChange}
        placeholder="Position Name"
      />
      <TextArea
        type="textarea"
        name="responsibility"
        value={data.responsibility}
        onChange={handleChange}
        placeholder="Main Responsibilities"
      />
      <Input
        type="text"
        name="startDate"
        value={data.startDate}
        onChange={handleChange}
        placeholder="Start Date (e.g., Jan 2020)"
      />
      <Input
        type="text"
        name="endDate"
        value={data.endDate}
        onChange={handleChange}
        placeholder="End Date (e.g., May 2025)"
      />
    </>
  );
}

export default ExperienceForm;
