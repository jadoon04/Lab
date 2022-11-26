import { useState } from "react";
 import "./Right.css";

function RightBar() {
    const[score,setScore]=  useState([
        {
            name: "Stumps",   
            team1: "England",
            team2: "England Lions*",
            tscore: "501/7d",
            tscore2: "412/9",
            over: "(77 ov)",
            text: "England lions trail by 89 runs."

        },
        
        {
            name: "INNINGS BREAK",
            team1: "India",
            team2: "Newzealand",
            over: "(50 ov)",
            tscore: "306/7",
            text: "New zealand chose to bat."
           


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
                    <p style = {{color:"red"}}>{totalscore.name}</p>
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
export default RightBar;