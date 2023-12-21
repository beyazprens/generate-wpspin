function wpspin(MAC) {
	let pin = parseInt(MAC, 16);
	let chksum = parseInt(MAC, 16);
	for (let i = 0;; i++) {
		if (chksum === 0) {
			chksum = (10 - i % 10) % 10;
			break;
		}

		let j = i + 3 * (chksum % 10);
		let k = Math.floor(chksum / 10);
		i = j + k % 10;
		chksum = Math.floor(k / 10);
	}

	let wpspin = pin * 10 + chksum;

	// Düzenleme bölümü: sondaki sıfırı kaldır
	wpspin = parseInt(wpspin.toString().slice(0, -1));

	return wpspin;
}

function calculateWpsPin() {
	let MAC = document.getElementById('MAC').value;
	let result = wpspin(MAC);
	document.getElementById('result').textContent = result;
}
