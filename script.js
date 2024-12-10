let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Atualiza a contagem de itens no carrinho
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

// Adiciona um produto ao carrinho
function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Configura os botões "Adicionar ao carrinho"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.parentElement;
        const product = {
            name: productCard.querySelector('h3').textContent,
            price: parseFloat(productCard.querySelector('p').textContent.replace('R$ ', '').replace(',', '.')),
            quantity: 1,
            image: productCard.querySelector('img').src,
        };
        addToCart(product);
    });
});

// Atualiza a contagem ao carregar a página
updateCartCount();


// script.js
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('search');
    const searchButton = document.getElementById('search-btn');
    const productCards = document.querySelectorAll('.product-card');

    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.toLowerCase();

        productCards.forEach(card => {
            const productName = card.querySelector('h3').textContent.toLowerCase();
            if (productName.includes(searchTerm)) {
                card.style.display = ''; // Mostra o produto
            } else {
                card.style.display = 'none'; // Esconde o produto
            }
        });
    });

    // Adiciona funcionalidade de pressionar "Enter" para buscar
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });
});
