/**
 * Extrai o primeiro nome de uma string de nome completo.
 *
 * @param {string} fullName - O nome completo do usuário, separado por espaços.
 * @returns {string} - O primeiro nome extraído do nome completo.
 */
function firstName(fullName) {
  const name = fullName.trim();
  const whitespace = name.indexOf(" ");

  if (whitespace === -1) return name;

  return name.slice(0, whitespace);
}

/**
 * Verifica a disponibilidade de um produto em estoque com base no tipo e na quantidade desejada.
 *
 * @param {string} productType - O tipo do produto a ser verificado no estoque.
 * @param {number} quantity - A quantidade desejada.
 * @returns {boolean} - Retorna true se a quantidade desejada estiver disponível.
 */
function checkStockAvailability(productType, quantity) {
  const stock = {
    laptop: 10,
    smartphone: 20,
    headphone: 5,
    tablet: 15,
    book: 0,
  };

  const availableStock = stock[productType];

  if (availableStock === undefined || quantity <= 0) {
    return false;
  }

  return quantity <= availableStock;
}

/**
 * Calcula o preço total de um array de produtos.
 *
 * @param {Array} products - Array de produtos contendo price e quantity.
 * @returns {number} - O preço total dos produtos.
 */
function calculateTotalPrice(products) {
  let total = 0;

  for (let i = 0; i < products.length; i++) {
    total += products[i].price * products[i].quantity;
  }

  return total;
}

module.exports = {
  firstName,
  checkStockAvailability,
  calculateTotalPrice,
};