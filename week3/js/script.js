var toggle = false;

function btnClick() {
  changeBodyBackground();
  zoomImage();
  toggle = !toggle;
}

function changeBodyBackground() {
  document.body.style.background =
    (toggle == 0)? '#617287': '#FCFCFC';
}

function zoomImage() {
  document.getElementById('bg').style.width =
    (toggle == 0)? '110%': '100%';
  document.getElementById('bg').style.height =
    (toggle == 0)? '110%': '100%';
}
