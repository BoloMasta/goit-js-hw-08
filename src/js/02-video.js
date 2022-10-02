const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// POBIERANIE CZASU ODTWARZANIA
const onPlay = function (data) {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);

    // SPRAWDZENIE W KONSOLI
    console.log(
      'Local saved time: ' + localStorage.getItem('videoplayer-current-time')
    );
  });
};

// lodash.throttle
var throttle = require('lodash.throttle');
var throttled = throttle(onPlay, 1000, { trailing: false });
player.on('timeupdate', throttled);

// ODTWARZANIE OD ZAPISANEGO MOMENTU
if (localStorage.length === 0) {
  player.setCurrentTime(0);
} else {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
