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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "26aeef7205bb537c873a8e1c83a7b69a"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "api/index.html",
    "revision": "8d694d893977fded8742ff690980acf6"
  },
  {
    "url": "assets/css/0.styles.71ff2442.css",
    "revision": "a34779dac9a75e0d43dcb47c7b2d5afc"
  },
  {
    "url": "assets/img/delete.befaf90a.png",
    "revision": "befaf90a190709fd468b4e4b44bb24a7"
  },
  {
    "url": "assets/img/get.071cabe8.png",
    "revision": "071cabe820c4d3ec8bd49ca875f0c811"
  },
  {
    "url": "assets/img/get2.dbb03e15.png",
    "revision": "dbb03e15de9d1c164f5b04ead6283254"
  },
  {
    "url": "assets/img/get3.800afd85.png",
    "revision": "800afd857171f985828851af766d9e90"
  },
  {
    "url": "assets/img/post.61d995b2.png",
    "revision": "61d995b2d11decea107b7930a52c3604"
  },
  {
    "url": "assets/img/put.f9ba5d51.png",
    "revision": "f9ba5d51205aa2a3c53967d4f5794037"
  },
  {
    "url": "assets/img/relational_scheme.50c04084.png",
    "revision": "50c0408448f359da6c0793e327723a83"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/startFlask.1c703ec5.png",
    "revision": "1c703ec59d422a06cc008ef02b77f69a"
  },
  {
    "url": "assets/js/10.35d89b73.js",
    "revision": "0f40f6c197dd3d5e3f2618dc66746103"
  },
  {
    "url": "assets/js/11.603171d8.js",
    "revision": "2236bfcbc49677c60c3b0fda1eda054b"
  },
  {
    "url": "assets/js/12.9a82e5ab.js",
    "revision": "669b3599ad6274169364ffc97b28fbb6"
  },
  {
    "url": "assets/js/13.4f9f149e.js",
    "revision": "d5fbcbeb7da6679a796ea48f977dff34"
  },
  {
    "url": "assets/js/14.36796f7d.js",
    "revision": "50df2bba4e7f9272ff6d717f924b6732"
  },
  {
    "url": "assets/js/15.9c6bcc86.js",
    "revision": "b0f69eb1e82c25a6e39404b17100d6bf"
  },
  {
    "url": "assets/js/16.56faf7ac.js",
    "revision": "98f8bfefc8fd54fd579a30ea90974f32"
  },
  {
    "url": "assets/js/17.a2c48682.js",
    "revision": "05a25ef8c2cb474fdb8725f7d49cb595"
  },
  {
    "url": "assets/js/18.62bb8897.js",
    "revision": "6586b008bb87726018b625afcfa10138"
  },
  {
    "url": "assets/js/19.a26f6889.js",
    "revision": "e50b40bbc9910eb24a2201fb87ed1cd6"
  },
  {
    "url": "assets/js/2.a7c45aa3.js",
    "revision": "63318108ce286da836d2a38584f50182"
  },
  {
    "url": "assets/js/20.f88e7407.js",
    "revision": "9b977a09b5281e41e508f6a0c8c44934"
  },
  {
    "url": "assets/js/21.2cc4761f.js",
    "revision": "59234ca2d53bf3792810fa754f4955e8"
  },
  {
    "url": "assets/js/22.39a9ded2.js",
    "revision": "3d421fc125be0e90b95b305e9e3530e5"
  },
  {
    "url": "assets/js/23.f9948ada.js",
    "revision": "eef8ec95cecb148b7278399e4eb76724"
  },
  {
    "url": "assets/js/24.4951bab4.js",
    "revision": "38e99f4c57aa68aa5cfd45270d0a9922"
  },
  {
    "url": "assets/js/25.8863a270.js",
    "revision": "1b4196966d2455b775c47f807617c5bb"
  },
  {
    "url": "assets/js/27.9a1f882a.js",
    "revision": "2cfd2d40a7d1e99299514d0125139a89"
  },
  {
    "url": "assets/js/3.78e8da28.js",
    "revision": "588b858667614b226df255ddf95cfab8"
  },
  {
    "url": "assets/js/4.8211a5d0.js",
    "revision": "18ce14d312c3d494dc613083f57bbf6e"
  },
  {
    "url": "assets/js/5.22a8c3cd.js",
    "revision": "859d0d25ceb8cd189fa6450460efe1db"
  },
  {
    "url": "assets/js/6.234fb2a8.js",
    "revision": "02eabacfbb06d344213adaa7dcc22fbe"
  },
  {
    "url": "assets/js/7.352b63be.js",
    "revision": "3f7fa61d3aa5a271836c22f2a98033ed"
  },
  {
    "url": "assets/js/8.acae36a2.js",
    "revision": "ec8f43b9878e92b5af70faee022ec4c9"
  },
  {
    "url": "assets/js/9.2e26f8b0.js",
    "revision": "ca1ee0f65168061be63e2ceaea08d5f3"
  },
  {
    "url": "assets/js/app.0f2f35e9.js",
    "revision": "b9c81c3587eb95dea742efde72286413"
  },
  {
    "url": "conclusion/index.html",
    "revision": "93363d8733001067b7c5e7ad0277f662"
  },
  {
    "url": "design/index.html",
    "revision": "46892ce8e118361f11f33aaac414fc06"
  },
  {
    "url": "index.html",
    "revision": "df6cd68a2fd25206213a5580c39d1315"
  },
  {
    "url": "intro/index.html",
    "revision": "0125bfc9dd7b067239845a228d3cbe11"
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
    "revision": "7a49bd574e4c239ee7c8f7900a02dea0"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "208726e03db46c5faaec057a5f251453"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "4115c4f5bb482cbded6ca0358500cd03"
  },
  {
    "url": "software/index.html",
    "revision": "02325b0a20067b888e854376d02ab40e"
  },
  {
    "url": "test/index.html",
    "revision": "94176f47ec1ab6dee985967fddc812e8"
  },
  {
    "url": "use-cases/index.html",
    "revision": "2861ad35ace7083c0b2abf125e3efefd"
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
