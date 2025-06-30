// components/preview/CVPreview.jsx
import EducationPreview from './EducationPreview';
import ExperiencePreview from './ExperiencePreview';
import GeneralInfoPreview from './GeneralInfoPreview';
import SkillsPreview from './SkillPreview';
import '../../styles/Preview.css';

function CVPreview({ data }) {
  const { general, education, experience, skills } = data;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="preview-section">
      <h2 className="cv-header">Preview</h2>
      <GeneralInfoPreview data={general} />
      <EducationPreview data={education} />
      <SkillsPreview data={skills} />
      <ExperiencePreview data={experience} />
    </div>
  );
}

export default CVPreview;
