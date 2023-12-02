import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useDentistContext } from "../Provider/DentistContext";
import { useState } from "react";
import { useAppContext } from "../Provider/AppContext";

const Home = () => {
    const { state, dispatch } = useDentistContext();

    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
    // Aquí realizar la llamada a la API y actualizar el contexto
    const fetchData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            
            setIsLoading(false);

                const data = await response.json();
            dispatch({ type: "SET_DENTISTS", payload: data });
        } catch (error) {
            console.error("Error fetching dentists:", error);
        }
    };

    fetchData();
    }, [dispatch]);
    
    console.log(state)

    const { state:themeState } = useAppContext()

    if(isLoading){
        return <p>Loandig Dentist</p>
    } 

    return (        
        
        <div className={`content`}>
            
            <h2>List of Dentists</h2>
                <div className="dentist-grid">
                        {state.dentists.map((dentist) => (
                    <div key={dentist.id} className="dentist-card">         
                            <Card name={dentist.name} username={dentist.username} id={dentist.id} />                    
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Home;
