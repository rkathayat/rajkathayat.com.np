document.getElementById('nextButton').addEventListener('click', function() {
    // Replace with the actual IDs of your sections
    var sections = ['index', 'about', 'skills', 'projects', 'contacts'];
    
    var currentSection = document.querySelector('.current-section');
    var currentIndex = sections.indexOf(currentSection.id);
    
    if (currentIndex >= 0 && currentIndex < sections.length - 1) {
        var nextSection = document.getElementById(sections[currentIndex + 1]);
        nextSection.scrollIntoView({ behavior: 'smooth' });
        currentSection.classList.remove('current-section');
        nextSection.classList.add('current-section');
    }
});