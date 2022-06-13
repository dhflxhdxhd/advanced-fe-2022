// utils.js
// 날짜 최신순(내림차순) 정렬
const recentDate = (a,b) => {
    const dateA = new Date(a['date']).getTime();
    const dateB = new Date(b['date']).getTime();

    return dateA < dateB ? 1 : -1;
}

// 로딩
const table1 = document.querySelector(".table1");
const table2 = document.querySelector(".table2");
const quizSpinner = document.querySelector(".js-quizSpinner");
const classSpinner = document.querySelector(".js-classSpinner");

const showClassLoading = () => {
    table1.style.display = "none"
    classSpinner.style.display="block"
}

const hideClassLoading = () => {
    classSpinner.style.display="none"
    table1.style.display = "table-row-group"
}

const showQuizLoading = () => {
    table2.style.display = "none"
    quizSpinner.style.display="block"
}

const hideQuizLoading = () => {
    quizSpinner.style.display="none"
    table2.style.display = "table-row-group"
}


export {showClassLoading, hideClassLoading, showQuizLoading, hideQuizLoading, recentDate}




