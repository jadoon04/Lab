import { useState } from "react";


function Qea() {
    const[score,setScore]=  useState([
        {
            name: "Quaid e Azam Trophy",   
            team1: "Sindh*",
            team2: "Balouchistan",
            tscore: "349/1",
            over: "(70 ov)",
            text: "Sindh chose to bat"

        },
        {
            name: "",
            team1: "Southern Punjab(Pakistan)*",
            team2: "Central Punjab(Pakistan)",
            tscore: "452/4",
            over: "(90 ov)",
            text: "Central PNJB chose to field"

        },
        {
            name: "",
            team1: "Kyber Pakhtunkhwa",
            team2: "Northern (Pakistan)*",
            over: "(2 ov)",
            tscore: "6/1",
            text: "Khyber trail by 217 runs"
           


        }
    ]);
    return ( 
        <div>
            {score.map((totalscore) => (
        <div>
          <div class="wrapper">
            <div class="grid grid--4">
              <div class="grid__item">
                <article>
                    <h4>{totalscore.name}</h4>
                  <h6>{totalscore.team2}</h6>
                 
                </article>
                
                <article>
                  <h6>{totalscore.team1} &nbsp;  &nbsp; &nbsp; &nbsp;
                  <span>{totalscore.tscore}</span> <span>{totalscore.over}</span>
                  </h6>
                  <span>{totalscore.text}</span> 
                </article>
                <br></br>
                <br></br>
                
              </div>
            </div>
          </div>
        </div>
      ))}

        </div>
        
     );
}
export default Qea;