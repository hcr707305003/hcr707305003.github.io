const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  audio: [
    {
      name: "Daisy",
      artist: '境界的彼方',
      url: '/music/daisy.mp3',
      cover: 'https://p3fx.kgimg.com/stdmusic/240/20210113/20210113041630995040.jpg',
    },
    {
      name: "oblivious",
      artist: 'Kalafina',
      url: '/music/oblivious.mp3',
      cover: '//y.qq.com/music/photo_new/T002R300x300M000001eNSk10EjpBz_2.jpg?max_age=2592000',
    },
    {
      name: "being",
      artist: 'KOTOKO',
      url: '/music/being.mp3',
      cover: '//y.qq.com/music/photo_new/T002R300x300M00000283Pae1B412l_1.jpg?max_age=2592000',
    },
    {
      name: "Now Loading!!!!",
      artist: '高田忧希、山口爱、户田惠、竹尾步美',
      url: '/music/now-loading.mp3',
      cover: '//y.qq.com/music/photo_new/T002R300x300M0000033MkZL3GaqMv_1.jpg?max_age=2592000',
    }
  ]
});