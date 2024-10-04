
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('projectForm');
    const projectList = document.getElementById('projectList');

    // Load projects from local storage on page load
    loadProjects();

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('projectName').value;
        const url = document.getElementById('projectUrl').value;
        const image = document.getElementById('projectImage').files[0];

        if (!image) {
            alert('Please select an image.');
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            const newProject = {
                id: Date.now(),
                name,
                url,
                image: reader.result
            };

            const projects = getProjects();
            projects.push(newProject);
            saveProjects(projects);

            // Refresh the project list
            loadProjects();
        };
        reader.readAsDataURL(image); // Convert image to base64
    });

    function loadProjects() {
        const projects = getProjects();
        projectList.innerHTML = '';
        projects.forEach(project => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.innerHTML = `
                <div>
                    <h5>${project.name}</h5>
                    <p><a href="${project.url}" target="_blank">${project.url}</a></p>
                    <img src="${project.image}" alt="${project.name}" style="width: 100px;">
                </div>
                <button class="btn btn-danger btn-sm" onclick="deleteProject(${project.id})">Delete</button>
            `;
            projectList.appendChild(li);
        });
    }

    window.deleteProject = (id) => {
        const projects = getProjects();
        const updatedProjects = projects.filter(p => p.id !== id);
        saveProjects(updatedProjects);

        // Refresh the project list
        loadProjects();
    };

    function getProjects() {
        return JSON.parse(localStorage.getItem('projects')) || [];
    }

    function saveProjects(projects) {
        localStorage.setItem('projects', JSON.stringify(projects));
    }
});
