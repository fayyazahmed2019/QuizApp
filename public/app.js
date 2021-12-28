questionArray = [

    ///1
    {
        question: "Whats is my Name?",
        answer: "Fayyaz",
        options: [
            "Fayyaz",
            "rehan",
            "naveed",
            "kashan",
        ]
    },

    //2
    {
        question: "Whats is my Skills?",
        answer: "Software Developer",
        options: [
            "Software Developer",
            "Web developer",
            "data science",
            "webdesigner",
        ]
    },
]



function showQues(e) {
    var questiont = document.getElementById("question");
    questiont.innerHTML = questionArray[e].question;


    var options = document.getElementsByClassName("options");

    for (var i = 0; i < options.length; i++) {
        options[i].innerHTML = questionArray[e].options[i];
    }
}

count = 0;
score = 0;

function calc() {
    var radios = document.getElementsByClassName("radioBtn");
    var options = document.getElementsByClassName("options");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked == true) {
            console.log(options[i].innerHTML, questionArray[count].answer)
            if (options[i].innerHTML == questionArray[count].answer) {

                score++;


            }
        }
    }

}

function nextQues() {

    calc();

    var radios = document.getElementsByClassName("radioBtn");
    if (count < questionArray.length - 1) {
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked == true) {
                count++;
                showQues(count);
                radios[i].checked = false

            }

        }

    }

    else {
        var main = document.getElementsByClassName("mainQues")
        main[0].innerHTML = "";
        alert("Score ==>" + score)
    }


}