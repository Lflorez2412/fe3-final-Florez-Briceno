import React from "react";
import Card from "../Components/Card";
import { useDentistContext } from "../Provider/DentistContext";
import { useAppContext } from "../Provider/AppContext";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state: themeState } = useAppContext();
  const { state } = useDentistContext();

  return (
    <div className={`content `}>
      <h1>Dentists Favs</h1>
      <div className={`card-grid `}>   
        {state.favoriteDentists.length > 0 ? (
        state.favoriteDentists.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))
      ) : (
        <p>No favorite dentist</p>
      )}
      </div>
    </div>
  );
};

export default Favs;
