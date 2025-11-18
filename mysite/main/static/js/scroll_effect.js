document.addEventListener("scroll", () => {

    const scroll = window.scrollY;
    const maxT = 400;
    const t = Math.min(scroll / maxT, 1);

    const hero = document.querySelector(".hero-section");
    const about = document.querySelector(".about-section");

    /* Плавне зникнення першого */
    hero.style.opacity = 1 - t;
    hero.style.transform = `scale(${1 - t * 0.05})`;

    /* Плавне появлення другого */
    about.style.opacity = t;
    about.style.transform = `translateY(${40 - t * 40}px)`;

    /* Перекриття по скролу */
    if (t > 0.4) {
        about.style.zIndex = 10;    // 🔥 другий над першим
        hero.style.zIndex = 1;      // піднятий вниз
    } else {
        about.style.zIndex = 1;     // другий знову під першим
        hero.style.zIndex = 5;
    }
});
