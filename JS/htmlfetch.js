// Function to Load External HTML Content
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${file}:`, error));
}

// Load Header and Footer on Page Load
document.addEventListener("DOMContentLoaded", function () {
    loadComponent("header", "header.html");
    loadComponent("footer", "footer.html");
    loadPage("home"); // Load home page by default
    
});

// Function to Load Page Content Dynamically
function loadPage(page) {
    let pageFile = `${page}.html`;
    
    fetch(pageFile)
        .then(response => response.text())
        .then(data => {
            
            window.scrollTo({ top: 0, behavior: "smooth" });
            document.getElementById("content").innerHTML = data;
            // Check if missionCanvas exists in the newly loaded content

            //homepage mission canvas
            if (document.getElementById("missionCanvas")) {
                canvasLoad();
            }

            if (document.querySelector(".publications")) {
                fetchPublications();
            }
            
            handleScroll();
        })
        .catch(error => console.error(`Error loading ${pageFile}:`, error));
}

