document.getElementById('timestamp').value = new Date().toISOString();

onclick = "document.getElementById('bronze-modal').showModal(); return false;"


configModals();


function configModals() {
    const cards = document.querySelectorAll('.membership-cards .card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const membershipType = card.id;
            const modal = document.getElementById(`${membershipType}-modal`);
            modal.showModal();

            const closeModal = modal.querySelector('.closeModal');
            closeModal.addEventListener("click", () => {
                modal.close();
            });
        });
    });
}

