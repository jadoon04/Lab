import { Link } from "react-router-dom";
function Card() {
    return (
        <div id="cards" >
            
            <div id="card1" class="card">
  <div class="card-header" style={{color:"black",fontFamily:"bold"}}>
    Quick Links
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p style={{fontSize:13}}>T20 Timeout</p>
      <p style={{fontSize:13}}>T20 Time Out</p>
      <p style={{fontSize:13}}>Fantasy Pick</p>
      <p style={{fontSize:13}}>ICC Rankings</p>
    </blockquote>
  </div>
</div>
<div id="card2" class="card">
  <div class="card-header" style={{color:"black",fontFamily:"bold"}}>
    ESPNcricinfo Apps
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p style={{fontSize:13}}>Anroid App</p>
      <Link to = "/Ios"><p style={{fontSize:13}}>iOS App</p></Link>
      
    </blockquote>
  </div>
</div>
<div id="card3" class="card">
  <div class="card-header" style={{color:"black",fontFamily:"bold"}}>
    Follow ESPNcricinfo
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p style={{fontSize:13}}>Instagram</p>
      <p style={{fontSize:13}}>Twitter</p>
      <p style={{fontSize:13}}>Facebook</p>
      <p style={{fontSize:13}}>Youtube</p>
    </blockquote>
  </div>
</div>
<div id="card4" class="card">
  <div class="card-header" style={{color:"black",fontFamily:"bold"}}>
    ESPN Sides
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p style={{fontSize:13}}>The Cricket Monthly</p>
      <p style={{fontSize:13}}>ESPN</p>
    </blockquote>
  </div>
</div>


</div>
      );
}

export default Card;