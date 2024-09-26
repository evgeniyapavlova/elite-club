import { countryCodeOptions } from './countryCodeOptions';

export function getPhoneCodeData(code) {
	return (
		countryCodeOptions.find((country) => country.value === code) || {
			value: 'gb',
			phone: '44',
			country: 'United Kingdom'
		}
	);
}
