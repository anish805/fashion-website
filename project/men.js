     let cart = [];

    function addToCart(productName, price) {
      cart.push({ productName, price });
      updateCart();
    }

    function updateCart() {
      const cartItemsElement = document.getElementById('cartItems');
      const totalElement = document.getElementById('total');

      cartItemsElement.innerHTML = '';
      let totalPrice = 0;

      cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.textContent = `${item.productName} - $${item.price}`;
        cartItemsElement.appendChild(itemElement);
        totalPrice += item.price;
      });

      totalElement.textContent = totalPrice;
    }

