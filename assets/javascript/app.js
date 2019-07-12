window.onload = function() {
$('#start').on('click',function(){
    game.start();
 })
 
 $("#end").on('click',function(){
    //alert("hi")
    game.done();
  
 })
}
 var questions = [{
     question: "what was the first full-length CGI movie",
     answers:["A bug's life", "monster Inc", "Toy Story", "The Lion King"],
     correctAnswer:"Toy Story" 
 }, {
     question: "what's the name of the travia's author",
     answers:["Hui", "mhhhhhhhh", "xxxxxx", "I don't know"],
     correctAnswer:"Hui"
 }, {
     question: "what is the author's favorite food",
     answers:["fried chicken", "steam veggie", "lettuce", "carrot"],
     correctAnswer:"fried chicken"
 }, {
     question: "Does she like travia game?",
     answers:["Yes", "Nope", "she doesn't even know", "so so"],
     correctAnswer:"so so"
 }, {
     question: "Do you like this game?",
     answers:["Yeees!", "Nope...", "It's ok", "I don't know"],
     correctAnswer:"Yeees!"
 }];
 
 var game = {
     corret: 0,
     incorrect: 0,
     counter: 20,
     countdown: function(){
         game.counter-- ;
         $('#counter').html(game.counter);
         if(game.counter<=0){
             console.log("time is up!");
                 game.done();
 
         }
     },
     start: function(){
         timer = setInterval(game.countdown,1000);
         $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">20</span> Seconds</h2>')
         $('#start').remove();
         for(var i= 0; i<questions.length; i++){
             $('#subwrapper').append('<h2>'+questions[i].question+'</h2>');
             for(var j= 0;j<questions[i].answers.length;j++){
                 $('#subwrapper').append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
             }
         }
     },
     done: function(){
         $.each($('input[name="question-0"]:checked'),function(){
             if($(this).val()==questions[0].correctAnswer){
                 game.correct++;
             } else{
                 game.incorrect++;
             }
         });
 
         $.each($('input[name="question-1"]:checked'),function(){
             if($(this).val()==questions[1].correctAnswer){
                 game.correct++;
             } else{
                 game.incorrect++;
             }
         });
         $.each($('input[name="question-1"]:checked'),function(){
             if($(this).val()==questions[2].correctAnswer){
                 game.correct++;
             } else{
                 game.incorrect++;
             }
         });
         $.each($('input[name="question-1"]:checked'),function(){
             if($(this).val()==questions[3].correctAnswer){
                 game.correct++;
             } else{
                 game.incorrect++;
             }
         });
         $.each($('input[name="question-1"]:checked'),function(){
             if($(this).val()==questions[4].correctAnswer){
                 game.correct++;
             } else{
                 game.incorrect++;
             }
         });
         
         this.result();
     },
     result: function(){
        
         clearInterval(timer);
         $('#subwrapper h2').remove();
     
         $('#subwrapper').html("<h2>alldone!</h2>");
         $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>"); 
         $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>"); 
         $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.corret))+"</h3>"); 
 
     }
 
     }
 