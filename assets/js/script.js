// if you use jQuery, you need to start your .js file with this.
// otherwise you can delete everything here.
$(document).ready(function() {

    // functions go here
    
    });
    
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        const bodyHeight = document.body.clientHeight;
        const windowHeight = window.innerHeight;
    
        const scrollPercentage = scrolled / (bodyHeight - windowHeight);
        const bgPosition = scrollPercentage * 100;
    
        document.body.style.backgroundPositionY = bgPosition + '%';
    });
    
    window.addEventListener('load', function() {
        const footnotes = document.querySelectorAll('.footnotes');
    
        footnotes.forEach(function(footnote) {
            const previousParagraph = footnote.previousElementSibling;
            
            if (previousParagraph && previousParagraph.tagName === 'P') {
                // Calculate the offset of the previous paragraph
                const offsetTop = previousParagraph.offsetTop;
    
                // Set the top position of the footnote to match the top of the previous paragraph
                footnote.style.top = offsetTop + 'px';
                // footnote.style.display = 'block'; // Show the footnote
            }
        });
    });

    // test navigation
 
    
    // document.addEventListener("DOMContentLoaded", function() {
    //     const toggleNavButton = document.getElementById("toggle-nav");
    //     const mainNav = document.getElementById("main-nav");
      
    //     toggleNavButton.addEventListener("click", function() {
    //       mainNav.classList.toggle("open");
    //     });
    //   });

