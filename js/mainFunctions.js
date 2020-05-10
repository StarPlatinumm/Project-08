//Getting document elements
let startButton = document.querySelector("#start"),
    resultTable = document.querySelector(".result-table"),
    resultTableValues = resultTable.querySelectorAll("[class$='value']"),
    expensesItems = document.querySelectorAll(".expenses-item"),
    approveButton1 = document.getElementsByTagName("button")[0],
    approveButton2 = document.getElementsByTagName("button")[1],
    calculateButton = document.getElementsByTagName("button")[2],
    optionalExpenses = document.querySelectorAll(".optionalexpenses-item"),
    optionalIncome = document.querySelector("#income"),
    checkBox = document.querySelector("#savings"),
    chooseSum = document.querySelector(".choose-sum"),
    choosePercent = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value"),
    title = document.querySelector(".title");

//Deactivate buttons until the we get budget
approveButton1.disabled = true;
approveButton2.disabled = true;
calculateButton.disabled = true;

// Declare main variables
let money, time;

//Executes when user clicks the "Начать расчет" button
startButton.addEventListener("click", function() {
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = + prompt("Ваш бюджет на месяц?");

    while (isNaN(money) || money == "" || money == null) {
        money = + prompt("Ваш бюджет на месяц?");
    }

    appData.budget = money;
    appData.timeData = time;
    resultTableValues[0].textContent = appData.budget.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    //Activate buttons
    approveButton1.disabled = false;
    approveButton2.disabled = false;
    calculateButton.disabled = false;
});

//Executes when user clicks the "Утвердить" button in the "Обязательные расходы" section
approveButton1.addEventListener("click", function() {
    let sum = 0;
    for (let i=0; i<expensesItems.length; i++) {
        let a = expensesItems[i].value,
            b = expensesItems[++i].value;
        if ( typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }
    resultTableValues[3].textContent = sum.toFixed();
});



//Executes when user clicks the "Утвердить" button in the "Необязательные расходы" section
approveButton2.addEventListener("click", function() {
    let sum = 0;
    for (let i=0; i < optionalExpenses.length; i++) {
        let opt = optionalExpenses[i].value;
        appData.optionalExpenses[i] = opt;
        resultTableValues[4].textContent += appData.optionalExpenses[i] + " ";
    }
});

//Executes when user clicks the "Рассчитать" button
calculateButton.addEventListener("click", function() {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - resultTableValues[3].textContent) / 30).toFixed();
        resultTableValues[1].textContent = appData.moneyPerDay;
    
        if (appData.moneyPerDay < 100) {
            resultTableValues[2].textContent = "Minial wage";
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
            resultTableValues[2].textContent = "Medium wage";
        } else if (appData.moneyPerDay > 2000) {
            resultTableValues[2].textContent = "High wage";
        } else {
            resultTableValues[2].textContent = "Error occured...";
        }
    } else {
        resultTableValues[1].textContent = "Ошибка";
    }
});

//Executes when user types in "Статьи возможного дохода" textbox
optionalIncome.addEventListener("input", function() {
    let items = optionalIncome.value;
    appData.income = items.split(", ");
    resultTableValues[5].textContent = appData.income;
});

//Executes when user clicks the checkbox
checkBox.addEventListener("click", function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

//Executes when user types in "Сумма" textbox
chooseSum.addEventListener("input", function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
    
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        resultTableValues[6].textContent = appData.monthIncome.toFixed(1);
        resultTableValues[7].textContent = appData.yearIncome.toFixed(1);
    }
});

//Executes when user types in "Процент" textbox
choosePercent.addEventListener("input", function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
    
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        resultTableValues[6].textContent = appData.monthIncome.toFixed(1);
        resultTableValues[7].textContent = appData.yearIncome.toFixed(1);
    }
});

// Define appData object
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

console.log("!!!" + appData.expenses.sum);