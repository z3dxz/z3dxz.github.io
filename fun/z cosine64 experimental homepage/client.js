
(function() {
    var frameCount = 72;
    var currentFrame = 1;
    var img = document.getElementById('logo_shadow');

    function pad(num, size) {
      var s = "000" + num;
      return s.substr(s.length - size);
    }

    function nextFrame() {
      currentFrame++;
      if (currentFrame > frameCount) currentFrame = 1;

      img.src = "res/logo/frames/" + pad(currentFrame, 3) + ".png";
    }

    // Change frames every 80 milliseconds (~12.5 FPS)
    setInterval(nextFrame, 80);
  })();