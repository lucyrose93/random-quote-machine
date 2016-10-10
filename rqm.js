rqm.js



function quote(num){

var quote = "";
num = Math.floor(Math.random()*10);

switch(num){

	case 1:
	quote = "\"Don\’t worry if it doesn\’t work right. If everything did, you\’d be out of a job.\” - Mosher\’s Law of Software Engineering";
	break;

	case 2:
	quote = "\“ It\'s not at all important to get it right the first time. It\'s vitally important to get it right the last time. \” - Andrew Hunt and David Thomas";
	break;

	case 3:
	quote = "\“ First, solve the problem. Then, write the code. \” - John Johnson";
	break;

	case 4:
	quote = "\“ Should array indices start at 0 or 1? My compromise of 0.5 was rejected without, I thought, proper consideration. \” - Stan Kelly-Bootle";
	break;

	case 5:
	quote = "\“ Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. \” - Rick Osborne";
	break;
	
	case 6:
	quote = "\“ Any fool can write code that a computer can understand. Good programmers write code that humans can understand. \” - Martin Fowler";
	break;
	
	case 7:
	quote = "\“ Linux is only free if your time has no value. \” - Jamie Zawinski";
	break;

	case 8:
	quote = "\“ Good code is its own best documentation. As you\'re about to add a comment, ask yourself, \"How can I improve the code so that this comment isn\'t needed?\" Improve the code and then document it to make it even clearer. \” - Steve McConnellf";
	break;
						
	case 9:
	quote = "\“ Programming can be fun, so can cryptography; however they should not be combined. \” - Kreitzberg and Shneiderma";
	break;

	case 10:
	quote = "\“ Any code of your own that you haven\'t looked at for six or more months might as well have been written by someone else. \” - Eagleson\'s law";
	break;
	
	default:
	quote = "You\'re the best!";
	break;
}
return quote;

}

quote(9);
