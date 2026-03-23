if (window.location.pathname.endsWith('/') === false) {
  const url = new URL(window.location)
  url.pathname += '/'
  window.history.replaceState(null, document.title, url.toString())
}
