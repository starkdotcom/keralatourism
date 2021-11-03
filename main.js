window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  var header = document.getElementById("header");
  var x = window.matchMedia("(max-width: 700px)");
  /* if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    navbar.style.cssText =
      "position: fixed;background:white;width:100%;box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);";
    console.log("worked.");
    header.style.cssText = "font-size:30px;";

    //document.getElementById("navbar").style.background = "white";
    //document.getElementById("header").style.fontSize = "30px";
  } else {
    //document.getElementById("navbar").style.position = "relative";

    navbar.style.cssText =
      "position: absolute;left:0;top:0;background:transparent;width:100%;box-shadow:0px 0px;";
    if (x.matches) {
      header.style.cssText = "font-size:35px;";
    } else {
      header.style.cssText = "font-size:50px;";
    }

    //console.log(MediaDeviceInfo);
    //document.getElementById("header").style.fontSize = "50px";
  }*/
}

let bck = document.getElementById("bck");
let fwd = document.getElementById("fwd");
bck.onclick = () => {
  history.go(-1);
  return true;
};
fwd.onclick = () => {
  history.go(1);
  return true;
};
