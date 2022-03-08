function showhide(){

    var dis = document.getElementById("todo");

    if (dis.style.display == "flex") 
    {
         dis.style.display = "none";   
    }
    else
    {
       dis.style.display = "flex";
    }

}

function showhd(){

    var nex = document.getElementById("tday");

    if (nex.style.display == "none") 
    {
         nex.style.display = "block";   
    }
    else
    {
       nex.style.display = "none";
    }

}

const dt = new Date();
document.getElementById("date").innerHTML = dt;