
function Card({title, description, imgRoute}) {
//   const cards = [
//     { title: 'First Card', description: 'This is the first description' },
//     { title: 'Second Card', description: 'This is the second description' },
//   ];
  return (
    <div className="card">
            <img className="cardImg" src={imgRoute} alt="this is the first img"/>
            <h2 className="cardTitle">{title}</h2>
      <p className="cardDescription">{ description }</p>
    </div>
  );
}

export default Card;