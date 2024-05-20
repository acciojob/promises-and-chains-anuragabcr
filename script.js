//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('myForm');

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        const ageInput = document.getElementById('age').value;
        const nameInput = document.getElementById('name').value;

        if (!ageInput || !nameInput) {
            alert("Please fill in all fields.");
            return;
        }

        const age = parseInt(ageInput);

        if (age >= 18) {
            const promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve();
                }, 4000);
            });

            promise.then(() => {
                alert(`Welcome, ${nameInput}. You can vote.`);
            });
        } else {
            alert(`Oh sorry ${nameInput}. You aren't old enough.`);
        }
    });
});
