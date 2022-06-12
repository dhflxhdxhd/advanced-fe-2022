// app.js
const table1 = document.querySelector(".table1");
const btnAll = document.querySelector(".btn-all");
const btnHelp = document.querySelector(".btn-help");
const btnGit = document.querySelector(".btn-git");
const btnRecent = document.querySelector(".btn-recent");

function fetchClass(callback){
    fetch('class.json')
    .then((response) => response.json())
    .then((data) => {
        callback(data)
})
}

function callbackFunc(btn,data){
    const classData = data;
    let checkBtn = btn;
    console.log('classData',classData);

    if (checkBtn === "all"){
        showAll(classData);
    } else if (checkBtn === "help"){
        showHelp(classData);
    } else if (checkBtn === "git"){
        showGit(classData);
    } else {
        showRecent(classData);
    }
}

function callbackFunc2(data){
    const classData = data
    console.log('classData',classData);

    showHelp(classData);  
}

function showAll(classData){
    let str = ""
    let count = 1;
    for (let i=0; i<classData.length; i++){
        str += `<tr><th scope="row">${count}</th>
        <td>${classData[i].title}</td>
        <td><a href="${classData[i].docUrl}" class="badge bg-secondary">문서</a></td>
        <td>`
        
        if (classData[i].links.length >0){
            for (let j=0; j<classData[i].links.length; j++){
                str += `<a href="${classData[i].links[j]}" class="badge bg-secondary">${j+1}</a>`
            }
        }
        
        str += `</td>
        <td>${classData[i].date}</td>
        <td><a href=${classData[i].gitUrl}>git</a></td><tr>`

        count++;
    }
    table1.innerHTML = str
}

// 주차 수정
function showHelp(classData){
    let str = ""
    let count = 1;

    console.log("showJJe")
    for (let i=0; i<classData.length; i++){
        if (classData[i].links.length > 0){
            str += `<tr><th scope="row">${count}</th>
            <td>${classData[i].title}</td>
            <td><a href="${classData[i].docUrl}" class="badge bg-secondary">문서</a></td>
            <td>`
            
            for (let j=0; j<classData[i].links.length; j++){
                str += `<a href="${classData[i].links[j]}" class="badge bg-secondary">${j+1}</a>`
            }
            
            str += `</td>
            <td>${classData[i].date}</td>
            <td><a href=${classData[i].gitUrl}>git</a></td><tr>`
    
            count++;
        }

    }
    table1.innerHTML = str
}

// 주차 수정
function showGit(classData){
    let str = ""
    let count = 1;

    console.log("showJJe")
    for (let i=0; i<classData.length; i++){
        if (classData[i].gitUrl && classData[i].gitUrl !== ""){
            str += `<tr><th scope="row">${count}</th>
            <td>${classData[i].title}</td>
            <td><a href="${classData[i].docUrl}" class="badge bg-secondary">문서</a></td>
            <td>`
            
            for (let j=0; j<classData[i].links.length; j++){
                str += `<a href="${classData[i].links[j]}" class="badge bg-secondary">${j+1}</a>`
            }
            
            str += `</td>
            <td>${classData[i].date}</td>
            <td><a href=${classData[i].gitUrl}>git</a></td><tr>`
    
            count++;
        }

    }
    table1.innerHTML = str
}

// 날짜 최신순(내림차순) 정렬
function date_recent(a,b){
    const dateA = new Date(a['date']).getTime();
    const dateB = new Date(b['date']).getTime();

    return dateA < dateB ? 1 : -1;
}
// 주차 수정
function showRecent(classData){
    let str = ""
    let count = 1;

    console.log(classData.sort(date_recent));
    showAll(classData)
}

function handleBtnAll(event){
    btnAll.classList.add("active");
    btnHelp.classList.remove("active");
    btnGit.classList.remove("active");
    btnRecent.classList.remove("active");

    fetchClass((data) => callbackFunc("all",data))
}

function handleBtnHelp(){
    btnHelp.classList.add("active");
    btnAll.classList.remove("active");
    btnGit.classList.remove("active");
    btnRecent.classList.remove("active");

    fetchClass((data) => callbackFunc("help",data))
}

function handleBtnGit(){
    btnGit.classList.add("active");
    btnAll.classList.remove("active");
    btnHelp.classList.remove("active");
    btnRecent.classList.remove("active");

    fetchClass((data) => callbackFunc("git",data))
}

function handleBtnRecent(){
    btnRecent.classList.add("active");
    btnAll.classList.remove("active");
    btnHelp.classList.remove("active");
    btnGit.classList.remove("active");

    fetchClass((data) => callbackFunc("recent",data))
}

function init(){
    fetchClass((data) => callbackFunc("all",data))

    btnAll.addEventListener("click",handleBtnAll);
    btnHelp.addEventListener("click",handleBtnHelp);
    btnGit.addEventListener("click",handleBtnGit);
    btnRecent.addEventListener("click",handleBtnRecent);
}


init();
