document.addEventListener("DOMContentLoaded", function () {

	// Данные для доставки (таблица с табами на страницах: index.html и basket.html)
	const deliveryObj = [
		{
			"Moscow": {
				"pickup": {
					"date": "14.04.2020",
					"price": "0 Р",
				},
				"DPD": {
					"date": "13.04.2020",
					"price": "450 Р",
				},
				"Yandex": {
					"date": "14.04.2020",
					"price": "500 Р",
				},
			},
			"SPB": {
				"pickup": {
					"date": "15.04.2020",
					"price": "0 Р",
				},
				"DPD": {
					"date": "16.04.2020",
					"price": "650 Р",
				},
				"Yandex": {
					"date": "17.04.2020",
					"price": "700 Р",
				},
			},
			"Petrozavodsk": {
				"pickup": {
					"date": "17.04.2020",
					"price": "0 Р",
				},
				"DPD": {
					"date": "17.04.2020",
					"price": "750 Р",
				},
				"Yandex": {
					"date": "17.04.2020",
					"price": "800 Р",
				},
			},
		}
	];

	// Действующие промокоды
	const promocodesArr = [
		'PROMO1ALDOGA',
		'PROMO2ALDOGA',
		'PROMO31ALDOGA',
		'PROMO4ALDOGA',
		'PROMO5ALDOGA',
	];

	// Заказы с товарами (действует на страницах: orders.html...)
	const orders = [
		{
			'id': '12b92lk',
			'satatus': 'в обработке',
			'deliveryDate': '28.06.2020',
			'deliveryType': 'курьером до подъезда ООО "СДЭК"',
			'deliveryAddress': 'г. Москва, ул. Московская, д 1, кв. 186',
			'paymentType': 'картой на сайте',
			'goods': [
				{
					'name': 'Стейки форели',
					'tags': 'свежие, охлаждённые',
					'price': '3000 р',
					'amount': '1',
					'total': '3000 р',
				},
				{
					'name': 'Икра красная',
					'tags': 'свежая, солёная',
					'price': '100 р',
					'amount': '30',
					'total': '3000 р',
				},
				{
					'name': 'Форель охлаждённая',
					'tags': 'тушка потрошённая, без головы',
					'price': '500 р',
					'amount': '10',
					'total': '5000 р',
				},
				{
					'name': 'Сыр фермерский',
					'tags': 'сладковатый, ореховый',
					'price': '600 р',
					'amount': '3',
					'total': '1800 р',
				},
			]
		},
		{
			'id': '13b92lk',
			'satatus': 'в обработке',
			'deliveryDate': '29.06.2020',
			'deliveryType': 'Почта России',
			'deliveryAddress': 'г. Владивосток, Постышева 2, 41',
			'paymentType': 'при получении',
			'goods': [
				{
					'name': 'Икра форели',
					'tags': 'свежие',
					'price': '200 р',
					'amount': '10',
					'total': '2000 р',
				},
				{
					'name': 'Икра красная',
					'tags': 'свежая, солёная',
					'price': '100 р',
					'amount': '30',
					'total': '3000 р',
				},
				{
					'name': 'Форель охлаждённая',
					'tags': 'тушка потрошённая, без головы',
					'price': '500 р',
					'amount': '10',
					'total': '5000 р',
				},
				{
					'name': 'Сыр фермерский',
					'tags': 'сладковатый, ореховый',
					'price': '600 р',
					'amount': '3',
					'total': '1800 р',
				},
			]
		},
	];

	// Таблица с заказами. Работает на страницах: orders.html.
	// const ordersModule = (function () {

	$('#ordersSelectOrder input').change(function () {
		let $currentOrder = $(this).val();

		$('#ordersOptions .orders__options-order').removeClass('active');
		$('#ordersOptions .orders__options-order[data-order-options="' + $currentOrder + '"]').addClass('active');

		$('#ordersTables .basket-orders__table').removeClass('active');
		$('#ordersTables .basket-orders__table[data-order-goods="' + $currentOrder + '"]').addClass('active');

	});

	// Копирование промокода в футере
	const promoBannermodule = (function () {

		$('#promoBannerForm input').click(function () {
			var promoInput = document.querySelector("#promoBannerForm input");
			/* Select the text field */
			promoInput.select();
			/* Copy the text inside the text field */
			document.execCommand("copy");
			$('#promoBannerForm label').text('СКОПИРОВАННО');
			setTimeout(() => {
				$('#promoBannerForm label').text('Скопировать Промокод');
			}, 1000);
		});

		$('#promoBannerFormSmall input').click(function () {
			var promoInput2 = document.querySelector("#promoBannerFormSmall input");
			/* Select the text field */
			promoInput2.select();
			/* Copy the text inside the text field */
			document.execCommand("copy");
			$('#promoBannerFormSmall label').text('СКОПИРОВАННО');
			setTimeout(() => {
				$('#promoBannerFormSmall label').text('Скопировать Промокод');
			}, 1000);
		});

	}());

	// Применение промокода на странице basket.html
	const promoBasketModule = (function () {
		$('#promoBasket button').click(function () {
			for (const i of promocodesArr) {
				if ($('#promoBasket input').val() === i) {
					$('#promoBasket input').val("");
					$('#promoBasket input').attr("placeholder", "Промокод применен");
					break;
				} else {
					$('#promoBasket input').val("");
					$('#promoBasket input').attr("placeholder", "Несуществующий промокод");
					break;
				}
			}
		})
	}());

	// Бургер-меню в шапке
	const hamburgerModule = (function () {
		$('#hamburger').click(function () {
			$(this).toggleClass('is-active');
			$('#hamburgerOverlay').toggleClass('active');
		});
	}());

	// Статус заказа в шапке
	const statusModule = (function () {
		$("#statusBtn").click(function () {
			$("#statusOverlay1").toggleClass("active");
			$("#statusOverlay2").removeClass("active");

			if ($("#statusOverlay1").hasClass('active')) {
				$("#statusOverlay2").removeClass("active");
			}
			if ($("#statusOverlay2").hasClass('active')) {
				$("#statusOverlay1").removeClass("active");
			}
		});
		$("#statusBtnGetCode").click(function () {
			if ($.trim($('#statusInputGetCode').val())) {
				$("#statusOverlay1").removeClass("active");
				$("#statusOverlay2").addClass("active");
				$('#statusOverlayPhoneChecker').text($('#statusInputGetCode').val());
			}
		});
	}());

	// Корзина в шапке
	const basketModule = (function () {
		$('#basket').click(function () {
			$('#basketOverlay').toggleClass('active');
		});
	}());

	const bannerSliderModule = (function () {
		$(".main-banner__carousel").owlCarousel({
			lazyLoad: true,
			items: 1,
			navigation: true,
			navigationText: ["", ""],
			mouseDrag: false,
			touchDrag: false,
			loop: true,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			animateIn: 'fadeIn', // add this
			animateOut: 'fadeOut' // and this
		});
	}());

	const aboutReviewsSliderModule = (function () {
		$('#aboutReviews').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			items: 3,
			dots: false,
			responsive: {
				0: {
					items: 1,
					margin: 0
				},
				576: {
					items: 2,
					margin: 30
				},
				992: {
					items: 3
				}
			}
		});
	}());

	// Таблица с доставкой по городам на главной
	const deliveryModule = (function () {
		$('#deliveryTabs input').click(function () {
			let x = $(this).val();
			if (x === 'moscow') {
				$('#deliveryDatePickup').text(deliveryObj[0].Moscow.pickup.date);
				$('#deliveryPricePickup').text(deliveryObj[0].Moscow.pickup.price);
				$('#deliveryDateDPD').text(deliveryObj[0].Moscow.DPD.date);
				$('#deliveryPriceDPD').text(deliveryObj[0].Moscow.DPD.price);
				$('#deliveryDateYandex').text(deliveryObj[0].Moscow.Yandex.date);
				$('#deliveryPriceYandex').text(deliveryObj[0].Moscow.Yandex.price);
			} else if (x === 'spb') {
				$('#deliveryDatePickup').text(deliveryObj[0].SPB.pickup.date);
				$('#deliveryPricePickup').text(deliveryObj[0].SPB.pickup.price);
				$('#deliveryDateDPD').text(deliveryObj[0].SPB.DPD.date);
				$('#deliveryPriceDPD').text(deliveryObj[0].SPB.DPD.price);
				$('#deliveryDateYandex').text(deliveryObj[0].SPB.Yandex.date);
				$('#deliveryPriceYandex').text(deliveryObj[0].SPB.Yandex.price);
			} else if (x === 'petrozavodsk') {
				$('#deliveryDatePickup').text(deliveryObj[0].Petrozavodsk.pickup.date);
				$('#deliveryPricePickup').text(deliveryObj[0].Petrozavodsk.pickup.price);
				$('#deliveryDateDPD').text(deliveryObj[0].Petrozavodsk.DPD.date);
				$('#deliveryPriceDPD').text(deliveryObj[0].Petrozavodsk.DPD.price);
				$('#deliveryDateYandex').text(deliveryObj[0].Petrozavodsk.Yandex.date);
				$('#deliveryPriceYandex').text(deliveryObj[0].Petrozavodsk.Yandex.price);
			}
		});


		$('#deliverySlider').owlCarousel({
			loop: true,
			margin: 0,
			nav: true,
			items: 1,
			dots: false
		});

	}());

	// Оформление заказа - (Табы с выбором города и формой обратной связи)
	const checkoutFormModule = (function () {
		$('#checkoutFormCities input').click(function () {
			let x = $(this).val();
			if (x === 'moscow') {
				$('#checkouPickupDate').text(deliveryObj[0].Moscow.pickup.date);
				$('#checkouPickupPrice').text(deliveryObj[0].Moscow.pickup.price);

				$('#checkouDateDPD').text(deliveryObj[0].Moscow.DPD.date);
				$('#checkouPriceDPD').text(deliveryObj[0].Moscow.DPD.price);

				$('#checkouDateYandex').text(deliveryObj[0].Moscow.Yandex.date);
				$('#checkouPriceYandex').text(deliveryObj[0].Moscow.Yandex.price);

			} else if (x === 'spb') {
				$('#checkouPickupDate').text(deliveryObj[0].SPB.pickup.date);
				$('#checkouPickupPrice').text(deliveryObj[0].SPB.pickup.price);

				$('#checkouDateDPD').text(deliveryObj[0].SPB.DPD.date);
				$('#checkouPriceDPD').text(deliveryObj[0].SPB.DPD.price);

				$('#checkouDateYandex').text(deliveryObj[0].SPB.Yandex.date);
				$('#checkouPriceYandex').text(deliveryObj[0].SPB.Yandex.price);

			} else if (x === 'petrozavodsk') {
				$('#checkouPickupDate').text(deliveryObj[0].Petrozavodsk.pickup.date);
				$('#checkouPickupPrice').text(deliveryObj[0].Petrozavodsk.pickup.price);

				$('#checkouDateDPD').text(deliveryObj[0].Petrozavodsk.DPD.date);
				$('#checkouPriceDPD').text(deliveryObj[0].Petrozavodsk.DPD.price);

				$('#checkouDateYandex').text(deliveryObj[0].Petrozavodsk.Yandex.date);
				$('#checkouPriceYandex').text(deliveryObj[0].Petrozavodsk.Yandex.price);
			}
		})
	}());

	// Ленивая загрузка изображений
	const lazyLoadModule = (function () {
		var lazyLoadInstance = new LazyLoad({
			elements_selector: ".lazy"
		});
	}());

	// Счетчик для товара
	const siteCounterModule = (function () {
		$('.site-counter__control_minus').click(function () {
			let x = $(this).next('.site-counter__input').val();
			$(this).next('.site-counter__input').val(parseInt(x) - 1);
			$(this).next('.site-counter__input').attr('value', parseInt(x) - 1);
			if (x <= 0) {
				$(this).next('.site-counter__input').val(0);
				$(this).next('.site-counter__input').attr('value', 0)
			}
		});
		$('.site-counter__control_plus').click(function () {
			let x = $(this).prev('.site-counter__input').val();
			$(this).prev('.site-counter__input').val(parseInt(x) + 1);
			$(this).prev('.site-counter__input').attr('value', parseInt(x) + 1);
		});
	}());

	// Аспектное соотношения для видуо проигрываетеля
	const aspectRatioModule = (function () {
		$('p iframe').each(function () {
			$(this).parent().addClass('aspect-ratio');
		});
	}());

	// Слайдер с изображениями на странице article.html
	const mainSectionSliderModule = (function () {
		$('#mainSectionSlider').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			autoHeight: false,
			items: 3,
			dots: false,
			responsive: {
				0: {
					items: 2,
					margin: 10
				},
				576: {
					items: 2,
					margin: 20
				},
				768: {
					items: 3,
					margin: 30
				}
			}
		});
	}());

	// not used
	const sweetAlertsModule = (function () {
	}());

	// яндекс карты
	const mapModule = (function () {
		let m = $('.header__wrapper').css('margin-right');
		$('.contact-map__cart').css('margin-right', m);

		if (parseInt(m) <= 20) {
			$('.contact-map__cart').css('margin-right', '20px');
		}

	}());

	// fancybox 
	const fancyboxModule = (function () {
		$('[data-fancybox="cart"]').fancybox({
			thumbs: {
				autoStart: true,
				infobar: true,
			}
		});

	}());

	// Слайдер на страницах: cart.html
	const popularGoodsCardSliderModule = (function () {
		$('#popularGoodsCardSlider').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			items: 3,
			dots: false,
			responsive: {
				0: {
					items: 1,
					margin: 0
				},
				576: {
					items: 2,
					margin: 20
				},
				990: {
					items: 3,
					margin: 30
				}
			}
		});
	}());

	// модальные окна
	const modalsModule = (function () {

		// закрыть оверлей со всеми окнами
		$('[data-bind="overlay"]').click(function () {
			$(this).removeClass('active');
			$('[data-type="modal"').removeClass('active');
		});

		// переход на - задать вопрос
		$('[data-bind="modal_question_button"]').click(function () {
			$('[data-bind="modal_question"]').toggleClass('active');
			$('.site-overlay').toggleClass('active');
		});

		// переход на - смотреть отзыв
		$('[data-bind="modal_review_button"]').click(function () {
			$('[data-bind="modal_review"]').toggleClass('active');
			$('.site-overlay').toggleClass('active');

			let $parent_review = $(this).parent();
			let author_name = $parent_review.find('[data-bind="author-name"]').text();
			let author_text = $parent_review.find('[data-bind="author-text"]').text();

			let $parent_modal = $('[data-bind="modal_review"]');
			let modal_name = $parent_modal.find('[data-bind="author-name"]');
			let modal_text = $parent_modal.find('[data-bind="author-text"]');
			modal_name.text(author_name);
			modal_text.text(author_text);

			author - thumbnails
			author - img - fancy
			author - img

			author - main - img - fancy
			author - main - img

		});

		// переход на - оставить отзыв
		$('[data-bind="modal_leave_review_button"]').click(function () {
			$('[data-bind="modal_leave_review"]').toggleClass('active');
			$('.site-overlay').toggleClass('active');
		});

		// переход на - отпрака успешна
		$('[data-bind="modal_success_button"]').click(function () {
			$('[data-bind="modal_success"]').toggleClass('active');
			$('.site-overlay').toggleClass('active');
		});

		// переход на - отпрака успешна
		$('[data-bind="modal_success_order_button"]').click(function () {
			$('[data-bind="modal_success_order"]').toggleClass('active');
			$('.site-overlay').toggleClass('active');
		});

		// кнопка - закрыть окно
		$('[data-bind="modal_close"]').click(function () {
			$('[data-type="modal"]').removeClass('active');
			$('.site-overlay').removeClass('active');
		});


	}());

	// кастомный инпут
	const customInputModule = (function () {

		var inputs = document.querySelectorAll('#file');
		Array.prototype.forEach.call(inputs, function (input) {
			var label = input.nextElementSibling,
				labelVal = label.innerHTML;
			input.addEventListener('change', function (e) {
				var fileName = '';
				if (this.files && this.files.length > 1)
					fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
				else
					fileName = e.target.value.split('\\').pop();
				if (fileName)
					label.querySelector('[data-bind="help"]').innerHTML = fileName;
				else
					label.innerHTML = labelVal;
			});
		});


	}());

	$(window).resize(function () {
		let m = $('.header__wrapper').css('margin-right');

		$('.contact-map__cart').css('margin-right', m);

		if (parseInt(m) <= 20) {
			$('.contact-map__cart').css('margin-right', '20px');
		}
	});

	if ($(window).width() <= 991) {
		const popularGoodsSliderModule = (function () {
			$('#popularGoodsSlider').owlCarousel({
				loop: true,
				margin: 30,
				nav: true,
				items: 2,
				dots: false,
				responsive: {
					0: {
						items: 1
					},
					576: {
						items: 2
					},
					990: {
						onResize: function () {
							$('#popularGoodsSlider').trigger('destroy.owl.carousel');
							$('#popularGoodsSlider').removeClass('owl-theme owl-carousel');
						}
					}
				}
			});
		}());
	}

	// Сортировка и фильтр на страницах: catalog.html
	const filterModule = (function () {

		var sortByAscending = true;

		var $grid = $('.catalog__list').isotope({
			itemSelector: '.goods-list__item_catalog',
			layoutMode: 'fitRows',
			getSortData: {
				name: '.name',
				symbol: '.symbol',
				number: '.number parseInt',
				category: '[data-category]',
				weight: function (itemElem) {
					var weight = $(itemElem).find('.weight').text();
					return parseFloat(weight.replace(/[\(\)]/g, ''));
				}
			}
		});

		$('.catalog__sorting-btn').on('click', function () {

			$('#catalogIsotope').addClass('active');
			$('#catalogPreloader').addClass('active');

			setTimeout(() => {
				sortByAscending = !sortByAscending;
				var sortValue = $(this).attr('data-sort-value');

				$('.catalog__sorting-btn').toggleClass('active');

				if (sortByAscending === true) {
					$grid.isotope({
						sortBy: sortValue,
						sortAscending: false
					});

				} else {
					$grid.isotope({
						sortBy: sortValue,
						sortAscending: true
					});
				}
			}, 150);

			setTimeout(() => {
				$('#catalogPreloader').removeClass('active');
				$('#catalogIsotope').removeClass('active');
			}, 750);

		});


		// Фильтр
		$('.catalog__filter button').click(function () {

			$('#catalogIsotope').addClass('active');
			$('#catalogPreloader').addClass('active');

			setTimeout(() => {
				$('.catalog__filter button').removeClass('active');
				$(this).addClass('active');

				let selector = $(this).attr('data-filter');
				$('.catalog__list').isotope({
					filter: selector
				});
			}, 150);

			setTimeout(() => {
				$('#catalogPreloader').removeClass('active');
				$('#catalogIsotope').removeClass('active');
			}, 750);

			return false;
		});


	}());

	// Форма отправки feedback_form на страницах: contacts.html
	const feedbackFormModule = (function () {

		let $form = $('#feedback_form');
		let $name = $form.find('[data-input="name"]');
		let $email = $form.find('[data-input="email"]');
		let $phone = $form.find('[data-input="phone"]');
		let $message = $form.find('[data-input="message"]');
		let $success = $form.find('[data-input="success"]');
		let $checkbox = $form.find('[data-input="checkbox"]');

	}());
});
