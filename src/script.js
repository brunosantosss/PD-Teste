document.addEventListener("DOMContentLoaded", () => {
    const pages = document.querySelectorAll(".form-page");
    let currentPage = 0;

    function showPage(index) {
        pages.forEach((page, i) => {
            page.classList.toggle("hidden", i !== index);
        });
    }

    document.querySelectorAll(".next-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            if (currentPage < pages.length - 1) {
                currentPage ++;
                showPage(currentPage);
            }
        });
    });

    document.querySelectorAll(".prev-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            if (currentPage > 0) {
                currentPage --;
                showPage(currentPage);
            }
        });
    });

    showPage(currentPage);
    
    // Parte de criar a bolinha na lesão
    const image = document.getElementById('lesao-img');
    const container = document.getElementById('lesao-container');
    
    image.addEventListener('click', (event) => {
        const rect = image.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
    
        const dot = document.createElement('div');
        dot.classList.add('absolute', 'bg-red-500', 'rounded-full');
        dot.style.width = '10px';
        dot.style.height = '10px';
        dot.style.left = `${x - 5}px`;
        dot.style.top = `${y - 5}px`;
        
        container.appendChild(dot);
    });
});
