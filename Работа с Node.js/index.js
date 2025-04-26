// 1. Внешний скрипт с alert
alert("Здравствуйте! Меня зовут Гондурова Полина.");

// 2. Три способа объявления функций

// Function Declaration
function handleDeclaration() {
    showResult("Function Declaration");
}

// Function Expression
const handleExpression = function() {
    showResult("Function Expression");
};

// Стрелочная функция
const handleArrow = () => {
    showResult("Стрелочная функция");
};

// Общая функция для вывода результата
function showResult(type) {
    alert(`${type}: Кнопка работает исправно!!!`);
}