document.addEventListener("DOMContentLoaded", function(e){

    const counter = document.getElementById("counter")
    const plusButton = document.getElementById("plus")
    const minusButton = document.getElementById("minus")

    let interv = window.setInterval(incrementCounter,  1000)

    function incrementCounter(){
        counter.innerText = parseInt(counter.innerText) + 1
    }

    plusButton.addEventListener("click", incrementCounter)

    function decrementCounter(){
        counter.innerText = parseInt(counter.innerText) - 1
    }

    minusButton.addEventListener("click", decrementCounter)

    



})

// ask about window later **