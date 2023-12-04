import {React, useEffect, useState} from "react";
import axios from "axios";
export function Hello(){

    const [output,setOutput] = useState("히히히히 ");
    const url = 'http://localhost:5000/api';

    async function getValue() {
      try{
        const response = await axios.get(url+'/output');
        setOutput(response.data);
        console.log(response)
      }catch(e){console.log(e)}
    }

    useEffect(()=>{getValue()},[])
    useEffect(()=>{setValue()},[])
    
    async function setValue(input_value) {
      try{
        const response = await axios.post(url+'/input',{output:input_value});
        console.log(response)        
      }
      catch(e){console.log(e)}
    }

    const [input_value,setInputValue] = useState();

    return(
        <div className="comHello">
            <h>출력하고 싶은 단어를 입력하세요</h>
            <br></br>
            <input value={input_value} onChange={(v)=>{setInputValue(v.target.value)}}></input> <button onClick={()=>{setValue(input_value);getValue()}}>입력</button>
            <br></br>
            <h>출력결과</h>
            <br></br>
            <h>{output}</h>
        </div>
    )
}