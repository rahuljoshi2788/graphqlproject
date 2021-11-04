import react from "react";
import { useQuery,gql } from "@apollo/client";

const GET_CHARACTERS = gql`

    query{

        characters{
            results {

                id
                name
                image

            }


        }

    }
`

export default function DatafromGql() {

    const {error,loading,data}=useQuery(GET_CHARACTERS);

    
    console.log({error,loading,data})

    return (
        <div>
            {

             data && data.characters.results.map((character)=>{
                    return (
                        <div key={character.id}>
                        <img src={character.image}/>
                        <h1>{character.name}</h1>
                        </div>
                        

                    )

                })

            }
        
        </div>

    )

}