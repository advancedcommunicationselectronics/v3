var message = "function disabled";
    function rtclickcheck(keyp)
    {
      if (navigator.appName == "Netscape" && keyp.which == 3){
        alert(message);
        return false;
    }
      if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2)
    {
        alert(message); return false;
    }
  }
document.onmousedown = rtclickcheck;
//this script disables the right click function
//we are currently not linking to it on the site b/c we don't care what people click :) 
