const clickCountButton = document.querySelector('#problem-3 #click-count');

// write your code here
function addS(num) {
    if(num === 1) {
        return '';
    } else {
        return 's';
    }
}

clickCountButton.addEventListener('click', ()=>{
    updateNum();
});
let num = 0;
function updateNum(){
    num += 1;
    //console.log(num);
    //console.log(clickCountButton.textContent);
    const s = addS(num);
    clickCountButton.textContent = "You clicked the button " + num + " time" + s;
}