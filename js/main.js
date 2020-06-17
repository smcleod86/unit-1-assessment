/* ------------------- Variables -------------------  */
let ans = document.getElementById('messageBox')
let num = document.getElementById('number')
let add = document.getElementById('plus')
let sub = document.getElementById('minus')
let count = 0

/* ------------------- Functions -------------------  */

const adding = () => {
    let amountToAdd = parseInt(num.value)
    count += amountToAdd
    updateDisplay()
}

const subtract = () => {
    let amountToSub = parseInt(num.value)
    count -= amountToSub
    updateDisplay()
}

const updateDisplay = () => {
    ans.innerText = count
    if (count < 0) {
        ans.style.color = "red"
    }
    else {
        ans.style.color = "black"
    }
}

/* ------------------- Event Handlers -------------------  */

add.addEventListener('click', () => {
    adding()
})

sub.addEventListener('click', () => {
    subtract()
})