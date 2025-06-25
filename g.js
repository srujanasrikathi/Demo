document.addEventListener('DOMContentLoaded', function () {
    // Tab functionality
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Hide all tab content
            tabContents.forEach(content => content.style.display = 'none');

            // Activate the clicked tab
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).style.display = 'block';
        });
    });

    // Add Image Button functionality for the Gallery
    const addImageBtn = document.getElementById('addImageBtn');
    const gallery = document.querySelector('.gallery');

    addImageBtn.addEventListener('click', function () {
        const newImage = document.createElement('div');
        newImage.className = 'gallery-item';
        newImage.textContent = `Image ${gallery.children.length + 1}`;
        gallery.appendChild(newImage);
    });
});
