const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chapters = getChapterList() || [];

chapters.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != ''){
        displayList(input.value);
        chapters.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    })
}

function setChapterList(){
    localStorage.setItem('myFavBOMList', JSON.stringify(chapters));
}

function getChapterList(){
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length -1);
    chapters = chapters.filter((item) => item !== chapter);
    setChapterList();
}