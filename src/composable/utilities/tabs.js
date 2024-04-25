export const scrollToTab = (el, i) => {
    const btn = el.children[i];
    const btn_w = btn.getBoundingClientRect().width / 2;
    const offset = btn.offsetLeft - (window.innerWidth / 2 - btn_w);

    el.scrollTo({
        left: offset,
        behavior: "smooth",
    });
};
