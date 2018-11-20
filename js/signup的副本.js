$("#newsletter_form").submit(function(e) {

    var url = "http://signup.newmetaverse.org:3000/signup";

    $.ajax({
           type: "GET",
           url: url,
           data: $("#newsletter_form").serialize(),
           success: function(data)
           {
               clear_messages();
							 if(data.success){
							 	$('#confirmation_request').css('display','block');
                                 $('.success_message').css('display','block');
							 }
							 else{
								 switch(data.message){
									 case 'EMAIL_EXISTS':
									 	$('#duplicate_error').css('display','block');
										break;
									 case 'EMAIL_INVALID':
									 	$('#email_error').css('display','block');
										break;
								 }
							 }
           },
					 error: function(data)
           {
						 clear_messages();
              $('#connection_error').css('display','block');
           }
         });

    e.preventDefault();
	});

	function clear_messages(){
		$('.error_message').css('display','none');
		$('.success_message').css('display','none');
	}
