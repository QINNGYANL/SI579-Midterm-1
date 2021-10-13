const messageInput = document.querySelector('#problem-4 #message-input');
const messageFeedback = document.querySelector('#problem-4 #message-feedback')

const MAX_CHARACTERS = 50;
//console.log(messageFeedback.textContent);
// Write your code here
messageInput.addEventListener('input', ()=>{
    updateFeedback();
});

function updateFeedback(){
    if(messageInput.value.length <= MAX_CHARACTERS){
        messageInput.classList.add('is-valid');
        messageInput.classList.remove('is-invalid');

        messageFeedback.classList.add('valid-feedback');
        messageFeedback.classList.remove('invalid-feedback');

        const numberleft = MAX_CHARACTERS - messageInput.value.length;

        messageFeedback.textContent = numberleft + " characters left";
    }

    if(messageInput.value.length > MAX_CHARACTERS){
        messageInput.classList.add('is-invalid');
        messageInput.classList.remove('is-valid');
        
        messageFeedback.classList.add('invalid-feedback');
        messageFeedback.classList.remove('valid-feedback');

        const numberextra = messageInput.value.length - MAX_CHARACTERS;

        messageFeedback.textContent = numberextra + " characters too long";
    }
}
