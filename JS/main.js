var logEL = document.querySelector('.battery-log');

var battery = {
  charged: '0%',
  bueno: 0   
}

var animation = anime({
  targets: battery,
  charged: '100%',
  bueno: 130,
  round: 1,
  easing: 'linear',
  update: function(){
    logEL.innerHTML = JSON.stringify(battery);
  }
});