function random() {
	var truth = !Math.round(Math.random());
	alert(truth);
	navigator.notification.beep(2);
}