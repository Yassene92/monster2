import { Monster } from "../../App";

import "./card-container.styles.css";

type CardProps = {
  monster: Monster;
};

const CardContainer = ({ monster }: CardProps) => {
  const { name, email, id } = monster;

  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

/*class CardContainer extends Component {
  render(){
    const { name, email, id } = this.props.monster
return (
  <div className="card-container" key={id}>
  <img
    alt={`monster ${name}`}
    src={`https://robohash.org/${id}?set=set2`}
  />
  <h2>{name}</h2>
  <p>{email}</p>
</div>
)
  }
}*/
export default CardContainer;
