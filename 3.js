// Шаблонний метод (Template Method) — це патерн програмування, який визначає загальну структуру алгоритму, залишаючи певні кроки реалізації підкласам.
// Клас-шаблон визначає основну логіку алгоритму, а підкласи можуть змінювати або розширювати окремі кроки.

// Клас TeaMaker відповідає за загальні дії, необхідні для приготування чаю.
class TeaMaker {
  makeTea() {
    this.boilWater();
    this.addTeaLeaves();
    this.steepTea();
    this.pourIntoCup();
    this.addCondiments();
    this.serveTea();
  }

  boilWater() {
    console.log("Кип'ятимо воду....");
  }

  addTeaLeaves() {
    console.log("Додаємо чайні листки....");
  }

  steepTea() {
    console.log("Заварюємо чай....");
  }

  pourIntoCup() {
    console.log("Переливаємо чай в чашку....");
  }

  addCondiments() {
    // Залишаємо метод пустим, може бути перевизначений у підкласах
  }

  serveTea() {
    console.log("Чай подається!");
  }
}

class GreenTeaMaker extends TeaMaker {
  addCondiments() {
    console.log("Додаємо мед, щоб приготувати зелений чай...");
  }

  prepareTea() {
    console.log("Приготування зеленого чаю:");
    this.makeTea();
  }
}

class BlackTeaMaker extends TeaMaker {
  addCondiments() {
    console.log("Додаємо мед, щоб приготувати чорний чай...");
  }

  prepareTea() {
    console.log("Приготування чорного чаю:");
    this.makeTea();
  }
}

console.log("Завдання 3 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо екземпляри класів GreenTeaMaker та BlackTeaMaker.
const greenTeaMaker = new GreenTeaMaker();
greenTeaMaker.prepareTea();

const blackTeaMaker = new BlackTeaMaker();
blackTeaMaker.prepareTea();
