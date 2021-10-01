const btnsobe = document.getElementById("sobe");
const btndescer = document.getElementById("descer");
const span = document.getElementById("zero");

let zero = 0;
span.innerHTML = zero;

btnsobe.addEventListener('click', function() {
    span.innerHTML = ++zero;
});


btndescer.addEventListener('click', function() {
    span.innerHTML = --zero;
});