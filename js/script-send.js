$(document).ready(function () {
	//E-mail Ajax Send
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
				location.reload();
			}, 1000);
		});
		return false;
	});

});