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

function handleMenu() {
			
			const hamburgerIcon = document.getElementById('hamburger-icon');
			const mobileMenu    = document.getElementById('mobile-menu');

			if (hamburgerIcon) {
				console.log("Hamburger icon exists");
			} else {
				console.error("Hamburger icon not found");
			}

			hamburgerIcon.addEventListener('click', function(event) {
				event.stopPropagation();
				console.log("Hamburger icon clicked");
				if (mobileMenu.style.display === 'block') {
					mobileMenu.style.display = 'none';
					console.log("Hiding mobile menu");
				} else {
					mobileMenu.style.display = 'block';
					console.log("Showing mobile menu");
				}
			});

			window.addEventListener('click', function(event) {
				if (!event.target.closest('.mobile-nav') && !event.target.closest('#mobile-menu')) {
					mobileMenu.style.display = 'none';
					console.log("Click outside, hiding mobile menu");
				}
			});
		
	};

document.addEventListener("DOMContentLoaded", function() {
    loadHTML('header.html', 'header-placeholder');
    loadHTML('footer.html', 'footer-placeholder');
	handleMenu();
});

