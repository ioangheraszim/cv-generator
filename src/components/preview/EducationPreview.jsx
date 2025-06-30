// components/preview/EducationPreview.jsx
function EducationPreview({ data }) {
  return (
    <div>
      <h2>Education</h2>
      <p>{data.schoolName}</p>
      <p>{data.titleStudy}</p>
      <p>{data.dateStudy}</p>
    </div>
  );
}

export default EducationPreview;
