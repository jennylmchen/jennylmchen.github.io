//swatch changing

//  border: 3px solid #dadada;
//box-shadow: 0 0 5px #dadada;
let s1 = document.getElementById("swatch1");

s1.onclick = function() {
  selectSwatch1(s1);
};

function selectSwatch1(swatch) {
  let dark = "#454545";
  let mid = "#616161";
  let light = "#c4c4c4";
  document.getElementById("rightbar-top").style.background = mid;
  document.getElementById("toolbar").style.background = mid;
  document.getElementById("container").style.background = light;
  document.getElementById("rightbar-bot").style.background = mid;
  document.getElementById("content").style.background = dark;
  document.getElementById("social").style.background = mid;
};


let s2 = document.getElementById("swatch2");

s2.onclick = function() {
  selectSwatch2(s2);
};

function selectSwatch2(swatch) {
  let dark = "#e3d2ba";
  let mid = "#f4e9da";
  let light = "#FFF6F4";
  document.getElementById("rightbar-top").style.background = mid;
  document.getElementById("rightbar-bot").style.background = dark;
  document.getElementById("toolbar").style.background = dark;
  document.getElementById("container").style.background = light;
  document.getElementById("social").style.background = mid;
  document.getElementById("content").style.background = mid;

  

};




let s3 = document.getElementById("swatch3");

s3.onclick = function() {
  selectSwatch3(s3);
};

function selectSwatch3(swatch) {
  //swatch.style.border = "5px solid #dadada";
  
  let mid = "#e75a48";
  let light = "#F4AC9E";
  let lightest = "#fad9d7";
  document.getElementById("rightbar-top").style.background = mid;
  document.getElementById("toolbar").style.background = mid;
  document.getElementById("container").style.background = lightest;
  document.getElementById("content").style.background = light;
  document.getElementById("rightbar-bot").style.background = mid;
  document.getElementById("social").style.background = mid;

};


let s4 = document.getElementById("swatch4");

s4.onclick = function() {
  selectSwatch4(s4);
};

function selectSwatch4(swatch) {
  //swatch.style.border = "5px solid #dadada";
  let lightest = "#E6F4F1";
  let mid = "#00BEC4";
  let light = "#93d8d9";
  document.getElementById("rightbar-top").style.background = mid;
  document.getElementById("toolbar").style.background = mid;
  document.getElementById("container").style.background = lightest;
  document.getElementById("content").style.background = light;
  document.getElementById("rightbar-bot").style.background = mid;
  document.getElementById("social").style.background = mid;
  document.i.style.color = "#333";
};


//switch to about div
let about = document.getElementById("aboutbutton");

about.onclick = function() {
  showAboutPage();
};

function showAboutPage() {
  document.getElementById("content").style.display = "none";

  // TODO: Remove the .hidden class from the div with the given id
  document.getElementById("about").style.display = "inline-block";
  typeWriter();
};



let gohome = document.getElementById("homebutton");


gohome.onclick = function() {
  showHomePage();
};

function showHomePage() {
  document.getElementById("about").style.display = "none";
  document.getElementById("content").style.display = "inline-block";
};




//typewriter animation for about section
function typeWriter() {
  var app = document.getElementById('typedintro');

  var typewriter = new Typewriter(app, {
      loop: true
  });

  typewriter.typeString('Hello! I am Jenny.')
      .pauseFor(2000)
      .deleteAll()
      .typeString('I design.')
      .pauseFor(1000)
      .deleteChars(7)
      .pauseFor(1000)
      .typeString('dance??')
      .pauseFor(1000)
      .deleteChars(7)
      .pauseFor(1000)
      .typeString('draw.')
      .pauseFor(1000)
      .typeString('.. sometimes.')
      .pauseFor(1000)
      .deleteAll()
      .pauseFor(2000)
      .start();
}

MicroModal.init();

