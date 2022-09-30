const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const licznik = document.getElementById('licznik');

const onPlay = function (data) {
  player
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem('videoplayer-current-time', seconds);
      console.log('LOCAL: ' + localStorage.getItem('videoplayer-current-time'));
      licznik.innerHTML = localStorage.getItem('videoplayer-current-time');
    })
    .catch(function (error) {
      console.log('ERROR');
    });
};

player.on('play', onPlay);

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log(
          'the time was less than 0 or greater than the video’s duration'
        );
        break;

      default:
        // some other error occurred
        break;
    }
  });
