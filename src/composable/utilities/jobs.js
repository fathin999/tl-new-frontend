export const calculatePageItems = (current, pages) => {
    let newPages = [];
    const items = 3;

    if (pages <= items) {
        // render like usual
        for (let i = 1; i <= pages; i++) {
            newPages.push({
                page: i,
                pos: "middle",
            });
        }
    }
    // must divide
    else {
        // current page at start range
        if (current <= 1) {
            for (let i = current; i <= items; i++) {
                newPages.push({
                    page: i,
                    pos: "middle",
                });
            }
            // add end number
            newPages.push({
                page: pages,
                pos: "end",
            });
        }
        // current page in the middle range
        else if (current <= pages - items + 1) {
            const start = current - 1;
            const end = parseInt(current) + 1;
            for (let i = start; i <= end; i++) {
                newPages.push({
                    page: i,
                    pos: "middle",
                });
            }
            if (current >= 3) {
                // add start number
                newPages.unshift({
                    page: 1,
                    pos: "start",
                });
            }

            // add end number
            newPages.push({
                page: pages,
                pos: "end",
            });
        }
        // current page at the end range
        else {
            for (let i = pages - items; i <= pages; i++) {
                if (i !== 1) {
                    newPages.push({
                        page: i,
                        pos: "middle",
                    });
                }
            }

            // add start number
            newPages.unshift({
                page: 1,
                pos: "start",
            });
        }
    }

    return newPages;
};

export const compareDates = (a_str, b_str) => {
    const a = new Date(a_str);
    const b = new Date(b_str);
    return b - a;
};

export const getTime = (time) => {
    const today = new Date();
    const created = new Date(time);
    const ms = Math.abs(today - created); // difference in milliseconds
    const days = Math.floor(ms / (3600000 * 24)); // milliseconds to days
    return `${days} days ago`;
};
