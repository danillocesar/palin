exports.isPalindrome = function(req, res) {
	var text = req.params.text;
	var isPalindrome = text.replace(/\s/g,'') == text.replace(/\s/g,'').split('').reverse().join('');
	if(isPalindrome){
		res.status(200).send({ msg: "Is a Palindrome" });
	}else{
		res.status(400).send({ msg: "Is not a Palindrome" });
	}
};