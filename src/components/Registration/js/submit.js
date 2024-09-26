event.preventDefault();

if (contact_method === 'telegram' || (contact_method === 'email' && emailValidator(email))) {
	loading = true;

	var requestOptions = {
		method: 'POST',
		redirect: 'follow'
	};

	fetch(
		`https://script.google.com/macros/s/AKfycbxwJaKnVUeVl3hOaPdptoXCk-hUVqO3h0GQfWOcMtloRVAY1REMVV85ERs2CBvY8U9QYg/exec?contact_method=${contact_method}&email=${email}&tg=${tg}`,
		requestOptions
	)
		.then((response) => response.text())
		.then((result) => {
			console.log(result);
			loading = false;
			updateSuccess(true);

			isEmailValid = true;
			contact_method = contact_method_initial;
			email = '';
			tg = '';
		})
		.catch((error) => {
			alert('Something went wrong, please try again.');
			loading = false;
		});
} else {
	isEmailValid = false;
}
