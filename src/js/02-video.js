const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

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
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
