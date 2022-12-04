async function loadHTML(fileName) {
	const response = await fetch(fileName);

	if (!response.ok) {
		const message = `An error has occured: ${response.status}`;
		throw new Error(message);
	}

	const html = await response.text();

	return html;
}
