export const closeModals = () => {
	const escapeEvent = new KeyboardEvent('keydown', {
		key: 'Escape',
		code: 'Escape',
		which: 27,
		keyCode: 27,
		bubbles: true,
		cancelable: true
	});
	document.dispatchEvent(escapeEvent);
};
