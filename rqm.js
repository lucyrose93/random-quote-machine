rqm.js

function getQuote() {
	
	var quote = document.querySelector('.amazingquote');
	var quotes = [{text:"\"Don\’t worry if it doesn\’t work right. If everything did, you\’d be out of a job.\”", name: "Mosher\’s Law of Software Engineering"}, 
{text: "\“ It\'s not at all important to get it right the first time. It\'s vitally important to get it right the last time.\”", name: "Andrew Hunt and David Thomas"},
{text: "\“ First, solve the problem. Then, write the code. \”", name: "John Johnson"}, {text: "\“ Should array indices start at 0 or 1? My compromise of 0.5 was rejected without, I thought, proper consideration. \”", name: "Stan Kelly-Bootle"}, 
{text: "\“ Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. \”", name: "Rick Osborne"},
{text: "\“ Any fool can write code that a computer can understand. Good programmers write code that humans can understand. \"", name: "Martin Fowler"},
{text: "\“ Linux is only free if your time has no value. \”", name: "Jamie Zawinski"}, 
{text: "\“ Good code is its own best documentation. As you\'re about to add a comment, ask yourself, \"How can I improve the code so that this comment isn\'t needed?\" Improve the code and then document it to make it even clearer. \”", name: "Steve McConnellf"},
{text: "\“ Programming can be fun, so can cryptography; however they should not be combined. \"", name: "Kreitzberg and Shneiderma"},
{text: "\“ Any code of your own that you haven\'t looked at for six or more months might as well have been written by someone else. \”", name: "Eagleson\'s law"}, {text: "\“ Live as if you were to die tomorrow. Learn as if you were to live forever.\"", name: "Mahatma Gandhi"},
{text: "\“ The more that you read, the more things you will know. The more that you learn, the more places you\'ll go.\”", name: "Doctor Seuss"},
{text: "\“ Any fool can know. The point is to understand.\”", name: "Albert Einstein"},
{text: "\“ Tell me and I forget, teach me and I may remember, involve me and I learn.\”", name: "Benjamin Franklin"},
{text: "\“ The love of learning, the sequestered nooks,and all the sweet serenity of books\”", name: "Henry Wadsworth Longfellow"},
{text: "\“ We learn from failure, not from success\”", name: "Bram Stoker"},
{text: "\“ The more I read, the more I acquire, the more certain I am that I know nothing.\”", name: "Voltaire"},
{text: "\“ Life shrinks or expands in proportion to one\’s courage.\”", name: "Anais Nin"},
{text: "\“ If you obey all the rules, you miss all the fun.\”", name: "Katharine Hepburn"},
{text: "\“ Life is not measured by the number of breaths we take, but by the moments that take our breath away.\”", name: "Maya Angelou"},
{text: "\“ Whatever you do, be different. That was the advice my mother gave me, and I can\’t think of better advice for an entrepreneur. If you\’re different, you will stand out.\”", name: "Anita Roddick"},
{text: "\“ A woman is like a tea bag – you never know how strong she is until she gets in hot water.\”", name: "Eleanor Roosevelt"},
{text: "\“ Destiny is a name often given in retrospect to choices that had dramatic consequences.\”", name: "J.K. Rowling"}]        
               
               
	function pickRandom(arr){
		var randomIndex = Math.floor(Math.random() * arr.length)
			console.log(randomIndex)
				return arr[randomIndex];
	}
	
	var randomQuote = pickRandom(quotes)
  
  document.querySelector('.amazingquote').innerHTML=randomQuote.text+'<br>- ' + randomQuote.name
}


