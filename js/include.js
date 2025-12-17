async function loadComponent(selector, url) {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(res.status);
        const html = await res.text();
        document.querySelector(selector).innerHTML = html;
    } catch (err) {
        console.error(`Component load failed: ${url}`, err);
    }
}
