// Адаптер (Adapter) — це патерн програмування, який дозволяє об'єктам з інтерфейсом несумісним з іншими об'єктами працювати разом,
// перетворюючи інтерфейс одного об'єкта на інтерфейс, очікуваний іншим об'єктом.

// Клас BankTransfer представляє собою систему для здійснення банківських переказів
class BankTransfer {
  initiateTransfer(amount) {
    const calculatedAmount = this.calculateFee(amount); // Обчислюємо суму переказу з урахуванням комісії
    console.log(`Ініціюємо банківський переказ: $${calculatedAmount}`);
  }

  calculateFee(amount) {
    return amount * 1.02; // Розрахунок комісії за переказ (2% від суми переказу)
  }
}

class WalletTransfer {
  processTransfer(amount) {
    console.log(`Здійснюємо переказ з гаманця: $${amount}`);
  }
}

class TransferAdapter {
  constructor(transferSystem) {
    this.transferSystem = transferSystem; // Зберігаємо посилання на об'єкт WalletTransfer
  }

  initiateTransfer(amount) {
    const calculatedAmount = this.calculateFee(amount); // Обчислюємо суму переказу з урахуванням комісії
    this.transferSystem.processTransfer(calculatedAmount); // Викликаємо метод processTransfer об'єкту WalletTransfer з обчисленою сумою
  }

  calculateFee(amount) {
    return amount * 1.2; // Розрахунок комісії за переказ (1.2 від суми переказу)
  }
}

console.log("Завдання 5 ====================================");
// Після виконання розкоментуйте код нижче

// Створимо екземпляри BankTransfer
const purchase1 = new BankTransfer();
purchase1.initiateTransfer(1000);

const purchase2 = new BankTransfer();
purchase2.initiateTransfer(10);
