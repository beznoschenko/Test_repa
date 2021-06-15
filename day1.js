// function start(description, result){
//     document.write(description+":")
//     document.write(result)
//     document.write("<br />")
// }

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
//   }

// // let arr=[]
// // for (let i=0;i<10;i++){
// //     arr[i]=getRandomInt(20,50);
// // }
// // start("Создание рандомного массива",arr);

// // for (let i=1; i<=10; i++){
// //     arr[i]=arr[i]/arr[i-1]
// // }
// // start("деление єлемента на предідущий",arr)


// // let arr1 = ['a', 'b', 'c']
// // let arr2 = [1, 2, 3]
// // // arr1.push(...arr2)
// // arr3=arr1.concat(arr2)
// // start("1. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедини их вместе",arr3)

// // arr1.push(1,2,3)
// // start("2. Дан массив ['a', 'b', 'c']. Добавь ему в конец элементы 1, 2, 3.",arr1)

// // let arr6=[1, 2, 3]
// // arr6.push(4,5,6)
// // start("3. Дан массив [1, 2, 3]. Добавь ему в начало элементы 4, 5, 6.",arr6 )

// // let arr7=[1,2,3]
// // arr7.unshift(4,5,6)
// // start("4. Дан массив [1, 2, 3]. Добавь ему в начало элементы 4, 5, 6.", arr7)

// // let arr5=['js', 'css', 'jq']
// // start("5. Дан массив ['js', 'css', 'jq']. Выведи на экран первый элемент.", arr5.shift())
// // start("6. Дан массив ['js', 'css', 'jq']. Выведи на экран последний элемент.", arr5.pop())

// // let arr4=[3, 4, 1, 2, 7, 22, 44, 12, 14]
// // function compareNumbers(a, b) {
// //     return a - b;
// //   }
// // arr4.sort(compareNumbers)
// // start("7. Дан массив [3, 4, 1, 2, 7]. Отсортируй его.",arr4 )


// // дан массив из 10 ранд чисел
// // просумировать все числа массива (2 варианта)
// // const reducer = (accumulator, currentValue) => accumulator + currentValue;
// // let sum=0
// // for (let i=0;i<10;i++){
// //     sum+=arr[i]
// // }
// // start("Сумма чисел массива(Вариант 1)", sum)
// // let sum1=0
// // sum1 = arr.reduce(reducer,0)
// // start("Сумма чисел массива(Вариант 2)", sum1)

// // let stroka = "Disturbed"
// // let arr2 = stroka.toLowerCase().split("").map((arr)=>arr="concat-"+arr)
// // // let arr3 = arr2.map((arr)=>arr="concat-"+arr)
// // start("строку в массив -> сотртировка->конкат",arr2.sort())


// // let summ=0

// // let arr3 = "1234567890".split("").map((a)=>+a).reduce(reducer,0)
// // // for (let i=0;i<10;i++){
// // //     summ+=arr3[i]
// // // }
// // start("Строка в массив", arr3)
// // // start("сумма строки", summ)

// // let obj = {name : "valya", age: {year: 1997, date: 12}}
// // obj.last_name="Beznoshchenko"
// // obj.hair.vghj=1

// // let obj = {price : getRandomInt(10,50),
// //     caption: "Microphone",
// //     kol: getRandomInt(10,50),
// //     buyer: {name: "Andrey",
// //             kol: getRandomInt(10,50)}}
// // let obj2 = {price : getRandomInt(10,50),
// //     caption: "Phone",
// //     kol: getRandomInt(10,50),
// //     buyer: {name: "Sergey",
// //         kol: getRandomInt(10,50)}}
// // let obj3 = {price : getRandomInt(10,50),
// //     caption: "Ring",
// //     kol: getRandomInt(10,50),
// //     buyer: {name: "Alina",
// //         kol: getRandomInt(10,50)}}
// // let arr = [obj, obj2, obj3]
// // // for (let i=0; i<3; i++){
// // //     arr[i].buyer.costs = arr[i].price*arr[i].buyer.kol
// // // }
// // arr.forEach(elem =>elem.buyer.costs = elem.price*elem.buyer.kol)
// arr1=arr.map(elem => {elem.buyer = `${elem.buyer.name}/${+elem.buyer.kol}/${elem.buyer.costs}`; return {...elem, description: `${elem.caption}/${elem.kol}/${elem.kol*elem.price}`}})


// // let summ = {kol: 0,
// //     costs: 0,
// //     profit: 0}
// // let kol = arr.reduce((t, current) => {t.kol += current.kol; t.costs +=current.kol*current.price; t.profit +=current.kol*current.price; return t},  summ)

// // // summ.costs = arr.reduce((t, current) => t+current.buyer.costs,0 )
// // // summ.profit = arr.reduce((t, current) => t+current.buyer.costs,0 )

// // start("Array", arr)

// // function Fibonachi(n){
// //     if (n<=0){
// //         return 1
// //     }
// //     return Fibonachi(n-1)+Fibonachi(n-2)

// // }

// // // Fibonachii(10)

// // function Fibonachii(n,fn_1=1,fn_2=1){
// //         if (n<=0){
// //             return 
// //         }
// //        f=fn_1+fn_2
// //        fn_1=fn_2
// //        fn_2=f
// //        n--
// //        console.log(fn_2)
// //        Fibonachii(n, fn_1, fn_2)

// //     }

// // let a = 25

// // let res = a >= 18 ? 'Совершеннолетняя' : 'Бутылка'


// // let tarr = [{a :1, b: 2}, {a:2, b:3}, {a:0, b:5}]

