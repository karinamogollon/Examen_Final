document.getElementById("discountForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const productName = document.getElementById("productName").value;
    const category = document.getElementById("category").value;
    const unitPrice = parseFloat(document.getElementById("unitPrice").value);
    const quantity = parseInt(document.getElementById("quantity").value);
  
    const totalPrice = unitPrice * quantity;
  
    let discountPercentage = 0;
    if (category === "A") {
      if (quantity >= 1 && quantity <= 10) {
        discountPercentage = 1;
      } else if (quantity >= 11 && quantity <= 20) {
        discountPercentage = 1.5;
      } else if (quantity > 20) {
        discountPercentage = 2;
      }
    } else if (category === "B") {
      if (quantity >= 1 && quantity <= 10) {
        discountPercentage = 1.2;
      } else if (quantity >= 11 && quantity <= 20) {
        discountPercentage = 2;
      } else if (quantity > 20) {
        discountPercentage = 3;
      }
    } else if (category === "C") {
      if (quantity >= 1 && quantity <= 10) {
        discountPercentage = 0;
      } else if (quantity >= 11 && quantity <= 20) {
        discountPercentage = 0.5;
      } else if (quantity > 20) {
        discountPercentage = 1;
      }
    }
  
    const discountValue = (totalPrice * discountPercentage) / 100;
    const finalPrice = totalPrice - discountValue;
  
    const resultDiv = document.getElementById("result");
    resultDiv.className = `result ${category}`;
    resultDiv.innerHTML = `
      <p><strong>Nombre del producto:</strong> ${productName}</p>
      <p><strong>Categoría:</strong> ${category}</p>
      <p><strong>Cantidad:</strong> ${quantity} unidades</p>
      <p><strong>Precio unitario:</strong> $${unitPrice.toFixed(2)}</p>
      <p><strong>Precio total:</strong> $${totalPrice.toFixed(2)}</p>
      <p><strong>Descuento aplicado:</strong> ${discountPercentage}%</p>
      <p><strong>Valor del descuento:</strong> $${discountValue.toFixed(2)}</p>
      <p><strong>Total a pagar:</strong> $${finalPrice.toFixed(2)}</p>
    `;
  });
  