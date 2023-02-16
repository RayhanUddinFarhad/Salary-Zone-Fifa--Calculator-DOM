let count = 0;




function disabledButton(id) {
    document.getElementById(id).setAttribute("disabled", true);
}






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
    });
});



document.getElementById('btn-calculate').addEventListener('click', function () {

    const perPlayer = document.getElementById('per-player')
    const playerValue = perPlayer.value;

    const calculate = count * parseInt(playerValue);

    document.getElementById('player-expense').innerText = calculate;










});


document.getElementById('btn-calculate-total').addEventListener('click', function () {

    const playerExpense = document.getElementById('player-expense').innerText;
    const Manager = document.getElementById('Manager').value;
    const Coach = document.getElementById('Coach').value;

    const total = parseInt(playerExpense) + parseInt(Manager) + parseInt(Coach);
    document.getElementById('totalSum').innerText = total;






})