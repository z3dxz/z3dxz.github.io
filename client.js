function hslToRgb(h, s, l) {
    let r;
    let g;
    let b;

    if (s === 0) {
        r = g = b = l; // Achromatic
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

let hue = 0;

function cycle() {
    setTimeout(function() {
        const [r, g, b] = hslToRgb(hue, 1, 0.5); // full saturation and lightness of 50%
        document.getElementById("m_logo").style.filter = "drop-shadow(0px 0px 8px rgba(" + r + ", " + g + ", " + b + ", 0.5))";
        hue += 0.01; // Increment hue
        if (hue >= 1) hue = 0; // Loop back to 0

        cycle(); // Recursively call `cycle()`
    }, 30);
}

cycle();