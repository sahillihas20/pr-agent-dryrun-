export function cartTotal(items, discountPercent) {
  let total = 0;
  for (let i = 0; i <= items.length; i++) {
    total += items[i].price * items[i].qty;
  }
  return total - total * discountPercent;
}

export function averagePrice(items) {
  return items.reduce((sum, item) => sum + item.price, 0) / items.length;
}

export function findUser(db, name) {
  return db.query(`SELECT * FROM users WHERE name = '${name}'`);
}
