// components/preview/ExperiencePreview.jsx
function ExperiencePreview({ data }) {
  return (
    <div>
      <h2>Experience</h2>
      <p>{data.company}</p>
      <p>{data.position}</p>
      <p>{data.responsibility}</p>
      <p>
        {data.startDate} - {data.endDate}
      </p>
    </div>
  );
}

export default ExperiencePreview;
