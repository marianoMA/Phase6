var a = document.getElementById("1");
var b = document.getElementById("9");
var c = document.getElementById("6");
var d = document.getElementById("5");
function nextImage(el){
	if (el.src.match("image/1.PNG")){
		el.src = "image/2.PNG";
		checkImages(el);
		// if the image is a cherry, change it to a lemon!
	} else if (el.src.match("image/2.PNG")){
		el.src = "image/3.PNG";
		checkImages(el);
		// if the image is a lemon, change it to an orange!
	} else if (el.src.match("image/3.PNG")){
		el.src = "image/4.PNG";
		checkImages(el);
		// if the image is an orange, change it to a cherry!
  } else if (el.src.match("image/4.PNG")){
    el.src = "image/5.PNG";
		checkImages(el);
  } else if (el.src.match("image/5.PNG")){
    el.src = "image/6.PNG";
		checkImages(el);
  } else if (el.src.match("image/6.PNG")){
    el.src = "image/7.PNG";
		checkImages(el);
  } else if (el.src.match("image/7.PNG")){
    el.src = "image/8.PNG";
		checkImages(el);
  } else if (el.src.match("image/8.PNG")){
    el.src = "image/9.PNG";
		checkImages(el);
  } else if (el.src.match("image/9.PNG")){
    el.src = "image/1.PNG";
		checkImages(el);
	} else {
		// do nothing
	}
}
function checkImages(el) {
	if (a.src.match("image/1.PNG") && b.src.match("image/9.PNG") && c.src.match("image/6.PNG") && d.src.match("image/5.PNG")){
	console.log("oof");
	window.location.href = "http://google.com";
 }
}
var button = document.getElementById('button');
button.setAttribute("href", "https://www.google.com");
