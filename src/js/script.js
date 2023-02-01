const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percent = document.querySelectorAll('.skill__progress_block_percent'),
    lines = document.querySelectorAll('.skill__progress_scale span');

percent.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});