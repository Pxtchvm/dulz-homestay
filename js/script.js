// script.js for Dulz Homestay

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggleButton = document.getElementById('dark-mode-toggle');
    const mobileMenuToggleButton = document.getElementById('mobile-menu-toggle');
    const mobileNavPanel = document.getElementById('mobile-nav-panel');
    const body = document.body;

    // --- Dark Mode Logic ---
    // Function to apply the theme
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            if (darkModeToggleButton) darkModeToggleButton.textContent = 'Light Mode'; // Update button text
        } else {
            body.classList.remove('dark-mode');
            if (darkModeToggleButton) darkModeToggleButton.textContent = 'Dark Mode'; // Update button text
        }
    };

    if (darkModeToggleButton) {
        // Check localStorage for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            applyTheme(savedTheme);
        } else {
            // Optional: Check for system preference if no theme is saved
            // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            // if (prefersDark) {
            //     applyTheme('dark');
            //     localStorage.setItem('theme', 'dark');
            // } else {
                 applyTheme('light'); // Default to light if nothing saved
            // }
        }

        // Add event listener to the dark mode toggle button
        darkModeToggleButton.addEventListener('click', () => {
            let newTheme;
            if (body.classList.contains('dark-mode')) {
                newTheme = 'light';
            } else {
                newTheme = 'dark';
            }
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme); // Save the new theme preference
        });
    } else {
        console.warn("Dark mode toggle button not found.");
    }

    // --- Mobile Menu Logic ---
    if (mobileMenuToggleButton && mobileNavPanel) {
        mobileMenuToggleButton.addEventListener('click', () => {
            mobileNavPanel.classList.toggle('active'); // Toggle the 'active' class
            // Optional: Change hamburger icon to 'X' when open
            if (mobileNavPanel.classList.contains('active')) {
                mobileMenuToggleButton.textContent = '✕'; // Close icon
            } else {
                mobileMenuToggleButton.textContent = '☰'; // Hamburger icon
            }
        });

        // Optional: Close mobile menu when a link is clicked
        mobileNavPanel.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNavPanel.classList.remove('active');
                mobileMenuToggleButton.textContent = '☰'; // Reset hamburger icon
            });
        });

    } else {
         console.warn("Mobile menu toggle button or panel not found.");
    }


    console.log("Dulz Homestay script loaded. Handlers attached.");
});
