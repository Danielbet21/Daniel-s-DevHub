
function Softtag() {
    const tagsSoft = ['Problem-Solving',
                      ' Communication',
                      'Collaboration',
                      'Critical Thinking',
                      'Adaptability',
                      'Creativity',
                      'Attention to Detail',
      'Continuous Learning',
      'Time Management',]
      
        return (
          <div className="circle-container">
            {tagsSoft.map((language, index) => (
              <div key={index} className="circle-soft">
                {language}
              </div>
            ))}
          </div>
        );
}

export default Softtag;