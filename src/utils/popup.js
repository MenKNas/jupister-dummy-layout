const DEFAULT_WIDTH = 1280;
const DEFAULT_HEIGHT = 720;

const openPopup = (url, w = DEFAULT_WIDTH, h = DEFAULT_HEIGHT) => {
  // Fixes dual-screen position
  const dualScreenLeft =
    window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  const dualScreenTop =
    window.screenTop !== undefined ? window.screenTop : window.screenY;

  const width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
    ? document.documentElement.clientWidth
    : window.screen.width;
  const height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
    ? document.documentElement.clientHeight
    : window.screen.height;

  const left = width / 2 - w / 2 + dualScreenLeft;
  const top = height / 2 - h / 2 + dualScreenTop;
  const newWindow = window.open(
    url,
    "_blank",
    `toolbar=no,location=no,menubar=no,width=${w},height=${h},top=${top},left=${left},scrollbars=no,resizable=no`
  );

  if (window.focus && newWindow) newWindow.focus();

  return newWindow;
};

export default openPopup;
