// utils.js

// 날짜 최신순(내림차순) 정렬 module
const recentDate = (a,b) => {
    const dateA = new Date(a['date']).getTime();
    const dateB = new Date(b['date']).getTime();

    return dateA < dateB ? 1 : -1;
}

// 로딩 module
const classTable = document.querySelector(".classTable");
const quizTable = document.querySelector(".quizTable");
const quizSpinner = document.querySelector(".js-quizSpinner");
const classSpinner = document.querySelector(".js-classSpinner");

const showClassLoading = () => {
    classTable.style.display = "none"
    classSpinner.style.display="block"
}

const hideClassLoading = () => {
    classSpinner.style.display="none"
    classTable.style.display = "table"
}

const showQuizLoading = () => {
    quizTable.style.display = "none"
    quizSpinner.style.display="block"
}

const hideQuizLoading = () => {
    quizSpinner.style.display="none"
    quizTable.style.display = "table"
}


export {showClassLoading, hideClassLoading, showQuizLoading, hideQuizLoading, recentDate}




