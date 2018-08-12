var leftBorderWidth = 1; //уже существует
let second = 2; //в блоке куда используется
const pi = 3.14; //неизменна

var answerOne = prompt('Ваш бюджет на месяц?');
var answerTwo = prompt('Название вашего магазина?');
var productOne = prompt('Какой тип товаров будем продавать?');
var productTwo = prompt('Какой тип товаров будем продавать?');
var productFree = prompt('Какой тип товаров будем продавать?');
var newWin = window.open("about:blank", "hello", "width=200,height=200");
var newWin = window.open("about:blank", "hello", "width=200,height=200");

var amount = answerOne;
var shopName = answerTwo;

let mainList = {
	amount: answerOne,
	shopName: answerTwo,

	shopGoods: [productOne, productTwo, productFree],

	employers: {},

	
};

console.log(mainList);
console.log(parseInt(answerOne)/30);