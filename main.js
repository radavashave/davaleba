var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





function myFunction() {

    let x = document.getElementById("numb").value;


    if ((x === 'black')|| (x === 'blue')|| (x === 'green')|| (x === 'red')|| (x === 'white') )  {
        document.body.style.backgroundColor = x;
    } else{
        alert('arasworia')
    }
    
  }

