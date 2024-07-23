const inputText = document.getElementById('inputText');
const sendBtn = document.getElementById('sendBtn');
const actionModal = document.getElementById('action-modal');
const modalTitle = document.getElementById('modalTitle');
const messageModal = document.getElementById('message');

sendBtn.onclick = function () {

    // Check if input text isn't null
    if (inputText.value != '' && inputText.value != '0') {
        let guess = Number(inputText.value);
        let max = 100;
        let random = Math.floor(Math.random() * max) + 1;

        let message = random === guess ?
            `${random} is correct.` : `${guess} is wrong, ${random} is the correct number.`;

        let title = random === guess ? 'You Win' : 'You Lose';

        modalTitle.textContent = title;
        messageModal.textContent = message;
        actionModal.showModal();

    } else {
        modalTitle.textContent = 'Invalid Input!';
        messageModal.textContent = 'Please enter a number from 1-100 only.';
        actionModal.showModal();
    }

    inputText.value = ''; // Reset the value of textfield
}


