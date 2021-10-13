// Helps us pluralize word formatting by returning if we should
// add an 's' for a given quantity.
//
// For example, we should say '1 car' but '5 cars'
function addS(num) {
    if(num === 1) {
        return '';
    } else {
        return 's';
    }
}

const thingInput = document.querySelector('#problem-2 #thing-num-input');
const thingCountOutput = document.querySelector('#problem-2 #thing-count');

// Write your code here
//thingCountOutput.textContent = "(TODO)";

thingInput.addEventListener('change', ()=>{
    updateNumber();
});

function updateNumber(){
    //console.log(thingInput.value);
    const intergerinput = parseInt(thingInput.value);
    //console.log(intergerinput);
    const s = addS(intergerinput);
    thingCountOutput.textContent = "You added " + intergerinput + " thing" + s;
}