import React from 'react';
import Softtag from './Softtag';
import Hardtag from './Hardtag';
import Card from './Card';
import mail from './assets/mail.png';
import commingSoon from './assets/soon.svg';

function App() {

 
  return (
    <>
       <section id="skills">
          <p>Soft Skills</p>
          <Softtag />
          <br/>
          <p>Hard Skills</p>  
          <br/>
          <Hardtag />
        </section>
      <br />
      <section id="projects">
        <p>Projects</p>
      </section>

      <div className="cards">
        <Card title="Mail Client" description="An intuitive email client that combines advanced filtering, sender-based message grouping, and AI-powered daily summaries for a seamless user experience." imgRoute={mail} link={'https://github.com/Danielbet21/Gmail_Assistant'} />
        <Card title="Ambulo" description="Ambulo is a Flutter app that recommends trails based on your profile and history, provides weather and trail alerts, allows group trip planning with shared equipment lists, and integrates GPX files for detailed navigation." imgRoute={commingSoon} link={'https://github.com/Danielbet21/Ambulo'} />

      </div>
      
    </>
  );
};

export default App;