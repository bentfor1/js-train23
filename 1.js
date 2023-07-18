// Композит (Composite) — це патерн програмування, який дозволяє створювати структуру об'єктів у вигляді дерева, де кожен об'єкт може бути окремим елементом або групою об'єктів.
// Ця структура називається "деревоподібною" через ієрархію "один-багато".

// Клас ContentContainer використовується для управління списком вкладених елементів контенту
class ContentContainer {
  constructor() {
    this.elements = []; // Створюємо властивість elements для зберігання вкладених елементів контенту. Початкове значення - порожній масив.
  }

  addElement(element) {
    this.elements.push(element); // Створюємо addElement, який отримує element як параметр та додає його в масив elements.
  }

  removeElement(element) {
    const index = this.elements.indexOf(element); // Знаходимо індекс елемента у масиві
    if (index !== -1) {
      this.elements.splice(index, 1); // Видаляємо елемент з масиву, якщо знайдено
    }
  }
}

class Message extends ContentContainer {
  constructor(content) {
    super();
    this.content = content; // Створюємо конструктор класу, який приймає content як параметр та ініціалізує його
  }

  display() {
    this.elements.forEach((element) => {
      console.log(element); // Виводимо ${this.content} для всіх елементів масиву
    });
  }
}

class Article extends ContentContainer {
  constructor(title) {
    super();
    this.title = title; // Створюємо конструктор класу, який приймає title назву статті як параметр та ініціалізує об'єкт з нею
  }

  display() {
    console.log(`Стаття: ${this.title}`);
    this.elements.forEach((element) => {
      console.log(element); // Виводимо Стаття: ${this.title} для всіх елементів масиву
    });
  }
}

console.log("Завдання 1 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо об'єкт Article з назвою "Навчальна стаття"
const article = new Article("Навчальна стаття");

// Додаємо повідомлення до статті
article.addElement(new Message("Дуже корисна стаття"));
article.addElement(new Message("Дякую за чудовий матеріал!"));

// Додаємо вкладене повідомлення до першого повідомлення в статті
article.elements[0].addElement(new Message("Відповідь: Згоден!"));

// Виводимо інформацію про статтю та всі її вкладені елементи
article.display();

// Виводимо масив вкладених елементів статті
console.log(article.elements);
