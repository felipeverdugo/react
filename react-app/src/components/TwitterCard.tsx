import "../TwitterCard.css";
type Props = {};

const TwitterCard = (props: Props) => {
  return (
    <div className="card">
      <img src="perfil.png" className="card-img-top" alt="fotoDePerfil"></img>
      <CardBody />
    </div>
  );
};

export default TwitterCard;

export const CardBody = () => {
  return (
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content hfjeaisjhfeihfaei.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  );
};
