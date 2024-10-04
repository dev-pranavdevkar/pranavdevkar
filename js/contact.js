document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const contactList = document.getElementById('contactList');

    // Load contacts from local storage on page load
    loadContacts();

    // Handle contact form submission
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const number = document.getElementById('contactNumber').value;
        const message = document.getElementById('contactMessage').value;

        const newContact = {
            id: Date.now(),
            name,
            email,
            number,
            message
        };

        const contacts = getContacts();
        contacts.push(newContact);
        saveContacts(contacts);

        // Refresh the contact list
        loadContacts();

        // Clear the form
        contactForm.reset();
    });

    // Load contacts from local storage
    function loadContacts() {
        const contacts = getContacts();
        contactList.innerHTML = '';
        contacts.forEach(contact => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.innerHTML = `
                <div>
                    <h5>${contact.name}</h5>
                    <p>Email: ${contact.email}</p>
                    <p>Number: ${contact.number}</p>
                    <p>Message: ${contact.message}</p>
                </div>
                <button class="btn btn-danger btn-sm" onclick="deleteContact(${contact.id})">Delete</button>
            `;
            contactList.appendChild(li);
        });
    }

    // Get contacts from local storage
    function getContacts() {
        return JSON.parse(localStorage.getItem('contacts')) || [];
    }

    // Save contacts to local storage
    function saveContacts(contacts) {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }

    // Delete contact by ID
    window.deleteContact = function(id) {
        const contacts = getContacts();
        const updatedContacts = contacts.filter(contact => contact.id !== id);
        saveContacts(updatedContacts);
        loadContacts(); // Refresh the contact list
    };
});
