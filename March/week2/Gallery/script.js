function darkmode() {
  const darkmd = document.getElementById("overview");

  // darkmd.style.backgroundColor = black;
  // darkmd.style.color = white;
  if (darkmd.style.backgroundColor == "black") {

    const dark = document.querySelector("body");
    dark.style.backgroundColor = "white";
    dark.style.color = "black";
    document.querySelector(".setting").style.backgroundColor = "white";
    document.getElementById("mode").innerHTML = "Dark Mode";
    document.querySelector("#light").style.display = "block";
    document.querySelector("#dark").style.display = "none";

    const var3 = document.querySelector("#photo");

    if (var3.style.color == "rgb(87, 90, 243)") {
      var3.style.color = "rgb(87, 90, 243)"
    }
    else {
      var3.style.color = "black";
    }

    const var4 = document.querySelector("#album");

    if (var4.style.color == "rgb(87, 90, 243)") {
      var3.style.color = "rgb(87, 90, 243)"
    }
    else {
      var4.style.color = "black";
    }


  }

  else {

    const dark = document.querySelector("body");
    dark.style.backgroundColor = "black";
    dark.style.color = "white";
    document.querySelector(".setting").style.backgroundColor = "black";
    document.getElementById("mode").innerHTML = "Light Mode";
    document.querySelector("#light").style.display = "none";
    document.querySelector("#dark").style.display = "block";
    const var1 = document.querySelector("#photo");
    if (var1.style.color == "rgb(87, 90, 243)") {
      var1.style.color = "rgb(87, 90, 243)";
    }

    else {
      var1.style.color = "white";
    }

    const var2 = document.querySelector("#album");
    if (var2.style.color == "rgb(87, 90, 243)") {
      var2.style.color = "rgb(87, 90, 243)";
    }

    else {
      var2.style.color = "white";
    }


  }

}
// when we are not using querryselector in hiding the div we can use this method to hide the setting menubar 

function show(){
    const idd = document.getElementById("hideshow");

    if ( idd.style.display == "block")  {

        idd.style.display = "none";
    }
    else {
        idd.style.display = "block";
    }


}

function hide(){
    const cll = document.getElementById("hideshow");

    if ( cll.style.display == "block")  {

        cll.style.display = "none";
    }
    else {
        cll.style.display = "block";
    }
}

const fnc = document.getElementById("photo");

const fn = function () {
  const varimg = document.getElementById("hideshowalbums");
  varimg.style.display = "none";
  const varalbum = document.getElementById("hideshowphotos");
  varalbum.style.display = "block";
  document.querySelector("#photo").style.color = "rgb(87, 90, 243)";
  const color = document.querySelector("body");
  if (color.style.backgroundColor == "black") {
    document.querySelector("#album").style.color = "white";
  }

  else {
    document.querySelector("#album").style.color = "black";
  }

}

fnc.addEventListener("click", fn);


const fnct = document.getElementById("album");

const fnctin = function () {
  const varalbum = document.getElementById("hideshowphotos");
  varalbum.style.display = "none";
  const varimg = document.getElementById("hideshowalbums");
  varimg.style.display = "block";
  document.querySelector("#album").style.color = "rgb(87, 90, 243)";
  const color = document.querySelector("body");
  if (color.style.backgroundColor == "black") {
    document.querySelector("#photo").style.color = "white";
  }

  else {
    document.querySelector("#photo").style.color = "black";
  }

}
fnct.addEventListener("click", fnctin);

document.addEventListener('mouseup', function (e) {
  var container = document.getElementById('hideshow');
  if (!container.contains(e.target)) {
    container.style.display = 'none';
  }
}

);

// const zoomout = documen.querySelector(".image");

// const new_fn = function(){
//   const zoom = document.getElementsByClassName("image");
//   zoom.style.width = "75%" ;
//   zoom.style.height = "inherited";

// } 

// zoomout.addEventListener("click", new_fn);



