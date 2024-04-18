console.log("Age Calculator");
let userInput = document.getElementById("date");
let button = document.querySelector("button");
userInput.max = new Date().toISOString().split("T")[0];

calculate = () => {
    let birthDate = new Date(userInput.value);
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();
    let d2 = birthDate.getDate();
    let m2 = birthDate.getMonth() + 1;
    let y2 = birthDate.getFullYear();
    let d3, m3, y3;

    y3 = y2 - y1;
    if (m2 >= m1) {
        m3 = m3 - m1;
    }
    else {
        y3--;
        m3 = 12 + m2 - m1;
    }
    if (d2 >= d1) {
        d3 = d2 - d1;

    } else {
        m3--;
        d3 = getDaysinMonth(y1, m1) + d2 - d1

    }
    function getDaysinMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }




}
button.addEventListener("click", () => {
    calculate();
})