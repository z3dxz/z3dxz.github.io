
(function() {
    var frameCount = 72;
    var currentFrame = 1;
    var img = document.getElementById('logo_shadow');

    var frames = [];

    function pad(num, size) {
        var s = "000" + num;
        return s.substr(s.length - size);
    }
	
    for (var i = 1; i <= frameCount; i++) {
        frames[i] = new Image();
        frames[i].src = "res/logo/frames/" + pad(i, 3) + ".png";
    }

    function nextFrame() {
        currentFrame++;
        if (currentFrame > frameCount) currentFrame = 1;

        img.src = frames[currentFrame].src;
    }

    window.onload = function() {
        setInterval(nextFrame, 80);
    };
})();