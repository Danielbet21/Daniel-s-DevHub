function Card({ title, description, imgRoute, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="cardLink">
      <div className="card">
        <img className="cardImg" src={imgRoute} alt="this is the first img" />
        <div className="overlay">
          <h2 className="cardTitle">{title}</h2>
          <p className="cardDescription">{description}</p>
        </div>
      </div>
    </a>
  );
}

export default Card;