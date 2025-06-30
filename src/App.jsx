import { useState } from 'react';
import './styles/App.css';

import CVForm from './components/forms/CVForm';
import CVPreview from './components/preview/CVPreview';
import Button from './components/UI/Button';

function App() {
  const [cvData, setCvData] = useState({
    general: {},
    education: {},
    experience: {},
    skills: '',
  });

  return (
    <>
      <h1>CV Generator</h1>
      <div className="app-wrapper">
        <CVForm cvData={cvData} setCvData={setCvData} />
        <div className="preview-wrapper">
          <CVPreview data={cvData} />
          <Button
            className="print-button"
            onClick={() => window.print()}
            type="button"
            text="Print"
          />
        </div>
      </div>
    </>
  );
}

export default App;
