let color = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF", "#FFFFFF"];

function cycle(index) {
    setTimeout(function() {
        console.log(index,color[index%(color.length)]);
        document.getElementById("m_logo").style.filter = "drop-shadow(2px 2px 4px " + color[index%(color.length)] + ")";



        //cycle(index); // recursively call `cycle()`

        cycle(++index % color.length);
    }, 300);
}

cycle(0);