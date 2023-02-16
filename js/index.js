let count = 0;



const buttons = document.querySelectorAll('.btn-primary');

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        this.disabled = true;

        count = count + 1;

        const players = e.target.parentNode.parentNode;

        const playerName = players.querySelector('.card-title').innerText;

        const container = document.createElement('div');

        container.innerHTML = `<p>${count} <span>${playerName}</span></p>`;

        const nameContainer = document.getElementById('name-container');

        nameContainer.appendChild(container);
        document.getElementById ('btn-calculate').removeAttribute ('disabled');
    });
});



document.getElementById('btn-calculate').addEventListener('click', function () {

    const perPlayer = document.getElementById('per-player')
    const playerValue = perPlayer.value;

   




    



    const calculate = count * parseInt(playerValue);

    setText('player-expense', calculate);
    document.getElementById ('btn-calculate-total').removeAttribute ('disabled');


   









});


document.getElementById('btn-calculate-total').addEventListener('click', function () {

    const playerExpense = getText('player-expense');
    const Manager = getInput('Manager');
    const Coach = getInput('Coach');

    if (isNaN (playerExpense) || isNaN (Manager) || isNaN (Coach)) { 

        alert ('Please enter a number');
    }

   else {

    const total = parseInt(playerExpense) + parseInt(Manager) + parseInt(Coach);
    setText('totalSum', total);
   }






})