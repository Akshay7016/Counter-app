const counterValue = document.querySelector("#counter");

const decrement = () => {
    let value = parseInt(counterValue.innerHTML);
    value = value - 1;
    counterValue.innerHTML = value;
}


const increment = () => {
    let value = parseInt(counterValue.innerHTML);
    value = value + 1;
    counterValue.innerHTML = value;
}