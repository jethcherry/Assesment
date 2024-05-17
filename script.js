// Project Guidelines 
// Write clean code
// Zip the assignment 
// Submit it by 4:00 P.M to my email address
// Streak App
// A streak app is an application for tracking good Habits e.g., if I stopped smoking last month on 17th it 
// should show that I have 30 days since I stopped this habit.
// • Be able to input a habit and the time you stopped doing it.
// • Be able to display all the habits you are tracking
// • How many days have passed since you stopped this habit

document.getElementById('content').addEventListener('submit', displayHabit);

function displayHabit(e) {
    e.preventDefault();

    const gbhabits = document.getElementById('name').value;
    const givenDate = document.getElementById('date').value;
    const givenList = document.getElementById('hb-list');

    const givenItem = document.createElement('li');
    const givenDays = calculateDays(givenDate);

    givenItem.textContent = `${gbhabits} - ${givenDays} day(s) have passed since you stopped the habit`;
    givenList.appendChild(givenItem);   
    document.getElementById('content').reset();
}

function calculateDays(date) {
    const getDate = new Date();
    const habitDate = new Date(date);
    const timeDiff = getDate - habitDate;
    const diffDate = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return diffDate;
}
