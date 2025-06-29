import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import GeneralInfoForm from './GeneralInfoForm';

const CVForm = ({ cvData, setCvData }) => {
  const updateSection = (section, data) => {
    setCvData((prevData) => {
      const newData = { ...prevData, [section]: data };
      console.log(newData);
      return newData;
    });
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
      <ExperienceForm
        data={cvData.experience}
        onChange={(data) => updateSection('experience', data)}
      />
    </div>
  );
};

export default CVForm;
