var a = document.getElementById("1");
var b = document.getElementById("9");
var c = document.getElementById("6");
var d = document.getElementById("5");
function nextImage(el){
	if (el.src.match("image/1.png")){
		el.src = "image/2.png";
		checkImages(el);
		// if the image is a cherry, change it to a lemon!
	} else if (el.src.match("image/2.png")){
		el.src = "image/3.png";
		checkImages(el);
		// if the image is a lemon, change it to an orange!
	} else if (el.src.match("image/3.png")){
		el.src = "image/4.png";
		checkImages(el);
		// if the image is an orange, change it to a cherry!
  } else if (el.src.match("image/4.png")){
    el.src = "image/5.png";
		checkImages(el);
  } else if (el.src.match("image/5.png")){
    el.src = "image/6.png";
		checkImages(el);
  } else if (el.src.match("image/6.png")){
    el.src = "image/7.png";
		checkImages(el);
  } else if (el.src.match("image/7.png")){
    el.src = "image/8.png";
		checkImages(el);
  } else if (el.src.match("image/8.png")){
    el.src = "image/9.png";
		checkImages(el);
  } else if (el.src.match("image/9.png")){
    el.src = "image/1.png";
		checkImages(el);
	} else {
		// do nothing
	}
}
function checkImages(el) {
	if (a.src.match("image/1.png") && b.src.match("image/9.png") && c.src.match("image/6.png") && d.src.match("image/5.png")){
	console.log("oof");
	window.location.href = "http://google.com";
 }
}
var button = document.getElementById('button');
button.setAttribute("href", "https://www.google.com");
