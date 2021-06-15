let global_data = {}
let data_object1 = {
    size: 25,
    keys: [
        { key_name: "id", datatype: "number", min: 0, max: 1000000 },
        { key_name: "first_name", datatype: "string", length: 30 },
        { key_name: "last_name", datatype: "string", length: 30 },
        { key_name: "age", datatype: "number", min: 0, max: 100 },
        { key_name: "test_1", datatype: "string", length: 30 },
        { key_name: "test_2", datatype: "number", min: 0, max: 100 },
        { key_name: "test_3", datatype: "date" }
    ]
}

let data_object2 = {
    size: 25,
    keys: [
        { key_name: "id", datatype: "number", min: 0, max: 1000000 },
        { key_name: "first_name", datatype: "string", length: 30 },
        { key_name: "last_name", datatype: "string", length: 30 },
        { key_name: "age", datatype: "number", min: 0, max: 100 },
        { key_name: "test_1", datatype: "string", length: 30 },
        { key_name: "test_2", datatype: "number", type: "phone" },
        { key_name: "test_3", datatype: "date" }
    ]
}


class Data_generator {
    size = 0
    keys = []
    arr = []

    constructor(generated_data = {}) {
        this.generated_data = generated_data
        if (typeof this.generated_data === "object" && !Array.isArray(this.generated_data) && Object.keys(this.generated_data).length !== 0) {
            this.size = this.generated_data.size
            this.keys = this.generated_data.keys
            return this.data_generation()
        }
        else {
            return this.arr
        }

    }

    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    }
    generateString(length) {
        let result = ' ';
        let random_number = length
        const charactersLength = this.characters.length;
        for (let i = 0; i < random_number; i++) {
            result += this.characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }

    // check_id() {
    //     id = getRandomInt(0, 1000000)
    //     if (!arr.find(current_element => current_element.id === id)) {
    //         return id
    //     }
    //     check_id()
    // }

    data_generation() {
        for (let i = 0; i < this.size; i++) {
            this.arr[i] = {}
            this.keys.forEach(a => {
                if (a.datatype === "string") {
                    this.arr[i][a.key_name] = this.generateString(a.length)
                }
                else if (a.datatype === "number" && !a.type) {
                    this.arr[i][a.key_name] = this.getRandomInt(a.min, a.max)
                }
                else if (a.datatype === "boolean") {
                    this.arr[i][a.key_name] = !!this.getRandomInt(0, 2)
                }
                else if (a.datatype === "number" && a.type === "phone") {
                    this.arr[i][a.key_name] = `+38(${this.getRandomInt(10, 100)}) ${this.getRandomInt(100, 1000)} ${this.getRandomInt(10, 100)} ${this.getRandomInt(10, 100)}`
                }
                else {
                    var dates = new Date()
                    dates.setFullYear(this.getRandomInt(0, 2022))
                    dates.setMonth(this.getRandomInt(1, 13))
                    dates.setDate(this.getRandomInt(1, 32))
                    dates.setHours(this.getRandomInt(0, 24))
                    dates.setMinutes(this.getRandomInt(0, 60))
                    dates.setSeconds(this.getRandomInt(0, 60))
                    this.arr[i][a.key_name] = dates.toLocaleString()
                }
            })
        }
        return this.arr
    }
}

class Table_create {
    constructor(data_array) {
        this.div = document.createElement('div')
        this.div.id = "content"
        if (typeof data_array === "object" && Array.isArray(data_array) && data_array.length != 0) {
            this.data_array = data_array
            return this.generage_table()
        }
        else {
            let text = document.createTextNode("Data is empty")
            this.div.appendChild(text);
            return this.div
        }

    }
    generage_table() {
        let table = document.createElement('tabel')
        table.id = "table_names"

        let table_row = document.createElement('tr')
        Object.keys(this.data_array[0]).forEach(a => {
            let table_head = document.createElement('th');
            let text = document.createTextNode(a);
            table_head.appendChild(text);
            table_row.appendChild(table_head);

        })
        table.appendChild(table_row);

        for (let i = 0; i < this.data_array.length; i++) {
            let table_row = document.createElement('tr')
            Object.keys(this.data_array[i]).forEach(a => {
                let table_column = document.createElement('td');
                let text = document.createTextNode(this.data_array[i][a]);
                table_column.appendChild(text);

                table_row.appendChild(table_column);
            })
            table.appendChild(table_row)

        }
        this.div.appendChild(table);
        return this.div
    }
}

class Result_tabel extends Table_create {
    constructor(data_array) {
        super(data_array);
    }
    generage_table() {
        let table = document.createElement('tabel')
        table.id = "table_names"

        let table_row = document.createElement('tr')
        Object.keys(this.data_array[0]).forEach(a => {
            let table_head = document.createElement('th');
            let text = document.createTextNode(a);
            table_head.appendChild(text);
            table_row.appendChild(table_head);

        })
        let edit_head = document.createElement("th")
        let delete_head = document.createElement("th")

        table_row.appendChild(edit_head);
        table_row.appendChild(delete_head);
        table.appendChild(table_row);

        for (let i = 0; i < this.data_array.length; i++) {
            let table_row = document.createElement('tr')
            Object.keys(this.data_array[i]).forEach(a => {
                let table_column = document.createElement('td');
                let text = document.createTextNode(this.data_array[i][a]);
                table_column.appendChild(text);

                table_row.appendChild(table_column);
            })

            let edit_field = document.createElement("td");
            edit_field.classList.add("editable");
            let text_editable = document.createTextNode("Редактировать");
            edit_field.appendChild(text_editable);
            edit_field.onclick = () => {
                document.getElementById("edit_modal").showModal()
                let edit_form = document.forms.edit;
                Object.keys(global_data).forEach(a => {
                    edit_form.elements[a].value = global_data[a]
                });
                if (global_data.gender == "Male") {
                    edit_form.elements.gender[1].checked = true;
                }
                else {
                    edit_form.elements.gender[0].checked = true;
                }

            }

            let delete_field = document.createElement("td");
            delete_field.classList.add("deleted");
            let text_delete = document.createTextNode("Удалить");
            delete_field.appendChild(text_delete)
            delete_field.onclick = () => {
                let r = confirm("Вы действительно хотите удалить?");
                if (r == true) {
                    deleting_data();
                }
            }


            table_row.appendChild(edit_field);
            table_row.appendChild(delete_field);
            table.appendChild(table_row)

        }
        this.div.appendChild(table);
        return this.div
    }
}


class Content_wraper {
    constructor() {
        return this.create_form()
    }

    create_form() {
        let login_form = document.createElement('div')
        login_form.id = "login_form"
        let form = document.createElement('form')

        document.getElementById('login_from').appendChild('form')
        document.getElementsByTagName("main")[0].appendChild(logn.form)


    }
}

function date_output(data_object = {}) {
    let wraper = document.getElementById("content_wraper");
    if (wraper.classList.contains('hidden')) {
        document.getElementById("login_form").classList.toggle("hidden")
        document.getElementById("content_wraper").classList.toggle("hidden")
    }
    const data_array = new Data_generator(data_object);
    const table = new Table_create(data_array);
    if (wraper.hasChildNodes()) {
        wraper.removeChild(wraper.childNodes[0]);
    }
    wraper.appendChild(table);

}
document.getElementById("users").onclick = () => { date_output(data_object1) }


document.getElementById("contacts").onclick = () => { date_output(data_object2) }
document.getElementById("login").onclick = () => {
    document.getElementById("login_form").classList.toggle("hidden")
    document.getElementById("content_wraper").classList.toggle("hidden")
}

function get_form_data() {
    let login_data = {}
    let form = document.forms.log_in;
    login_data.name = form.elements.name.value;
    login_data.surname = form.elements.surname.value;
    login_data.birthday = form.elements.birthday.value;
    login_data.phone = form.elements.phone.value;
    if (document.getElementsByName('gender')[0].checked === true) {
        login_data.gender = "Male"
    }
    else {
        login_data.gender = "Female"
    }
    return login_data
}

function get_form_editing_data() {
    let login_data = {}
    let form = document.forms.edit;
    login_data.name = form.elements.name.value;
    login_data.surname = form.elements.surname.value;
    login_data.birthday = form.elements.birthday.value;
    login_data.phone = form.elements.phone.value;
    if (document.getElementsByName('gender')[0].checked === true) {
        login_data.gender = "Male"
    }
    else {
        login_data.gender = "Female"
    }
    return login_data
}

async function tabel(body = {}) {

    const { data } = (await axios.post('https://jsonplaceholder.typicode.com/todos', body))
    global_data = body;

    document.getElementById("login_form").classList.toggle("hidden")
    document.getElementById("content_wraper").classList.toggle("hidden")
    const table = new Result_tabel([data])
    let wraper = document.getElementById("content_wraper");
    if (wraper.childNodes.length!==0){  
        wraper.removeChild(wraper.childNodes[0]);
    }
    document.getElementById("content_wraper").appendChild(table);
}
async function editing(body = {}) {
    const { data } = (await axios.put('https://jsonplaceholder.typicode.com/todos/1', body))
    const table = new Result_tabel([data]);
    let wraper = document.getElementById("content_wraper");
    if (wraper.childNodes.length === 1) {
        wraper.removeChild(wraper.childNodes[0]);
    }
    document.getElementById("content_wraper").appendChild(table);

}

async function deleting(body = {}) {
    const { data } = (await axios.delete('https://jsonplaceholder.typicode.com/todos/1', body))
    const table = new Result_tabel(data || []);
    let wraper = document.getElementById("content_wraper");
    wraper.removeChild(wraper.childNodes[0]);
    document.getElementById("content_wraper").appendChild(table);

}


function load_data(event) {
    event.preventDefault();
    let data = get_form_data();
    tabel(data)
}

function editing_data(event) {
    event.preventDefault();
    let data = get_form_editing_data();
    editing(data)


    document.getElementById("edit_modal").close()

}

function deleting_data() {
    deleting(global_data)
}
function closing_modal(){
    document.getElementById("edit_modal").close() 
}
