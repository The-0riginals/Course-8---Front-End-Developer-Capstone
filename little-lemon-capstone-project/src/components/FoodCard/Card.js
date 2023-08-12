import "./Card.css";

const lorem = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const Card = ({ data }) => {
  return (
    <>
      <div className="card">
        <div className="imgBx" style={{ background: `url(${data.image}) no-repeat center / cover` }}></div>
        <div className="content">
          <span className="price">
            <span>{`${data.price}`}</span>
          </span>
          <div className="details">
            <h4>{data.name}</h4>
            <p>{data.description ? data.description : lorem}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;