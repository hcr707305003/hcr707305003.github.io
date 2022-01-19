const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "Tobu-Candyland",
        artist: 'Various Artists',
        url: 'https://www.ytmp3.cn/down/38422.mp3',
        cover: 'http://q1.qlogo.cn/g?b=qq&nk=1305192757&s=100&t=1642594263',
      },
      {
        name: 'being',
        artist: 'KOTOKO',
        url: 'https://www.ytmp3.cn/down/36139.mp3',
        cover: 'http://p2.music.126.net/yGwX-aQA5SweqV0BuSe5Kw==/109951163117817799.jpg?param=60y60',
      }
    ]
});