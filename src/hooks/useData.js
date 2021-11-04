import react, {  useState } from "react";
import { useQuery,gql } from "@apollo/client";


const useData = (id)=>{

    const GET_CHARACTER = gql`

query GET_CHARACTER($id:ID!){

    character(id:$id){
        

            id
            name
            image

        


    }

}
`

const {data,error,loading}=useQuery(GET_CHARACTER,{
    variables:{
    id,
    
    }
    
    }
   
    )

    return {data,error,loading}

}

export default useData;