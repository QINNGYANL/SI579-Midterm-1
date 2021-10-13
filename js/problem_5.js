const wordInput = document.querySelector('#problem-5 #rhyme-with-input');
const showRhymesButton = document.querySelector('#problem-5 #show-rhymes-button');
const clearButton = document.querySelector('#problem-5 #clear-rhymes-button');
const rhymesOutput = document.querySelector('#problem-5 #rhymes');

function getRhymes(rel_rhy, callback) {
    fetch(`https://api.datamuse.com/words?${(new URLSearchParams({rel_rhy})).toString()}`)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        }, (err) => {
            console.error(err);
        });
}

// Write your code here

showRhymesButton.addEventListener('click', ()=>{
    updateOutput();
});

function updateOutput(){
    
    getRhymes(wordInput.value, (result) => {
        //console.log(wordInput.value);
        //console.log(result);
        rhymesOutput.textContent = '';
        for (const key in result){
            const word = result[key];
            const wordlist = document.createElement('li');
            wordlist.setAttribute('class', "list-group-item");
            wordlist.textContent = word.word;
            rhymesOutput.append(wordlist);
        }
    });
}

clearButton.addEventListener('click', ()=>{
    clearOutput();
});

function clearOutput(){
    wordInput.value = '';
    rhymesOutput.textContent = '';
}