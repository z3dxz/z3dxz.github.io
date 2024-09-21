

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  
 document.getElementById("from_t").value = 5;
document.getElementById("to_t").value = 10;

function gen(button) {
    const From = document.getElementById("from_t").value;
    const To = document.getElementById("to_t").value;
    const randomm = randomIntFromInterval(Number(From),Number(To));
    document.getElementById("output_t").innerHTML = randomm;
}