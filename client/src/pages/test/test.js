import { useEffect } from 'react';
import axios from 'axios';



export function Test() {

    axios.get("http://localhost:5000/hello")
    .then(function(response){
        console.log(response);
    })

    axios.get("http://localhost:5000/hello")
    .then(function(response){
        console.log(response);
    })

    return(
        <>I'm test</>
    )
}