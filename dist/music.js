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
      name: "楽園PROJECT",
      artist: 'Ray',
      url: '/music/楽園PROJECT.mp3',
      cover: 'http://p2.music.126.net/KdOoY50mYJcYTMiGqgpVtQ==/6050612488066929.jpg?param=130y130',
    },
    {
      name: "PHOSPHOR",
      artist: '宮崎羽衣',
      url: '/music/PHOSPHOR.mp3',
      cover: 'http://p1.music.126.net/_yd5-yov50S7nTfnil7pDA==/109951173175249065.jpg?param=130y130',
    },
    {
      name: "Now Loading!!!!",
      artist: '高田忧希、山口爱、户田惠、竹尾步美',
      url: '/music/NowLoading!!!!.m4a',
      cover: '//y.qq.com/music/photo_new/T002R300x300M0000033MkZL3GaqMv_1.jpg?max_age=2592000',
    }
  ]
});