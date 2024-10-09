// Gestion du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Merci pour votre message, ' + name + '. Nous vous répondrons sous peu.');
        // Vous pouvez ajouter une logique pour envoyer ce message à un serveur via AJAX ou API
        document.getElementById('contact-form').reset(); // Réinitialiser le formulaire
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});

// Proposer un match
let matchButtons = document.querySelectorAll('.match-btn');

matchButtons.forEach(button => {
    button.addEventListener('click', function() {
        let clubName = this.parentElement.querySelector('h3').textContent;
        alert('Match proposé avec ' + clubName + '.');
    });
});
