import { useState } from 'react';
import './styles/App.css';

import CVForm from './components/forms/CVForm';
import CVPreview from './components/preview/CVPreview';

function App() {
  const [cvData, setCvData] = useState({
    general: {},
    education: {},
    experience: {},
  });

  return (
    <>
      <h1>CV Generator</h1>
      <CVForm cvData={cvData} setCvData={setCvData} />
      <CVPreview data={cvData} />
    </>
  );
}

export default App;
