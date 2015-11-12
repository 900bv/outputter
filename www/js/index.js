function random() {
	var truth = !Math.round(Math.random());
	alert(truth);
	//vibrate for 2000 milliseconds
	navigator.notification.vibrate(2000);
}