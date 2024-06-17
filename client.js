let color = ["255,1,1", "1,255,1", "1,1,255", "255,255,1", "1,255,255", "255,1,255", "255,255,255"];

function cycle(index) {
    setTimeout(function() {
        console.log(index,color[index%(color.length)]);
        document.getElementById("m_logo").style.filter = "drop-shadow(0px 0px 12px rgba(" + color[index%(color.length)] + ", 0.5))";



        //cycle(index); // recursively call `cycle()`

        cycle(++index % color.length);
    }, 300);
}

cycle(0);