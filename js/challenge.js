document.addEventListener("DOMContentLoaded", function(e){

	const counter = document.getElementById("counter")
	const plusButton = document.getElementById("plus")
	const minusButton = document.getElementById("minus")
	const heartButton = document.getElementById("heart")
	const pauseButton = document.getElementById("pause")
	const likeList = document.querySelector(".likes")
	const submitButton = document.getElementById("submit")
	const commentInput = document.getElementById("comment-input")
	const commentList = document.getElementById("list")

	let likeCounter = {}
	let interv = startCounter();

	function stopCounter(){
		clearInterval(interv);
		pauseButton.innerText = "resume";
		minusButton.disabled = true;
		plusButton.disabled = true;
		heartButton.disabled = true;
		submitButton.disabled = true;
	}

	function startCounter(){
		pauseButton.innerText = "pause";
		minusButton.disabled = false;
		plusButton.disabled = false;
		heartButton.disabled = false;
		submitButton.disabled = false;
		return window.setInterval(incrementCounter,  1000)
	}

	function toggleCounter(){
		if(pauseButton.innerText === "pause"){
			stopCounter();
		}
		else{
			interv = startCounter();
		}
	}

	pauseButton.addEventListener("click", toggleCounter);

	function incrementCounter(){
		counter.innerText = parseInt(counter.innerText) + 1
	}

	plusButton.addEventListener("click", incrementCounter)

	function decrementCounter(){
		counter.innerText = parseInt(counter.innerText) - 1
	}

	minusButton.addEventListener("click", decrementCounter)

	function getCounterValue() {
		return counter.innerText
	}

	function incrementLikeCounter(number){
		if(likeCounter[number]){
			likeCounter[number] += 1;
			const numberLi = document.getElementById(number);
			numberLi.textContent = `${number} has been liked ${likeCounter[number]} times.`;
		}
		else{
			likeCounter[number] = 1;
			const numberLi = document.createElement("li");
			numberLi.id = number;
			numberLi.textContent = `${number} has been liked ${likeCounter[number]} time.`;
			likeList.append(numberLi);
		}
	}

	function likeNumber() {
		const number = getCounterValue();

		incrementLikeCounter(number);
	}

	heartButton.addEventListener("click", likeNumber)

	submitButton.addEventListener("click", function(e) {
		e.preventDefault();
		const p = document.createElement("p")
		p.innerHTML = `<p></p>\n${commentInput.value}`

		commentList.append(p);
		commentInput.value = "";
	})

})

// ask about window later **
