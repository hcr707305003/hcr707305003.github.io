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
        name: "Hopes and Dreams",
        artist: 'Toby Fox',
        url: 'https://www.ytmp3.cn/down/37304.mp3',
        cover: 'https://p1.music.126.net/oZe-JSuWYAR8zSa29g9g0g==/3254554423361647.jpg?param=60y60',
      },
      {
        name: "Dream Lantern",
        artist: 'RADWIMPS',
        url: 'https://www.ytmp3.cn/down/73519.mp3',
        cover: 'http://p2.music.126.net/sSxbRt9RpC6s_MaewyDJfA==/18597139672292692.jpg?param=60y60',
      },
      {
        name: 'being',
        artist: 'KOTOKO',
        url: 'https://www.ytmp3.cn/down/36139.mp3',
        cover: 'http://p2.music.126.net/yGwX-aQA5SweqV0BuSe5Kw==/109951163117817799.jpg?param=60y60',
      }
    ]
});