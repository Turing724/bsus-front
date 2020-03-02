// dev
let isDev = /^(192\.168|localhost)/.test(window.location.host);

export default {
  host: isDev ? "http://localhost:7001" : "https://api.baishiup.com"
};
