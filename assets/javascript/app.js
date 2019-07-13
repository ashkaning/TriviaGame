
window.onload = function () {
    $('#start').on('click', function () {
        game.start();
        $("#end").show()

    })

    $("#end").on('click', function () {
        //alert("hi")
        game.done();
        $("#end").hide()
        $("#restart").show()

    })
}
var correct = 0
var incorrect = 0
var counter = 30

var questions = [{
    question: "What is My Name?",
    answers: [" Ashkan ", " Jack ", " Sarah ", " Jason "],
    correctAnswer: " Ashkan "
}, {
    question: "How many does flag has stars?",
    answers: [" 20 ", " 13 ", " 50 ", " 40 "],
    correctAnswer: " 50 "
}, {
    question: "How much is the Distance from Earth to Moon? (Miles)",
    answers: [" 238,900 ", " 238,000 ", " 239,000 ", " 300,000 "],
    correctAnswer: " 238,900 "
}, {
    question: "What is the most selling product in Walmart?",
    answers: [" Paper Towel ", " Tiolet Paper ", " Bottle of water ", " Chiquitos Banana "],
    correctAnswer: " Chiquitos Banana "
}, {
    question: "In 2011, which country hosted a Formula 1 race for the first time?",
    answers: ["USA ", " UK ", " India ", " USE "],
    correctAnswer: " India "
}];

var game = {

    countdown: function () {
        counter--;
        $('#counter').html(counter);
        if (counter <= 0) {
            alert("time is up!");
            $("#end").hide()
            $("#restart").show()
            game.done();


        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">30</span> Seconds</h2>')
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $('#subwrapper').append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
    },
    done: function () {
        $.each($('input[name="question-0"]:checked'), function () {
            if ($(this).val() === questions[0].correctAnswer) {
                correct = correct + 1


            } else {
                incorrect = incorrect + 1;

            }
        });

        $.each($('input[name="question-1"]:checked'), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                correct = correct + 1;
                //alert(correct)
            } else {
                incorrect = incorrect + 1;
            }
        });
        $.each($('input[name="question-2"]:checked'), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                correct = correct + 1;
            } else {
                incorrect = incorrect + 1;
            }
        });
        $.each($('input[name="question-3"]:checked'), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                correct = correct + 1;
            } else {
                incorrect = incorrect + 1;
            }
        });
        $.each($('input[name="question-4"]:checked'), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                correct = correct + 1;
            } else {
                incorrect = incorrect + 1;
            }
        });

        this.result();
    },
    result: function () {


        clearInterval(timer);
        $('#subwrapper h2').remove();

        $('#subwrapper').html("<h2>All Done!</h2>");
        console.log(correct)
        var c = correct;
        var un = incorrect
        $('#subwrapper').append("<h3>Correct Answers: " + c + "</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: " + un + "</h3>");
        $('#subwrapper').append("<h3>Unanswered: " + (questions.length - (un + c)) + "</h3>");

    }

}
