Array.prototype.shuffle = function() {
    var array = this,
        currentIndex = array.length,
        temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};

var databaseInStorage = JSON.parse(localStorage.getItem("database")),
    database = [];
if (databaseInStorage != null)
    database = databaseInStorage;

function generateId() {
    var randomId = () => {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };

    var idHaveInDatabase = false,
        allId = database.map(database => database.id),
        id;

    while (idHaveInDatabase == false) {
        id = randomId();
        if (!allId.includes(id))
            idHaveInDatabase = true;
    }

    return id;
}

function addQuestion() {
    var question = document.getElementById("inputQuestion");
    var content = document.getElementById("inputContent");
    var difficult = document.getElementById("inputDifficult");

    database.push({
        id: generateId(),
        question: question.value,
        content: content.value,
        date: getToday(),
        difficult: difficult.value
    });

    question.value = "";
    content.value = "";
    difficult.value = "";

    writeList();
}

function getToday() {
    var thisYear = new Date().getFullYear();
    var thisMonth = new Date().getMonth() + 1;
    var today = new Date().getDate();
    return new Date(thisYear, thisMonth, today);
}

function time(startTime, endTime) {
    var differenceInTime = new Date(endTime).getTime() - new Date(startTime).getTime();
    var differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays;
}

function writeList() {
    document.getElementById("questions").innerHTML = "";
    for (var question = 0; question < database.length; question++) {
        document.getElementById("questions").innerHTML += '<div id="' + database[question].id + '"><div id="question">' + database[question].question + '</div><div id="edit" onclick="showBoxEdit(' + "'" + database[question].id + "'" + ')">S???a</div><div id="delete" onclick="deleteQuestion(' + "'" + database[question].id + "'" + ')">X??a</div></div>';
    }
    if (database.length == 0) {
        document.getElementById("questions").innerHTML = "<br/><center><i>Ch??a c?? c??u h???i n??o. B???m v??o n??t Th??m c??u h???i ????? th??m c??u h???i m???i...</i></center><br/>";
    }
    stat();
    localStorage.setItem("database", JSON.stringify(database));
}

function showHide(id, button, closeText, defaultText) {
    var element = document.getElementById(id);
    if (element.style.display === "block") {
        button.innerHTML = defaultText;
        element.style.display = "none";
    } else {
        button.innerHTML = closeText;
        element.style.display = "block";
    }
}

function saveEditQuestion(id) {
    for (var question = 0; question < database.length; question++) {
        if (database[question].id == id) {
            document.getElementById("editBox").style.display = "none";
            document.body.style.overflow = "auto";
            var newQuestion = document.getElementById("editQuestion").value;
            var newContent = document.getElementById("editContent").value;
            var newDifficult = document.getElementById("editDifficult").value;
            database[question].question = newQuestion;
            database[question].content = newContent;
            database[question].difficult = newDifficult;
        }
    }
    writeList();
}

function showBoxEdit(id) {
    for (var question = 0; question < database.length; question++) {
        if (database[question].id == id) {
            var idPart = '<form id="editForm" action="javascript:;" onsubmit="saveEditQuestion(' + "'" + id + "'" + ')">';
            var questionPart = '<input type="text" placeholder="Nh???p c??u h???i..." id="editQuestion" required value="' + database[question].question + '"/>';
            var contentPart = '<textarea id="editContent" placeholder="Nh???p c??u tr??? l???i..." required>' + database[question].content + '</textarea>';
            var tipsPart = '<div id="editTips"> L??u ??: <i>?????t <b>t??? kh??a c???n ghi nh???</b> trong d???u ngo???c vu??ng "[]" ????? ???n n??. V?? d???: <b>Hello c?? ngh??a l?? [xin ch??o]</b>, khi ????, t??? <b>"xin ch??o"</b> s??? b??? ???n</i> </div>';
            var morePart = '<select id="editDifficult" required> <option value="" disabled selected>Ch???n ????? kh?? c???a c??u n??y</option> <option value="easy">D??? (1 tu???n sau s??? ??n l???i)</option> <option value="medium">Trung b??nh (4 ng??y sau s??? ??n l???i)</option> <option value="hard">Kh?? (1 ng??y sau s??? ??n l???i)</option> </select> <button name="submit" id="editSave">L??u</button> <input type="reset" id="editCancel" value="H???y b???" onclick="hideDiv(' + "'editBox'" + '); document.body.style.overflow = ' + "'auto'" + ';"/> </form>';
            document.getElementById("editBox").innerHTML = idPart + questionPart + contentPart + tipsPart + morePart;
            document.getElementById("editDifficult").value = database[question].difficult;
            document.getElementById("editBox").style.display = "block";
            document.body.style.overflow = "hidden";
        }
    }
}

function hideDiv(id) {
    document.getElementById(id).innerHTML = '';
    document.getElementById(id).style.display = 'none';
}

function setDifficult(id, nextIndex) {
    var newDifficult = document.getElementById("reviewDifficult").value;
    for (var question = 0; question < database.length; question++) {
        if (database[question].id == id) {
            database[question].difficult = newDifficult,
                database[question].date = getToday()
        }
    }
    writeList();
    showReview(nextIndex);
}

var listOfReview = [];

function review() {
    listOfReview = [];
    var indexsOfReview = getQuestionNeedReview();
    for (var index = 0; index < indexsOfReview.length; index++) {
        var question = indexsOfReview[index];
        var content = database[question].content;
        content = content.replace(/\[/g, "<b id='keyword' onclick='showKeyword(this)'>");
        content = content.replace(/\]/g, "</b>");
        content = content.replace(/\\n/g, "<br/>");
        listOfReview.push({
            id: database[question].id,
            question: database[question].question,
            content: content
        });
    }
    listOfReview.shuffle();
    showReview(0);
}

function showReview(index) {
    if (index >= listOfReview.length) {
        alert("B???n kh??ng c??n g?? ????? h???c h??m nay c???!");
        document.getElementById("reviewBox").style.display = "none";
        document.body.style.overflow = "auto";
    } else {
        document.getElementById("reviewBox").style.display = "block";
        document.body.style.overflow = "hidden";
        document.getElementById("reviewQuestion").innerHTML = listOfReview[index].question;
        document.getElementById("reviewContent").innerHTML = listOfReview[index].content;
        var hideAnswer = "showHide('reviewContent', document.getElementById('reviewButton'), '<b>B???m v??o c??c d???i m??u x??m ????? hi???n th??? t??? kh??a ch??nh b??? ???n</b>', '<b>B???m v??o ????y ????? xem ????p ??n</b>')";
        document.getElementById("reviewControl").innerHTML = '<form action="javascript:;" onsubmit="' + hideAnswer + '; setDifficult(' + "'" + listOfReview[index].id + "'," + (index + 1) + ');"> <select id="reviewDifficult" required> <option value="" disabled selected>Ch???n ????? kh?? c???a c??u n??y</option> <option value="easy">D??? (1 tu???n sau s??? ??n l???i)</option> <option value="medium">Trung b??nh (4 ng??y sau s??? ??n l???i)</option> <option value="hard">Kh?? (1 ng??y sau s??? ??n l???i)</option> </select> <button name="submit" id="reviewSave">???? xong c??u n??y</button> </form>';
    }
}

function showKeyword(keyword) {
    keyword.style = "color: black; background: white; text-align: justify";
}

function deleteQuestion(id) {
    for (var question = 0; question < database.length; question++) {
        if (database[question].id == id)
            database.splice(question, 1);
    }
    writeList();
}

function stat() {
    localStorage.setItem("database", JSON.stringify(database));
    var total = database.length;
    var needReview = getQuestionNeedReview().length;
    var reviewed = total - needReview;
    document.getElementById("stat").innerHTML = "T???ng c???ng: " + total + " - C???n h???c: " + needReview + " - ???? h???c: " + reviewed;
}

function getQuestionNeedReview() {
    var needReview = [];
    for (var question = 0; question < database.length; question++) {
        var difference = time(database[question].date, getToday());
        if (database[question].difficult == "easy" && difference >= 7)
            needReview.push(question);
        else if (database[question].difficult == "medium" && difference >= 4 && difference < 7)
            needReview.push(question);
        else if (database[question].difficult == "hard" && difference >= 1 && difference < 4)
            needReview.push(question);
    }
    return needReview;
}

function showInputOutput() {
    document.getElementById("outputData").value = JSON.stringify(database);
    document.getElementById("inputOutputBox").style.display = "block";
    document.body.style.overflow = "hidden";
}

function inputDataSave() {
    document.getElementById("inputOutputBox").style.display = "none";
    document.body.style.overflow = "auto";
    var dataInput = document.getElementById("inputData").value;
    var dataParsed = JSON.parse(dataInput);
    database = dataParsed;
    writeList();
}

document.addEventListener('DOMContentLoaded', function() {
    writeList();
    if (database.length == 0)
        showHide("video", document.getElementById("videoTitle"), "<b style=color:red>B???m v??o ????y ????? ????ng video</b>", "Video h?????ng d???n s??? d???ng");
}, false);
