// components/forms/CVForm.jsx
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import GeneralInfoForm from './GeneralInfoForm';
import SkillsForm from './SkillsForm';
import '../../styles/Form.css';

const CVForm = ({ cvData, setCvData }) => {
  const updateSection = (section, data) => {
    setCvData((prevData) => ({ ...prevData, [section]: data }));
  };

  return (
    <div className="form-section">
      <GeneralInfoForm
        data={cvData.general}
        onChange={(data) => updateSection('general', data)}
      />
      <EducationForm
        data={cvData.education}
        onChange={(data) => updateSection('education', data)}
      />
      <SkillsForm
        data={cvData.skills}
        onChange={(data) => updateSection('skills', data)}
      />
      <ExperienceForm
        data={cvData.experience}
        onChange={(data) => updateSection('experience', data)}
      />
    </div>
  );
};

export default CVForm;
