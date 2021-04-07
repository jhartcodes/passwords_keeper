function checkPasswordStrength(password) {
	let number     = /([0-9])/;
	let upperCase  = /([A-Z])/;
	let lowerCase  = /([a-z])/;
	let specialCharacters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;

	let characters     = (password.length >= 6 && password.length <= 15 );
	let capitalletters = password.match(upperCase) ? 1 : 0;
	let loweletters    = password.match(lowerCase) ? 1 : 0;
	let numbers        = password.match(number) ? 1 : 0;
	let special        = password.match(specialCharacters) ? 1 : 0;

	this.update_info('length', password.length >= 6 && password.length <= 15);
    this.update_info('capital', capitalletters);
    this.update_info('small', loweletters);
    this.update_info('number', numbers);
    this.update_info('special', special);

	let total = characters + capitalletters + loweletters + numbers + special;
	this.password_meter(total);
}

function update_info(criterion, isValid) {
    let $passwordCriteria = $('#passwordCriterion').find('li[data-criterion="' + criterion + '"]');
    if (isValid) {
        $passwordCriteria.removeClass('invalid').addClass('valid');
    } else {
        $passwordCriteria.removeClass('valid').addClass('invalid');
    }
}

function password_meter(total) {
    let meter = $('#password-strength-status');
    meter.removeClass();
    if (total === 0) {
        meter.html('');
    } else if (total === 1) {
        meter.addClass('veryweak-password').html('very weak');
    } else if (total === 2) {
        meter.addClass('weak-password').html('weak');
    } else if (total === 3) {
        meter.addClass('medium-password').html('medium');
    } else if (total === 4) {
        meter.addClass('average-password').html('average');
    } else {
        meter.addClass('strong-password').html('strong');
    }
}

