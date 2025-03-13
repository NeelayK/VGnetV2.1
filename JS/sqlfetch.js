async function fetchPublications() {
    try {
        const response = await fetch("http://127.0.0.1:5000/publications"); // Flask API
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



