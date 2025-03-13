async function fetchPublications() {
    try {
        //const response = await fetch("http://127.0.0.1:5000/publications");
        const response = await fetch("https://vgnetv2-1.onrender.com/publications");
        
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Failed to fetch data");
        }

        const infoContainer = document.querySelector('.publications');
        infoContainer.innerHTML = ''; // Clear existing content

        data.forEach((publication) => {
            const infoBox = document.createElement('div');
            infoBox.classList.add('info-box');

            // Create elements
            const authors = document.createElement('h4');
            authors.textContent = publication.authors;

            const title = document.createElement('h2');
            title.textContent = publication.paperName;

            const date = document.createElement('p');
            date.textContent = publication.date;

            // Append elements
            infoBox.appendChild(authors);
            infoBox.appendChild(title);
            infoBox.appendChild(date);
            infoContainer.appendChild(infoBox);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

async function fetchProjects() {
    try {
        const response = await fetch("https://vgnetv2-1.onrender.com/projects");
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Failed to fetch data");
        }

        const infoContainer = document.querySelector('.projects');
        infoContainer.innerHTML = ''; // Clear existing content

        data.forEach((project) => {
            const infoBox = document.createElement('div');
            infoBox.classList.add('info-box');

            // Create elements
            const title = document.createElement('h3');
            title.textContent = project.title;

            const desc = document.createElement('p');
            desc.textContent = project.desc;

            // Append elements
            infoBox.appendChild(title);
            infoBox.appendChild(desc);
            infoContainer.appendChild(infoBox);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

async function fetchCollab() {
    try {
        const response = await fetch("https://vgnetv2-1.onrender.com/collabs");
        const data = await response.json();
        console.log("Projects data:", data); // Debug output

        if (!response.ok) {
            throw new Error(data.error || "Failed to fetch data");
        }

        const infoContainer = document.querySelector('.collabs');
        infoContainer.innerHTML = ''; // Clear existing content

        data.forEach((project) => {


            // Create elements
            const title = document.createElement('h2');
            title.textContent = project.collab;

            const desc = document.createElement('p');
            desc.textContent = project.desc;

            infoContainer.appendChild(title);
            infoContainer.appendChild(desc);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}







