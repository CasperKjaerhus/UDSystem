// Her er starten på alt
/*
The UD-System v0.1. The UD-system "udgiftdelingssystem" is an expense-sharing application (somewhat inspired by the "weshare" app) 
that allows a group of friends to record their shared expenses/outlays during an event (eg a vacation or festival), 
and by the end of the event settle the account, such that every member is told how much (s)he must pay or receive from other members. 
Write a static html file that contains an example (ie. with specific data, a mockup) of how the information of the application could be structured. 
It should contain a header, a navigation element where the user may select the main functions, a footer, and a main element.
An expense is recorded by name, topic, date, amount, and currency.  
The main functions/views are listing the recorded expenses, adding an expense, and seeing the balance, and settling the balance. 
*/

/*
UD System v0.2  Construct a JS array of expenses, each consisting of name (of the persons having the expense), topic, date, amount, and currency. 
Write a JS function that adds a table to the DOM of your static page from last based on the contents of the expense array.  
See also [MH chapter 14] Exercise "Build a table". Remark as an additional hint that it is possible set the "innterHTML" attribute of an element to text 
representing html code that is displayed inside the element. 

*/

/*
UD v0.3. Today you will fetch a json encoded javascript array of expenses stored at the resourse "http://127.0.0.1:3000/expenses/",
to replace the static array of UDv0.2. Today it will thus be a local node.js server running on your local machine. 
To accomplish this you need to install node.js and this simple application. You can either run the application from within VS code 
using its debugger, or on the command line in the directory of the unzipped file and execute "node node/app.js". At this time you 
not be concerned with what the server side app.js does! (Next Lectures!!). 

*/

class Expense {
    constructor(name='', topic='', date='', amount=0, currency='') {
        this.name = name;
        this.topic = topic;
        this.date = date;
        this.amount = amount;
        this.currency = currency;
    }
}

class overviewExpenses {
    constructor() {
        this.list = [];
    }
    addExpense(name, topic, date, amount, currency) {
        const expense = new Expense(name, topic, date, amount, currency);
        this.list.push(expense);
        addRowToTable(expense);
    }
}

function addRowToTable(expense) {
    let table = document.querySelector("#expenses");
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    tdName.innerHTML = expense.name;
    let tdTopic = document.createElement("td");
    tdTopic.innerHTML = expense.topic;
    let tdDate = document.createElement("td");
    tdDate.innerHTML = expense.date;
    let tdAmount = document.createElement("td");
    tdAmount.innerHTML = expense.amount;
    let tdCurrency = document.createElement("td");
    tdCurrency.innerHTML = expense.currency;
    tr.appendChild(tdName);
    tr.appendChild(tdTopic);
    tr.appendChild(tdDate);
    tr.appendChild(tdAmount);
    tr.appendChild(tdCurrency);
    table.appendChild(tr);
}

let expenses = new overviewExpenses();
expenses.addExpense("Mads", "Kaffe", "09-02/2020", 0, "DKK");
expenses.addExpense("Alexander", "Kaffe", "18-02/2020", 55, "DKK");
const expenseTable = document.querySelector("#expenses");