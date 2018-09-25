// Функция для смены совета в зависимости от уровня кофеина

function AdviceSwitcher(props){
if (props < 50) {
  return 'Каково это без утреннего кофе?';
} else if (props < 100) {
  return 'Чашечка бодрящего кофе.То что нужно!';
}
else if (props < 200) {
  return 'Какой крепкий кофе!Ультра бодрость!';
}
else if (props < 300) {
  return 'Около половины дневной нормы выпито!';
}
else if (props < 400) {
  return 'Еще одна чашечка не повредит.';
}
else if (props > 400) {
  return 'Дневная норма выпита.Хватит кофе на сегодня.';
} 
else {
  return 'Как...Странно...';
}
}

export default AdviceSwitcher;