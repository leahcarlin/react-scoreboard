import { useState } from "react";
import AddPlayerForm from "./AddPlayerForm";
import Player from "./Player";
import "./Scoreboard.scss";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name);
}

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  const [sortBy, set_SortBy] = useState("score");

  // players sorted by score: first "copy" the array
  // then sort it with the `compare_score` callback function
  const players_sorted = [...players].sort(
    sortBy === "name" ? compare_name : compare_score
  );

  const change_sorting = (event) => {
    set_SortBy(event.target.value);
  };

  //add +1 to player score but keep return other players also
  const incrementScore = (id) => {
    const newPlayersArray = players.map((player) => {
      if (player.id === id) {
        return { ...player, score: player.score + 1 };
      } else {
        return player;
      }
    });
    set_players(newPlayersArray);
  };

  //reset all player scores
  const resetScores = () => {
    const resetScoresArray = players.map((player) => {
      return { ...player, score: 0 };
    });
    set_players(resetScoresArray);
  };

  //randomize player scores to a random integer between 0 and 100
  const randomizeScores = () => {
    const randomScoresArray = players.map((player) => {
      return { ...player, score: Math.floor(Math.random() * 100) };
    });
    set_players(randomScoresArray);
  };

  //add new player
  const addPlayer = (name) => {
    set_players((players) => [
      ...players,
      { name: name, id: players.length + 1, score: 0 },
    ]);
  };

  return (
    <div className="Scoreboard">
      <p>
        Sort order: {"  "}
        <select onChange={change_sorting} value={sortBy}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <button onClick={resetScores}>Reset Scores</button>
      <button onClick={randomizeScores}>Randomize</button>
      <p>Player's scores:</p>
      <ul>
        {players_sorted.map((player) => (
          <Player
            key={player.id}
            id={player.id}
            name={player.name}
            score={player.score}
            incrementScore={incrementScore}
          />
        ))}
      </ul>
      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  );
}
