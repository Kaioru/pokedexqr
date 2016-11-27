$(function() {
  window.setInterval(function() {
    randQr();
  }, 10000);
});

function randQr() {
  var fade = 500;
  var el = $('#qrcode');

  el.fadeOut(fade, function() {
    el.text('');
    el.qrcode({
      render: 'image',
      text: randString(24)
    }).fadeIn(fade);
  });
}

function randString(x) {
  var s = "";
  while (s.length < x && x > 0) {
    var r = Math.random();
    s += (r < 0.1 ? Math.floor(r * 100) : String.fromCharCode(Math.floor(r * 26) + (r > 0.5 ? 97 : 65)));
  }
  return s;
}
