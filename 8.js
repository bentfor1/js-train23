// Медіатор (Mediator) — це патерн програмування, який визначає об'єкт, який інкапсулює взаємодію між групою об'єктів. Медіатор сприяє слабкій залежності між цими об'єктами,
// дозволяючи спілкуватися з ними через централізовану точку.

// Клас User відповідає за користувача, який може відправляти повідомлення.
class User {
  constructor(name, messenger) {
    this.name = name;
    this.messenger = messenger;
  }

  sendMessage(message) {
    console.log(`${this.name} відправив повідомлення ${message}`);
    this.messenger.sendMessage(message);
  }

  receiveMessage(user, message) {
    console.log(
      `${this.name} отримав повідомлення від ${user.name}: ${message}`
    );
  }
}

class SMSMessenger {
  static sendMessage(message) {
    console.log(`Відправлено SMS: ${message}`);
  }
}

class EmailMessenger {
  static sendMessage(message) {
    console.log(`Відправлено Email: ${message}`);
  }
}

console.log("Завдання 7 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо двох користувачів - John та Jane - які відправляють повідомлення за допомогою різних месенджерів.
const john = new User("John", SMSMessenger);
const jane = new User("Jane", EmailMessenger);

// John відправляє повідомлення за допомогою SMS.
john.sendMessage("Привіт!"); // Виведе: Відправлено SMS: [John]: Привіт!

// Jane відправляє повідомлення за допомогою Email.
jane.sendMessage("Привіт!"); // Виведе: Відправлено Email: [Jane]: Привіт!
