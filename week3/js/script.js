var toggle = false;

function btnClick() {
  changeBodyBackground();
  changeViewColor();
  zoomImage();
  slide();
  toggle = !toggle;
}

function changeBodyBackground() {
  document.body.style.background =
    (toggle == 0)? '#AB8F82': '#E7E7E7';
}

function zoomImage() {
  let bg = document.getElementById('bg').style;
  bg.width = (toggle == 0)? '110%': '100%';
  bg.height = (toggle == 0)? '110%': '100%';
}

function changeViewColor() {
  let view = document.getElementById('view').style;
  view.background = (toggle == 0)? '#617287': '#FCFCFC';
  view.color = (toggle == 1)? '#617287': '#FCFCFC';
  let read_more = document.getElementsByClassName('read_more');
  for (let i = 0; i < read_more.length; i++) {
    read_more[i].style.color = (toggle == 1)? '#617287': '#FCFCFC';
  }
}

let p1t = $('#p1t');
let p2t = $('#p2t');
let r1 = $('#r1');
let r2 = $('#r2');
let b4 = $('#block4');
let bd = $('#blockd');

function slide() {
  if (!toggle) {
    p1t.animate({"left":"-100%"}, 1000).animate({"left":"100%"}, 0);
    r1.animate({"left":"-100%"}, 1000).animate({"left":"100%"}, 0);
    b4.animate({"left":"-100%"}, 1000).animate({"left":"100%"}, 0);

    p2t.animate({"left":"10%"}, 1000);
    r2.animate({"left":"45%"}, 1000);
    bd.animate({"left":"10%"}, 1000);
  } else {
    p2t.animate({"left":"-100%"}, 1000).animate({"left":"100%"}, 0);
    r2.animate({"left":"-100%"}, 1000).animate({"left":"100%"}, 0);
    bd.animate({"left":"-100%"}, 1000).animate({"left":"100%"}, 0);

    p1t.animate({"left":"10%"}, 1000);
    r1.animate({"left":"45%"}, 1000);
    b4.animate({"left":"10%"}, 1000);
  }
}
