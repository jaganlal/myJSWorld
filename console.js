var thoppesJS = thoppesJS || {};

thoppesJS.console = {

  log: function(s) {
    document.getElementById("myconsole").innerHTML += s +'</br>';

    console.log(s);
  }

}