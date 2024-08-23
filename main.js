

//#1
// let users={}


for(a=1;a<=10;a++){
    let username=prompt(`Введите имя пользователя ${a}:`);
    let age=+prompt(`Введите возраст пользователя ${a}:`);
    users[a] = {
        username: username,
        age: age
    };
    console.log(`Пользователь - ${a}`);
    console.log(`Имя - ${users[a].name}`);
    console.log(`Возраст - ${users[a].age}`);
}
console.log(users); 
//#1
let korzina = receipt()

let inform = 'Вы заказали'
let delivery = 9000

const korzinaArray = Object.entries(korzina).map(([key, value]) => ({ 
  name: key, 
  info: value.info, 
  price: value.price 
}))

korzinaArray.forEach(item => {
  inform = `${inform} ${item.name} ${item.info},`
  delivery += item.price
})

console.log(`${inform} | Общая стоимость ${delivery}сумм с доставкой (9000)`);
