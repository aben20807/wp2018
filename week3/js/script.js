var toggle = false;

function btnClick() {
  changeBodyBackground();
  toggle = !toggle;
}

function changeBodyBackground() {
  document.body.style.background =
    (toggle == 0)? '#617287': '#FCFCFC';
}
