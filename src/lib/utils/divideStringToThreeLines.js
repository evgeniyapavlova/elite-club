export function divideStringToThreeLines(str) {
	str = str.trim().replace(/\s+/g, ' ');

	const spaceCount = (str.match(/\s/g) || []).length;

	if (spaceCount < 2) {
		return [str];
	}

	const len = Math.ceil(str.length / 3);

	const words = str.split(' ');
	let lines = ['', '', ''];
	let currentLine = 0;

	for (let i = 0; i < words.length; i++) {
		if (lines[currentLine].length + words[i].length > len && currentLine < 2) {
			currentLine++;
		}

		lines[currentLine] += (lines[currentLine] ? ' ' : '') + words[i];
	}

	lines = lines.filter((line) => line !== '');

	return lines.join('<br /> ');
}
