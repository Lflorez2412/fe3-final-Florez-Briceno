import React from "react";
import { Link } from "react-router-dom";
import { useDentistContext } from "../Provider/DentistContext";
import ProfilePic from "../Components/images/doctor.jpg"

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useDentistContext();

  const isDentistInFavorites = state.favoriteDentists.some((dentist) => dentist.id === id);

  const addToFavorites = () => {
    if (!isDentistInFavorites) {
      dispatch({ type: "ADD_TO_FAVORITES", payload: { id, name, username } });
    }
  };

  const removeFromFavorites = () => {
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: id });
  };

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>        
        <img src={ProfilePic} alt="profile pic"/>
        <p>{name}</p>
        <p>{username}</p>
      </Link>
      <button onClick={addToFavorites} className="favButton" disabled={isDentistInFavorites}>
        {isDentistInFavorites ? "Ya en favoritos" : "Add fav"}
      </button>
      <button onClick={removeFromFavorites} className="favButton">
        Remove fav
      </button>
    </div>
  );
};

export default Card;
