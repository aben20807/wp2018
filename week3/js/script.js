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

function slide() {
  let p1t = $('#p1t');
  let p2t = $('#p2t');
  if (!toggle) {
    p1t.animate({"left":"-100%"}, 1000);
    p2t.animate({"left":"10%"}, 1000);
    p1t.animate({"left":"100%"}, 0);
  } else {
    p2t.animate({"left":"-100%"}, 1000);
    p1t.animate({"left":"10%"}, 1000);
    p2t.animate({"left":"100%"}, 0);
  }
}
