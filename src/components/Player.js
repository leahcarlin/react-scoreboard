import "./Player.scss";

export default function Player(props) {
  const { name, score, id, incrementScore } = props;

  const incrementOnClick = () => {
    incrementScore(id);
  };
  return (
    <li className="Player" style={{ listStyle: "none" }}>
      <div
        className="percentage_coloring"
        style={{ width: props.score + "%" }}
      />
      <p>
        {name} (Score: {score})
        <button onClick={incrementOnClick}>Increment</button>
      </p>
    </li>
  );
}
