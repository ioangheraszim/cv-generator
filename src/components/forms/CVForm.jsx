import GeneralInfoForm from './GeneralInfoForm';

const CVForm = ({ cvData, setCvData }) => {
  const updateSection = (section, data) => {
    setCvData((prevData) => {
      const newData = { ...prevData, [section]: data };
      return newData;
    });
  };

  return (
    <div className="form-section">
      <GeneralInfoForm
        data={cvData.general}
        onChange={(data) => updateSection('general', data)}
      />
    </div>
  );
};

export default CVForm;
