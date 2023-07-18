// Ітератор (Iterator) — це патерн програмування, який надає спосіб послідовного доступу до елементів колекції без розкриття його внутрішньої структури.

// Клас Employee відповідає за створення об'єктів працівників. Кожен працівник має своє ім'я, посаду та зарплату.
class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

class EmployeeGroup {
  constructor() {
    this.employees = []; // Створюємо порожній масив для зберігання працівників
  }

  addEmployee(employee) {
    this.employees.push(employee); // Додаємо працівника до масиву
  }
}

class EmployeeIterator {
  constructor(employeeGroup) {
    this.employees = employeeGroup.employees; // Зберігаємо масив працівників
    this.currentIndex = 0; // Початковий індекс
  }

  hasNext() {
    return this.currentIndex < this.employees.length; // Перевіряємо, чи є наступний елемент
  }

  next() {
    if (this.hasNext()) {
      const employee = this.employees[this.currentIndex]; // Отримуємо наступного працівника
      this.currentIndex++; // Збільшуємо індекс
      return employee;
    }
    return null; // Якщо немає наступного елементу
  }

  list() {
    for (const employee of this.employees) {
      console.log(employee.name); // Виводимо ім'я працівника
    }
  }
}

console.log("Завдання 7 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо нову групу працівників.
const employeeGroup = new EmployeeGroup();

// Додаємо нових працівників до групи, використовуючи метод addEmployee.
employeeGroup.addEmployee(new Employee("John Doe", "Manager", 5000));
employeeGroup.addEmployee(new Employee("Jane Smith", "Developer", 4000));

// Створюємо новий ітератор для групи працівників.
const employeeIterator = new EmployeeIterator(employeeGroup);

// Виводимо імена всіх працівників в групі, використовуючи метод list.
employeeIterator.list();
