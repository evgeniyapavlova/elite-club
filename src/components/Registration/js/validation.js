export function emailValidator(value) {
	return (
		(value &&
			!!value.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			)) ||
		false
	);
}

export function phoneValidator(phoneNumber) {
	const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;
	return phoneRegex.test(phoneNumber);
}

export const telegramUsernameValidator = (username) => {
	const regex = /^@?[a-zA-Z][a-zA-Z0-9_]{4,}$/;
	return regex.test(username);
};
