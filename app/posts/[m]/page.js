
import Link from "next/link";

export default function ShowPagess(props) {

console.log("ss")
    console.log(props,"dd");

    return(

        <div>
         <h1>{props.params.m}</h1>
          
        </div>
    )
}