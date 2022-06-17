// Находим элементы на странице
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const count = document.querySelector('.number')

// Отслеживаем клик на кнопку btnMinus
minus.addEventListener('click', function () {

    // Проверяем чтобы счетчик был больше 1
    if (parseInt(count.innerText) > 1) {
		// Изменяем текст в счетчике уменьшая его на 1
		count.innerText = --count.innerText;
	}

});

// Отслеживаем клик на кнопку btnPlus
plus.addEventListener('click', function () {
	// Изменяем текст в счетчике увеличивая его на 1
	count.innerText = ++count.innerText;
})

