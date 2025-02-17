
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      '0': { 
        slidesPerView: 1,
      },

      '320': { 
        slidesPerView: 1,
      },
      '720': { 
        slidesPerView: 2,
      },
      '1920': { 
        slidesPerView: 3,
      }
    }
});

//Код слайдера

function buttonClick(elem) {
    elem.value = "Тариф выбран";
    elem.style.background = "#0099C8";
}

//Код Кнопки

const priceCheckboxes = document.querySelectorAll('.price-checkbox');

priceCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const slide = this.closest('.swiper-slide');
        const slideNumber = parseInt(slide.dataset.slide);
        const priceElement = slide.querySelector('.price-value');
        const basePrice = parseInt(priceElement.dataset.basePrice);
        let newPrice = basePrice;
        if ((slideNumber === 1 || slideNumber === 3 || slideNumber === 4) && this.checked) {
            newPrice = basePrice + 100;
        } else if (slideNumber === 2 && this.checked) {
            newPrice = basePrice + 100;
        } else {
            newPrice = basePrice;
        }
        priceElement.textContent = newPrice + ' ₽';
    });
});

//Код чекбокса (для добавления цены)




