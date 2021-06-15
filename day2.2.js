// let data_object = {
//     size: 25,
//     keys: [
//         { key_name: "id", datatype: "number",min:0,  max:1000000  },
//         { key_name: "first_name", datatype: "string", length:30 },
//         { key_name: "last_name", datatype: "string", length:30 },
//         { key_name: "age", datatype: "number", min:0, max: 100 },
//         { key_name: "test_1", datatype: "string", length:30},
//         { key_name: "test_2", datatype: "number", min:0, max:100 },
//         { key_name: "test_3", datatype: "date" }
//     ]
// }

// class Data_generator {
//     size = 0
//     keys = []
//     arr = []

//     constructor(generated_data = {}) {
//         this.generated_data = generated_data
//         console.log(this.generated_data)
//         if (typeof this.generated_data === "object" && !Array.isArray(this.generated_data) && Object.keys(this.generated_data).length !== 0) {
//             this.size = this.generated_data.size
//             this.keys = this.generated_data.keys
//             return this.data_generation()
//         }
//         else {
//             return this.arr
//         }

//     }

//     characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//     getRandomInt(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
//     }
//     generateString(length) {
//         let result = ' ';
//         let random_number = length
//         const charactersLength = this.characters.length;
//         for (let i = 0; i < random_number; i++) {
//             result += this.characters.charAt(Math.floor(Math.random() * charactersLength));
//         }

//         return result;
//     }

//     // check_id() {
//     //     id = getRandomInt(0, 1000000)
//     //     if (!arr.find(current_element => current_element.id === id)) {
//     //         return id
//     //     }
//     //     check_id()
//     // }

//     data_generation() {
//         for (let i = 0; i < this.size; i++) {
//             this.arr[i] = {}
//             this.keys.forEach(a => {
//                 if (a.datatype === "string") {
//                     this.arr[i][a.key_name] = this.generateString(a.length)
//                 }
//                 else if(a.datatype === "number"){
//                     this.arr[i][a.key_name] = this.getRandomInt(a.min, a.max)
//                 }
//                 else if(a.datatype === "boolean"){
//                     this.arr[i][a.key_name] =!!this.getRandomInt(0, 2)
//                 }
//                 else{
//                     var dates = new Date()
//                     dates.setFullYear(this.getRandomInt(0, 2022))
//                     dates.setMonth(this.getRandomInt(1,13))
//                     dates.setDate(this.getRandomInt(1,32))
//                     dates.setHours(this.getRandomInt(0,24))
//                     dates.setMinutes(this.getRandomInt(0,60))   
//                     dates.setSeconds(this.getRandomInt(0,60))
//                     this.arr[i][a.key_name] = dates.toLocaleString()
//                 }
//             })
//         }
//         return this.arr
//     }
// }

// class Table_create {
//     constructor(data_array) {
//         this.div = document.createElement('div')
//         this.div.id = "content"
//         if (typeof data_array === "object" && Array.isArray(data_array) && data_array.length != 0) {
//             this.data_array = data_array
//             return this.generage_table()
//         }
//         else {
//             let text = document.createTextNode("Data is empty")
//             this.div.appendChild(text);
//             return this.div
//         }

//     }
//     generage_table() {
//         let table = document.createElement('tabel')
//         table.id = "table_names"

//         let table_row = document.createElement('tr')
//         Object.keys(this.data_array[0]).forEach(a => {
//             let table_head = document.createElement('th');
//             let text = document.createTextNode(a);
//             table_head.appendChild(text);
//             table_row.appendChild(table_head);

//         })
//         table.appendChild(table_row);

//         for (let i = 0; i < this.data_array.length; i++) {
//             let table_row = document.createElement('tr')
//             Object.keys(this.data_array[i]).forEach(a => {
//                 let table_column = document.createElement('td');
//                 let text = document.createTextNode(this.data_array[i][a]);
//                 table_column.appendChild(text);

//                 table_row.appendChild(table_column);
//             })
//             table.appendChild(table_row)

//         }
//         this.div.appendChild(table)
//         return this.div
//     }


// }
// const data_array = new Data_generator(data_object)
// const table = new Table_create(data_array)
// document.getElementsByTagName('body')[0].appendChild(table)

