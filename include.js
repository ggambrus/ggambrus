function loadHTML(file, elementId) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error fetching ${file}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error(error));
}

document.addEventListener("DOMContentLoaded", function() {
    loadHTML('header.html', 'header-placeholder');
    loadHTML('footer.html', 'footer-placeholder');
});
