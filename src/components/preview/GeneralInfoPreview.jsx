// components/preview/GeneralInfoPreview.jsx
function GeneralInfoPreview({ data }) {
  return (
    <div>
      <h2>{data.fullName}</h2>
      <p>{data.email}</p>
      <p>{data.phoneNumber}</p>
      <p>{data.linkedIn}</p>
    </div>
  );
}

export default GeneralInfoPreview;
