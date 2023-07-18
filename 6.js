// Стратегія (Strategy) — це патерн програмування, який дозволяє визначати різні алгоритми та забезпечує можливість обміну їх під час виконання програми.

// Клас Basket представляє кошик для покупок з певною стратегією знижки
class Basket {
  constructor(discountPlan) {
    this.discountPlan = discountPlan; // Зберігаємо стратегію знижки
    this.goods = []; // Створюємо пустий масив для зберігання товарів в кошику
  }

  addGood(good) {
    this.goods.push(good); // Додаємо товар в масив товарів
  }

  calculateTotalPrice() {
    const totalPrice = this.goods.reduce((sum, good) => sum + good.price, 0); // Розраховуємо загальну вартість товарів
    return this.discountPlan.applyDiscount(totalPrice); // Застосовуємо знижку до загальної вартості
  }
}

class RegularDiscountPlan {
  applyDiscount(price) {
    return price * 0.9; // Знижка в 10%
  }
}

class VIPDiscountPlan {
  applyDiscount(price) {
    return price * 0.8; // Знижка в 20%
  }
}

class NewClientDiscountPlan {
  applyDiscount(price) {
    return price * 0.95; // Знижка в 5%
  }
}

console.log("Завдання 6 ====================================");
// Після виконання розкоментуйте код нижче

// Створення нового екземпляру кошика зі стратегією знижки для нових клієнтів
const basket1 = new Basket(new NewClientDiscountPlan());

// Додавання товарів до кошика
basket1.addGood({ name: "Product 1", price: 100 });
basket1.addGood({ name: "Product 2", price: 50 });

// Розрахунок і виведення загальної вартості товарів з урахуванням знижки
console.log(basket1.calculateTotalPrice());
