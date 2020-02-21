let spiderman = document.getElementById('spiderman');
let bladeRunner = document.getElementById('blade-runner');
let batman = document.getElementById('batman-begins');
let parasite = document.getElementById('parasite');
let starWars = document.getElementById('star-wars');
let movies = document.getElementsByClassName('movie');

var moviePrice = 0;
spiderman.addEventListener('click', function() {
    moviePrice = 12;
});
bladeRunner.addEventListener('click', function () {
    moviePrice = 8;
});
batman.addEventListener('click', function() {
    moviePrice = 10;
})
parasite.addEventListener('click', function () {
    moviePrice = 13;
})
starWars.addEventListener('click', function () {
    moviePrice = 9;
})

var seats = document.querySelectorAll(".seats-wrapper .seat");

for (var i = 0; i < seats.length; i++) {
    seats[i].addEventListener('click', function() {
        this.classList.toggle('selected-seat');
        updateCount();
    })
}

var receiptMovie = document.getElementById('receipt-movie');
var receiptSub = document.getElementById('receipt-sub');
var tickets = document.getElementsByClassName('receipt-ticket');
var price = document.querySelector('.receipt-price');
var total = document.getElementById('receipt-total');

var selectedSeats = 0;
var seatCount = 0;
var updateCount = function () {  
    selectedSeats = document.querySelectorAll('.selected-seat');
    seatCount = selectedSeats.length - 1;
    for (var i = 0; i < tickets.length; i++) {
        tickets[i].innerText = seatCount;
    }
    total.innerText = "$"+(seatCount * moviePrice);
} 

let movieName = '';
for (var i = 0; i < movies.length; i++) {
    movies[i].onclick = function () {
        document.querySelector(".hideable").style.display = "block";
        receiptMovie.innerText = this.innerText;
        price.innerText = moviePrice;
        var takenSeats = Math.floor(Math.random()*(seats.length/8));
        var r = 0;
        while (r < takenSeats) {
            seats[Math.floor(Math.random() * seats.length)].classList.toggle('taken-seat');
            r++;
        }        
        resetCount();
        updateCount();
    };
}

function resetCount() {
    for (var i = 0; i < seats.length; i++) {
        seats[i].classList.remove('selected-seat');
    }
    total.innerText = '';
    updateCount(); 
}

document.querySelector('#reset').onclick = resetCount;
updateCount();

