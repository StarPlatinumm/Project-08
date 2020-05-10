let startButton = document.querySelector("#start"),

    resultTable = document.querySelector(".result-table"),
    resultTableValues = resultTable.querySelectorAll("[class$='value']"),
    // budgetValue = document.querySelector(".budget-value"),
    // daybudgetValue = document.querySelector(".daybudget-value"),
    // levelValue = document.querySelector(".level-value"),
    // expensesValue = document.querySelector(".expenses-value"),
    // optionalexpensesValue = document.querySelector(".optionalexpenses-value"),
    // incomeValue = document.querySelector(".income-value"),
    // monthsavingsValue = document.querySelector(".monthsavings-value"),
    // yearsavingsValue = document.querySelector(".yearsavings-value"),

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

title.style.fontSize = "40px";