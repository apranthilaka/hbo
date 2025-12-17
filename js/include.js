async function loadComponent(selector, url) {
    const res = await fetch(url);
    if (!res.ok) {
        console.error(`Failed to load ${url}`);
        return;
    }
    const html = await res.text();
    document.querySelector(selector).innerHTML = html;
}
