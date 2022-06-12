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

function callbackFunc(data){
    const classData = data
    console.log('classData',classData);

    showAll(classData);
    
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

fetchClass((data) => callbackFunc(data))