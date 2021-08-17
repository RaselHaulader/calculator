let values = '';

// set value to display func
function setDisplay(val) {
    document.getElementById('display').value = val
    values = val
}
// value concat func
function getValue(val) {
    values = values + val
    setDisplay(values)
}
// access all btn clicked value
let allBtn = document.getElementsByClassName('btn');
for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        getValue(e.target.innerText)
    })
}
// delete func
document.getElementsByClassName('dltBtn')[0].addEventListener('click', function () {
    let stringVal = values.toString()
    let deletedVal = stringVal.slice(0, -1)
    setDisplay(deletedVal)
})
// clear func 
document.getElementsByClassName('clearBtn')[0].addEventListener('click', function () {
    setDisplay('')
})
// eval() error validation
document.getElementsByClassName('btnEqual')[0].addEventListener('click', function () {
    let ln = values[values.length - 1]
    if (ln == 1 || ln == 2 || ln == 3 || ln == 4 || ln == 5 || ln == 6 || ln == 7 || ln == 8 || ln == 9 || ln == 0) {
        const result = eval(values)
        setDisplay(result)
    }
});