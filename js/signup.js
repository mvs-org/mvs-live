var button = $("#signup button")

button.on("click", function() {
    let language = $('#signup input[name=language]').val();
    let email = $('#signup #input-email').val();
    let firstname = $('#signup #input-firstname').val();
    let lastname = $('#signup #input-lastname').val();
    if (!(firstname || lastname))
        signupError('NAME_MISSING', language);
    else
        signup(email, firstname, lastname, language);

})

function signupError(message, language) {
    $('#signup .message').html('');
    switch (message) {
        case 'CONNECTION_PROBLEM':
        case 'EMAIL_EXISTS':
        case 'EMAIL_INVALID':
        case 'NAME_MISSING':
            $('#signup #message-error').html(signupTranslate(message, language));
            break;
        default:
            $('#signup #message-error').html(signupTranslate('DEFAULT_ERROR', language));
    }

}

function signupReset() {
    $('#signup #input-email').val('');
    $('#signup #input-firstname').val('');
    $('#signup #input-lastname').val('');
}

function signupSuccess(language) {
    if (typeof language === 'undefined')
        language = 'en';
    signupReset();
    $('#signup .message').html('');
    $('#signup #message-success').html(signupTranslate('CHECK_INBOX', language));
}

function signup(email, firstname, lastname, language) {
    $.ajax("https://signup.mvs.org/signup?email=" + email + "&firstname=" + firstname + "&lastname=" + lastname + "&language=" + language)
        .done(function(data) {
            if (data.success)
                signupSuccess(language);
            else
                signupError(data.message, language);
        })
        .fail(function() {
            signupError('CONNECTION_PROBLEM', language);
        });
}

const signupTranslations = {
    "en": {
        "CONNECTION_PROBLEM": "Signup server connection problem. Please try again later.",
        "EMAIL_EXISTS": "Email address is already signed up.",
        "EMAIL_INVALID": "Email address is invalid.",
        "NAME_MISSING": "Please enter your name.",
        "DEFAULT_ERROR": "Error signing up. Please check data or try again later.",
        "CHECK_INBOX": "Please check your Inbox to confirm your address."
    },
    zh: {
        "CONNECTION_PROBLEM": "服务器连接故障，请重新登录",
        "EMAIL_EXISTS": "此邮箱地址已注册",
        "EMAIL_INVALID": "邮箱地址无效",
        "NAME_MISSING": "请输入您的名字",
        "DEFAULT_ERROR": "登陆出错，请检查登陆账号与密码或重新登陆",
        "CHECK_INBOX": "请核实收件箱，再次确认邮箱地址"
    }
}

function signupTranslate(key, language) {

    console.log(language)
    if (typeof signupTranslations[language] === 'undefined')
        language = 'en';
    console.log(language)
    return signupTranslations[language][key];
}
