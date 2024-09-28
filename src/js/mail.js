$('form').submit(function (e) {
	e.preventDefault();
	let user_name = $(this).find('.name').val();
	let user_phone = $(this).find('.tel').val();
	var thisForm = this;
	$.ajax({
		url: "../sendmail.php", // куда отправляем
		type: "post", // метод передачи
		data: { // что отправляем
			"name": user_name,
			"phone": user_phone
		},
		error: function () {
			$(thisForm).find("#erconts").html("Произошла ошибка!");
		},
		/* если произойдет ошибка в элементе с id erconts выведится сообщение*/
		beforeSend: function () {
			$(thisForm).find("#erconts").html("Отправляем данные...");
		},
		success: function (result) { /* В случае удачной обработки и отправки выполнится следующий код*/
			$(thisForm).find('#erconts').html(result);
			console.log("отправлено в форму");
		}
	})

})