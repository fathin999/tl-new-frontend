export const scrollToTab = (scroll, container, i) => {
    const btn = container.children[i];
    const btn_w = btn.getBoundingClientRect().width / 2;
    const offset = btn.offsetLeft - (window.innerWidth / 2 - btn_w);

    scroll.scrollTo({
        left: offset,
        behavior: "smooth",
    });
};

export const scrollToSection = (el) => {
    window.scrollTo({
        top: el.offsetTop - 110,
        behavior: "smooth",
    });
};
