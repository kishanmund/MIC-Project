let toggle=true

let user=true



function sideBar(i) {
    if(i!='mob'){
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
    else{
        if(toggle){
            document.getElementById("mySidebar").style.width = "100%";
            document.getElementById("container").style.marginLeft = "0";
            
        }
        else{
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("container").style.marginLeft= "0";
        }
        toggle=!toggle
    }
  }

function url(name){
    if(name == "table"){
        document.getElementById("breadcrumbs").innerHTML="All Users"
        window.history.pushState('page2', 'Title', '/index.html?users');
        document.getElementById("users").style.display="none"
        document.getElementById("table").style.display="block"
    }
    else{
        {
            document.getElementById("breadcrumbs").innerHTML="Manage User"
            window.history.pushState('page2', 'Title', '/index.html?addUser');
            document.getElementById("users").style.display="block"
            document.getElementById("table").style.display="none"
        }
    }
    
}




  