/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9d86d115dfe8fad47313d2d68b60283b"
  },
  {
    "url": "assets/css/0.styles.c7ea3aa3.css",
    "revision": "fd96b327f908aaa2b5698a2b170f7cf3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sql_relative.2544f88a.png",
    "revision": "2544f88a112ac5fe7f954c4bab58300d"
  },
  {
    "url": "assets/js/10.7410fae9.js",
    "revision": "9861f1acd35b8cdae58c97c641a020c0"
  },
  {
    "url": "assets/js/11.cd470972.js",
    "revision": "7d264acc88202f94eeaff5d87f12b22b"
  },
  {
    "url": "assets/js/12.add5d9b2.js",
    "revision": "47c2c633df54ed6b03fdec0e2c8189ab"
  },
  {
    "url": "assets/js/13.2a0d545b.js",
    "revision": "329392e254b7c42877bdd9be0419daf3"
  },
  {
    "url": "assets/js/14.9b256072.js",
    "revision": "7e6e78346124412195991dd1ef11bfae"
  },
  {
    "url": "assets/js/15.27e3250e.js",
    "revision": "974b48eb9cfacf5debeaefd083d0d6cf"
  },
  {
    "url": "assets/js/16.737e97b2.js",
    "revision": "a91351e57113c1d1c5155409b8468da2"
  },
  {
    "url": "assets/js/17.e76ca1c5.js",
    "revision": "c090b9ec16858d51d158a8c0a9fa0154"
  },
  {
    "url": "assets/js/18.c2867043.js",
    "revision": "2abf00b084fd22114bd29e4ef5ec6c7c"
  },
  {
    "url": "assets/js/19.99397531.js",
    "revision": "2af13fcbc6726e6464ac3a89b6b15319"
  },
  {
    "url": "assets/js/2.fa8be5d9.js",
    "revision": "daa6b6ed292696bf0a2e3aa0e1b1153a"
  },
  {
    "url": "assets/js/20.84eaddb3.js",
    "revision": "57918da436e9fc0d58037023b5d89bf5"
  },
  {
    "url": "assets/js/21.4c88f67c.js",
    "revision": "c8c553ebfa12b951a64ecb6cb4fc8a6c"
  },
  {
    "url": "assets/js/22.da854211.js",
    "revision": "e0a357f8d50b4bb220884b6bdd463dad"
  },
  {
    "url": "assets/js/23.4c52707f.js",
    "revision": "5679374a8664ac710cb00a6da8c64123"
  },
  {
    "url": "assets/js/24.5d929f13.js",
    "revision": "51efe1b4ca10fe9c0a114a3337ae0245"
  },
  {
    "url": "assets/js/26.d484d0e7.js",
    "revision": "9052f0ce80ac768f33661d8b7dc67bcd"
  },
  {
    "url": "assets/js/3.56bdb42d.js",
    "revision": "9d2b51430537848cac2ea5124482a938"
  },
  {
    "url": "assets/js/4.7ddea41d.js",
    "revision": "668bc91fb4500762c33bec844d358f72"
  },
  {
    "url": "assets/js/5.a1d2db21.js",
    "revision": "6d5176ba3b4c2fa125c6a9aeb57b6aa7"
  },
  {
    "url": "assets/js/6.9494771f.js",
    "revision": "52d18539e934aaf4d345354d67942f01"
  },
  {
    "url": "assets/js/7.99c7438d.js",
    "revision": "bdfef6f12cfe483be868002afeba6c65"
  },
  {
    "url": "assets/js/8.08230dd5.js",
    "revision": "c3e88a6d81fe19bf5c7fc15c982c3c4c"
  },
  {
    "url": "assets/js/9.94762622.js",
    "revision": "8d744c4bc62ac7fd91f68755a0f6239d"
  },
  {
    "url": "assets/js/app.d0f8108e.js",
    "revision": "0d1c4756c198de2d4b9a6994d360b0d0"
  },
  {
    "url": "conclusion/index.html",
    "revision": "4073c1c7916773641fa34ac5ec2314d1"
  },
  {
    "url": "design/index.html",
    "revision": "e05cd8698ecd3f3772cc5bf65d2551f6"
  },
  {
    "url": "index.html",
    "revision": "5fcc1f51cdf5dcb75736b8ffae508c1e"
  },
  {
    "url": "intro/index.html",
    "revision": "ff4dc58c21a96f3e295ac62433fd75a0"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "ffb786385e96338d2f577645a58e8fd9"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "4649b7eef85af0faaa103c47821f95e7"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "80b42cb99c3657bf9c7a471b223173a4"
  },
  {
    "url": "software/index.html",
    "revision": "69e5258bb4d0a0734a67db547a67e30f"
  },
  {
    "url": "test/index.html",
    "revision": "7c59446e0efee16362d3ee89fd910f92"
  },
  {
    "url": "use cases/index.html",
    "revision": "91cda40c89f4845e9430aa89a17cf167"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
