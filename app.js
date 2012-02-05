(function($){
    
    var Question = Backbone.Model.extend({
        defaults: {
            problemStatement: '',
            optionA: '',
            optionB: '',
	        optionC: '',
	        optionD: ''
            examineeChoice: {}
	   }
    });
    
    var examineeChoice = {
    
        choic
    }

    var QuestionList = Backbone.Collection.extend({
        model: Question
    });

    var QuestionView = Backbone.View.extend({
        el: $('body'),
	
	events: {
            'click button#proceed': 'proceedQuestion',
            'click input[type=radio]': 'getAnswer'
	},
	
	initialize: function(){
	    _.bindAll(this, 'render', 'proceedQuestion');
	    var question1 = new Question({
                problemStatement: '問題文1',
	        optionA: '答えA',
	        optionB: '答えB',
	        optionC: '答えC',
	        optionD: '答えD'
	    });
	    var question2 = new Question({
                problemStatement: '問題文2',
	        optionA: '答えE',
	        optionB: '答えF',
	        optionC: '答えG',
	        optionD: '答えH'
	    });
        var question3 = new Question({
                problemStatement: '問題文3',
	        optionA: '答えE',
	        optionB: '答えF',
	        optionC: '答えG',
	        optionD: '答えH'
	    });
	    this.collection = new QuestionList([question1,question2,question3]);

	    this.counter = 0;
	    this.render();
	},

	render: function(){
	    var self = this;
	    var question = this.collection.models[this.counter];
        $('#question_statement').html(question.get("problemStatement"));

	    var optionA = '<p><label><input type="radio" name="answer_column" value="1">' + question.get('optionA') + '</label></p>';
	    var optionB = '<p><label><input type="radio" name="answer_column" value="2">' + question.get('optionB') + '</label></p>';
        var optionC = '<p><label><input type="radio" name="answer_column" value="3">' + question.get('optionC') + '</label></p>';
	    var optionD = '<p><label><input type="radio" name="answer_column" value="4">' + question.get('optionD') + '</label></p>';        
        var option = optionA + optionB + optionC + optionD;
        $('#answer_column').html(option);
        },

	proceedQuestion: function(){
	    this.counter += 1;
	    this.render();
	},
    
    getAnswer: function(e){
        //alert("aaaa");
        alert(e.target.value);
        var question = this.collection.model[this.counter];
        question.set('examineeChoice', );
    }

    });

    var questionView = new QuestionView();
})(jQuery);


