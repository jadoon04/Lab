function NavBar()
{

    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src = "https://wassets.hscicdn.com/static/images/logo.png"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Live Scores
          </a>
          <li class="nav-item dropdown">
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Live Scores Home</a></li>
            <li><a class="dropdown-item" href="#">Results</a></li>
            <li><a class="dropdown-item" href="#">Season View</a></li>
            <li><a class="dropdown-item" href="#">Desktop Scoreboard</a></li>
            <li><a class="dropdown-item" href="#">Schedule</a></li>
            <li><a class="dropdown-item" href="#">Month View</a></li>
            <li><a class="dropdown-item" href="#">International Calendar</a></li>
            
          </ul>
          </li>
          
          
        
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Series</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Teams</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Videos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Stats</a>
        </li>
      </ul>
      <form class="d-flex">
     
          <a class="nav-link active" aria-current="page" href="#">Edition PK</a>
         
       
      </form>
    </div>
  </div>
</nav>
    );

}
export default NavBar;