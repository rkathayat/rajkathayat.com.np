document.getElementById('nextButton').addEventListener('click', function() {
    // Replace with the actual URLs of your pages
    var pages = ['index.html', 'skills.html', 'projects.html', 'about.html'];
    
    var currentPage = window.location.href.split('/').pop();
    var pageIndex = pages.indexOf(currentPage);
    
    if (pageIndex >= 0 && pageIndex < pages.length - 1) {
        window.location.href = pages[pageIndex + 1];
    }
});