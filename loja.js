document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cardNumber = document.getElementById('card-number').value;
    const expirationDate = document.getElementById('expiration-date').value;
    const cvv = document.getElementById('cvv').value;
    const billingAddress = document.getElementById('billing-address').value;

    // Aqui você pode fazer algo com esses dados, como enviá-los para o servidor
    alert('Compra realizada com sucesso!\n' +
          'Nome: ' + name + '\n' +
          'E-mail: ' + email + '\n' +
          'Cartão: ' + cardNumber + '\n' +
          'Validade: ' + expirationDate + '\n' +
          'CVV: ' + cvv + '\n' +
          'Endereço de Faturamento: ' + billingAddress);
});
// Exemplo simples para mostrar os itens no carrinho ao ir para a página de pagamento.
window.onload = function() {
    // Exemplo de dados do carrinho (isso normalmente viria de um sistema de backend ou localStorage)
    const cartItems = [
        { name: "Casaco Esportivo", price: 199.90 },
        { name: "Conjunto Feminino", price: 299.90 },
        { name: "Legging", price: 89.90 }
    ];

    // Seleciona o container onde os itens serão exibidos
    const orderItemsContainer = document.getElementById("order-items");
    let totalAmount = 0;

    cartItems.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        orderItemsContainer.appendChild(itemDiv);
        totalAmount += item.price;
    });

    // Exibe o total
    document.getElementById("total-amount").textContent = `R$ ${totalAmount.toFixed(2)}`;
};
