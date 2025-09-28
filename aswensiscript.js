function searchUpdates() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.getElementsByClassName('card');
    
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        let category = cards[i].getAttribute('data-category').toLowerCase();
        if (title.includes(input) || category.includes(input)) {
            cards[i].style.display = '';
        } else {
            cards[i].style.display = 'none';
        }
    }
}
