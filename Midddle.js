import { useState } from "react";
import './Middle.css';
function Middle() 
{

    const [card, setCard] = useState([
       
      {
        image: (


          
          <img style = {{width:"100%", border:"1 px solid black"}}
            src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/349600/349695.6.jpg">
        </img>
        ),
        text: "Live- NZ bowlers comfortable against new ball in 307 chase."
        

      },

      {
        image: (


          
          <img style = {{width:"100%"}}
            src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/349500/349534.6.jpg">
        </img>
        ),
        text: "SL need all the Super League points they can get, as Afghanistan ODIs kick off."
        

      },
      

      {
        image: (


          
          <img style = {{width:"100%"}}
            src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/349600/349695.6.jpg">
        </img>
        ),
        text: "Live- NZ bowlers comfortable against new ball in 307 chase."
        

      },
      // function handleDelete(cdata.filter){
      //   if (id!=id)
      // }
      
      
     
        
    ])

    return (  
        <div>
      {card.map((cdata) => 
      (
      <article class="card">

        <span style = {{flex:"row"}} class="card__thumb">{cdata.image}</span>
        <div class="card__content">
          <h6 class="card__title">{cdata.text}</h6>
          {/* <button handleDelete = {handleDelete}></button> */}


      
    </div>
          
        
        <hr></hr>

    </article>

      ))}

    </div>
    );
}

export default Middle;