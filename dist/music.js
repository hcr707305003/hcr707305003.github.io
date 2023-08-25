const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  audio: [
    {
      name: "Daisy",
      artist: '境界的彼方',
      url: 'https://data.mp3-banana.pro/play-track/333131b3b030323734883731353332b634b1340100/cb5ecde160f7ffb8a8e23858275faf0a/0.mp3',
      cover: 'https://p3fx.kgimg.com/stdmusic/240/20210113/20210113041630995040.jpg',
    },
    {
      name: "oblivious",
      artist: 'Kalafina',
      url: 'https://data.mp3-banana.pro/play-track/33373432b334378b373534323635b7340600/eb51c74b7822545263f63f3b7605d370/0.mp3',
      cover: '//y.qq.com/music/photo_new/T002R300x300M000001eNSk10EjpBz_2.jpg?max_age=2592000',
    },
    {
      name: "being",
      artist: 'KOTOKO',
      url: 'https://data.mp3-banana.pro/play-track/33323631363536358fb7b0b034333232340400/9ab752ee1636d4fc06811fbc232b1523/0.mp3',
      cover: '//y.qq.com/music/photo_new/T002R300x300M00000283Pae1B412l_1.jpg?max_age=2592000',
    },
    {
      name: "Now Loading!!!!",
      artist: '高田忧希、山口爱、户田惠、竹尾步美',
      url: 'https://data.mp3-banana.pro/play-track/d33531303036333531893731353332b63432340500/f891b9d11a644a15920aec984e0ba5e2/2.mp3',
      cover: '//y.qq.com/music/photo_new/T002R300x300M0000033MkZL3GaqMv_1.jpg?max_age=2592000',
    }
  ]
});