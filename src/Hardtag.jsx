
function Hardtag() {
    const tagsHard = [
        'C', 'JavaScript', 'React',
          'Git', 'Flask',
          'Java', 'Vue.js', 'Python',
          'MongoDB', 'Docker', 'GitHub', 'PostgreSQL',
          'TDD', 'CI/CD', 'Jira'
      ];
      
        return (
          <div className="circle-container">
            {tagsHard.map((language, index) => (
              <div key={index} className="circle">
                {language}
              </div>
            ))}
          </div>
        );

}

export default Hardtag;