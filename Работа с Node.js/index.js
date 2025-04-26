
alert("Здравствуйте! Меня зовут Гондурова Полина.");
function handleDeclaration() {
    showResult("Function Declaration");
}
const handleExpression = function() {
    showResult("Function Expression");
};
const handleArrow = () => {
    showResult("Стрелочная функция");
};
function showResult(type) {
    alert(`${type}: Кнопка работает исправно!!!`);
}
