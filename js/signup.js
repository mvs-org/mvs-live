var button = $("#signup button")

var language = 'en';


button.on("click", function(){
  let email = $('#signup #input-email').val();
  let firstname = $('#signup #input-firstname').val();
  let lastname = $('#signup #input-lastname').val();
  console.log(firstname)
  if(!(firstname||lastname))
  	signupError('NAME_MISSING');
  else
  	signup(email, firstname, lastname, language);
  
})

function signupError(message){
	$('#signup .message').html('');
  switch(message){
  	case 'CONNECTION_PROBLEM':
    	$('#signup #message-error').html('Signup server connection problem. Please try again later.');
    	break;
  	case 'EMAIL_EXISTS':
    	$('#signup #message-error').html('Email address is already signed up.');
    	break;
    case 'EMAIL_INVALID':
    	$('#signup #message-error').html('Email address is invalid.');
    	break;
    case 'NAME_MISSING':
    	$('#signup #message-error').html('Please enter your name.');
    	break;
    default:
    	$('#signup #message-error').html('Error signing up. Please check data or try again later.');
  }
	
}

function signupSuccess(){
	$('.signup-message').html('');
	$('#signup-message-success').html('Please check your Inbox to confirm your address');
}

function signup(email, firstname, lastname, language){
$.ajax( "https://signup.mvs.org/signup?email="+email+"&firstname="+firstname+"&lastname="+lastname+"&language="+language )
  .done(function(data) {
  	if(data.success)
    	signupSuccess();
    else
      signupError(data.message);
  })
  .fail(function() {
  	signupError('CONNECTION_PROBLEM');
  });
}