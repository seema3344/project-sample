class Question {

    constructor() {
      this.input1 = createInput("Enter Your Name Here..... ");
      this.option1 = createoption('1: Everyone');
      this.option1 = createoption('2: Envolope');
      this.question = createElement('h2');
    }

  
display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- What starts and ends with the letter 'E',but has only one letter ? " );
    this.question.position(150, 80);
    this.option1.html("1: Everyone " );
    this.option1.position(150, 100)
    this.option2.html("2: Envolope " );

    this.input1.position(150, 120);
    
}
  }
  