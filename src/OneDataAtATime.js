import react, {  useState } from "react";
import { useQuery,gql } from "@apollo/client";
import useData from "./hooks/useData";


const OneDataAtATime = () =>{

   
    const [value,setValue] = useState(null)
    const [id,setId]=useState(null)
    




    const {data,error,loading}=useData(id)

        const handleClick =() =>{

        setId(value)



                                }



return (

    <div>
        <input type="number" onChange={(e)=>{setValue(e.target.value)}} placeholder="Enter Your ID Here"></input>
        <br>
        </br>
        <button onClick={handleClick}>Click me</button>
        {
            data && <div><img src={data.character.image}/>
                        <h1>{data.character.name}</h1>
            </div>

        }
    </div>

)




}

export default OneDataAtATime;