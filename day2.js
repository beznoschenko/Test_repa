// // function change_color(color, button){
// //     button.style.color=color;
// //     console.log("Yep")
// // }
// // let arr=[{name: "Entony", color: "red"},{name: "April", color: "black"},{name: "Petr", color: "blue"},{name: "James", color: "white"},{name: "John", color: "brown"}]
// // let arr2=arr.map(elem => {let butt=document.createElement('button'); butt.innerHTML =elem.name; butt.data_button = elem; return butt})

// // arr2.forEach(a => {document.getElementsByTagName('body')[0].appendChild(a).onclick=()=>change_color(a.data_button.color,a)})


// const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
//   }
// function generateString() {
//     let result = ' ';
//     let random_number = getRandomInt(3,20)
//     const charactersLength = characters.length;
//     for ( let i = 0; i < random_number; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }

//     return result;
// }

// function check_id(){
//     id = getRandomInt(0,1000000)
//     if (!arr.find(current_element => current_element.id ===id)){
//         return id
//     }
//     check_id()
// }

// // console.log(generateString());
// let arr=[]
// for (let i=0; i<15; i++){
//     id = getRandomInt(0,1000000)

//     arr[i] = {first_name: generateString(), 
//         last_name : generateString(),
//         age: getRandomInt(0,100),
//         id: check_id()}


// }
// let unordered_list = document.createElement('ul')
// document.getElementsByTagName('body')[0].appendChild(unordered_list)
// for (let i=0; i<15; i++){
//     let items= document.createElement('li')
//     items.innerHTML=`${arr[i].id} ${arr[i].first_name} ${arr[i].last_name} ${arr[i].age}`
//     document.getElementsByTagName('ul')[0].appendChild(items)
// }