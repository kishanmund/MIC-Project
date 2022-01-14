let toggle=true
function sideBar() {
    if(toggle){
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("container").style.marginLeft = "250px";
        
    }
    else{
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("container").style.marginLeft= "0";
    }
    toggle=!toggle
  }