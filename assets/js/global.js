(function($){
	
	// Маска для поля типа "Телефон"
	//$("input.phone").mask("+7(999)999-9999");
	
	// Слайдер логотипов игр в подвале на главной
	$('.owl-carousel').owlCarousel({
		loop:true,
		nav:true,
		items:7,
		margin:25,
		stagePadding:0,
	});
	
	// Вспомогательная функция для #25, добавляет иконку страны в выпадающий список
	function formatState (state) {
		if (!state.id) { return state.text; }
		var $state = $(
			'<span><img style="display:inline;" src="img/lang/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
		);
		return $state;
	};
	
	// Выпадающие списки с выбором языка
	$('#language-form select').select2({
		minimumResultsForSearch: Infinity,
		templateSelection: formatState,
		templateResult: formatState,
	});
	
	// Выпадающие списки с выбором страны
	$('#register-form select').select2({
		minimumResultsForSearch: Infinity,
	});
	
	// Выпадающие списки с выбором страны
	$('#fly-register-form select').select2({
		minimumResultsForSearch: Infinity,
	});
	
	// Фильтрация в таблице с расписанием
	$("#timetable .tabs a").click(function(){
		
		$("#timetable .tabs a").removeClass("active");
		$(this).addClass("active");
		
		var category = $(this).attr("data-category");
		
		if(category!="all"){
			$('#timetable .list .events-active > div').each(function(){
				if(!$(this).hasClass(category)) {
					$(this).addClass('hidden');
				} else {
					$(this).removeClass('hidden');
				}
			});
		}
		else {
			$('#timetable .list .events-active > div.hidden').removeClass('hidden');
		}
		
		return false;
	});
	
	// Открытие формы регистрации при клике в плавающем меню
	$("#header #navigation .container a.registration").click(function(){
		$("#header #navigation .container .auth-fly-box").removeClass("active");
		$("#header #navigation .container .register-fly-box").toggleClass("active");
		return false;
	});
	
	// Открытие формы авторизации при клике в плавающем меню
	$("#header #navigation .container a.login").click(function(){
		$("#header #navigation .container .register-fly-box").removeClass("active");
		$("#header #navigation .container .auth-fly-box").toggleClass("active");
		return false;
	});
	
	// Закрытие формы авторизации и регистрации при клике на иконку "закрыть"
	$("#header #navigation .container .auth-fly-box .close, #header #navigation .container .register-fly-box .close").click(function(){
		$("#header #navigation .container .register-fly-box").removeClass("active");
		$("#header #navigation .container .auth-fly-box").removeClass("active");
		return false;
	});
	
	// Фикс плавающего меню при горизонтальном скролле
	$(window).scroll(function(){
		$("#header #navigation").css('left',-$(window).scrollLeft());
	});
	
})(jQuery);
