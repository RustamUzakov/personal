$(document).ready(function(){
	console.log("js for validation is here");


	var name;
	var email;
	var message;


	$("#submitBtn").click(function(){
		console.log("sub is clicked");

			name = $("#inputFn").val();
			email = $("#inputEmail").val();
			message= $(".inputMess").val();

			name_valid=false;
			email_valid=false;
			message_valid=false;

			if(name==""){
				$("#inputFn").css("border","solid 2px rgba(193, 66, 66, 0.84)");
			}else{
				name_valid=validate("normalString",name);

			}

			if(email==""){
				$("#inputEmail").css("border","solid 2px rgba(193, 66, 66, 0.84)");
			}else{
				email_valid=validate("emailAddress",email);
			}

			if(message==""){
				$(".inputMess").css("border","solid 2px rgba(193, 66, 66, 0.84)");
			}else{
				message_valid=validate("normalString",message);
			}

			if(name_valid && email_valid && message_valid){
				alert("Form is ready");
			}else{
				alert("Please make sure your form is complete properly!");
			}








	});

	function validate (inputType, userInput){
		var valid=false;
		switch(inputType){
			case 'normalString':
				console.log( "Validating a String" );
					userInput = cleanUp( userInput );
					valid = true;
				break;		


			
			case 'emailAddress':
					console.log( "Validating Email Address");
					userInput=cleanUp(userInput);
					if( userInput.indexOf("@") >= 0){
						//valid so far...
						if( userInput.indexOf(".") >= 0 ){
							valid = true;
						}
					}
				break;
		}
		return valid;
	}

function cleanUp( userInput ){
		console.log("cleanUp() initiated...")
		var temp = userInput;
		temp = temp.replace(/-/g, "");
		temp = temp.replace("<", "&lt;");
		temp = temp.replace(">", "&gt;");
		temp = temp.replace("SELECT", "");
		temp = temp.replace("DELETE", "");
		temp = temp.replace("INSERT", "");
		temp = temp.replace("alert()", "");
		return temp;
	}


})