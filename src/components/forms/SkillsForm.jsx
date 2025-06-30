// components/forms/SkillsForm.jsx
import TextArea from '../UI/TextArea';

function SkillsForm({ data, onChange }) {
  return (
    <>
      <h2>Skills</h2>
      <TextArea
        name="skills"
        value={data || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your skills"
      />
    </>
  );
}

export default SkillsForm;
