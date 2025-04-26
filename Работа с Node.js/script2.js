document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const container = this.previousElementSibling;
        if (container && container.classList.contains('text-container')) {
            container.remove();
        }
    });
});