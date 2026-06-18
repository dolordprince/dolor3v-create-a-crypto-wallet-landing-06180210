// script.js
// Add event listener to button
document.querySelector('#hero button').addEventListener('click', () => {
    // Add animation to button
    document.querySelector('#hero button').classList.add('animate');
    // Redirect to dashboard page
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 2000);
});