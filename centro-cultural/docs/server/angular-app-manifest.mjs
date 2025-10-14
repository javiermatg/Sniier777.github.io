
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/Sniier777.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Sniier777.github.io"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Sniier777.github.io/acerca"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Sniier777.github.io/contacto"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Program%20Files/Git/Sniier777.github.io",
    "route": "/Program%20Files/Git/Sniier777.github.io/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 538, hash: '6c3dc17fec0d913df28518d9c77ff79d426e4b19fbfeac0f25b32d4677893fb1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1051, hash: '9812008988987719c0c678f796c75becb18f215e3660b48c614df556b9b453d6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
