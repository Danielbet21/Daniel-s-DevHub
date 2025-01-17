import React from 'react';
import Softtag from './Softtag';
import Hardtag from './Hardtag';
import Card from './Card';
import mail from './assets/mail.png';

function App() {

 
  return (
    <>
      <p>Soft Skills</p>
      <Softtag />
      <br/>
      <p>Hard Skills</p>
      <br/>
      <Hardtag />
      <br />
      <p>Projects</p>

      <div className="cards">
        <Card title="aa" description="this is the first description" imgRoute={mail} />
      <Card title="aa" description="this is the first description" imgRoute={mail}/>
      <Card title="aa" description="this is the first description" imgRoute={mail}/>
      <Card title="aa" description="this is the first description" imgRoute={mail}/>
      <Card title="aa" description="this is the first description" imgRoute={mail}/>
      <Card title="aa" description="this is the first description" imgRoute={mail}/>
        
      </div>
      
    </>
  );
};

export default App;