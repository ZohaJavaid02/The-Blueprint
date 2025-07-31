document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    const experienceFields = document.getElementById('experience-fields');
    const addExperienceButton = document.getElementById('add-experience');

    const educationFields = document.getElementById('education-fields');
    const addEducationButton = document.getElementById('add-education');

    const generateResumeButton = document.getElementById('generate-resume');
    const resumeContent = document.getElementById('resume-content');

    const profilePictureInput = document.getElementById('profile-picture');
    const profilePreview = document.getElementById('profile-preview');

    const skillsFields = document.getElementById('skills-fields');
    const addSkillButton = document.getElementById('add-skill');

    const projectsFields = document.getElementById('projects-fields');
    const addProjectButton = document.getElementById('add-project');

    const certificatesFields = document.getElementById('certificates-fields');
    const addCertificateButton = document.getElementById('add-certificate');

    const summaryInput = document.getElementById('summary');
    const downloadResumeButton = document.getElementById('download-resume');

    // Handle profile picture upload
    profilePictureInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profilePreview.src = e.target.result;
                profilePreview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else {
            profilePreview.src = '#';
            profilePreview.style.display = 'none';
        }
    });

    // Add experience
    addExperienceButton.addEventListener('click', () => {
        const experienceItem = document.createElement('div');
        experienceItem.classList.add('experience-item');
        experienceItem.innerHTML = `
            <input type="text" class="company" placeholder="Company">
            <input type="text" class="position" placeholder="Position">
            <textarea class="description" placeholder="Description"></textarea>
        `;
        experienceFields.appendChild(experienceItem);
    });

    // Add education
    addEducationButton.addEventListener('click', () => {
        const educationItem = document.createElement('div');
        educationItem.classList.add('education-item');
        educationItem.innerHTML = `
            <input type="text" class="school" placeholder="School">
            <input type="text" class="degree" placeholder="Degree">
            <input type="text" class="year" placeholder="Year">
        `;
        educationFields.appendChild(educationItem);
    });

    // Add skill
    addSkillButton.addEventListener('click', () => {
        const skillInput = document.createElement('input');
        skillInput.type = 'text';
        skillInput.classList.add('skill');
        skillInput.placeholder = 'Skill';
        skillsFields.appendChild(skillInput);
    });

    // Add project
    addProjectButton.addEventListener('click', () => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        projectItem.innerHTML = `
            <input type="text" class="project-name" placeholder="Project Name">
            <textarea class="project-description" placeholder="Project Description"></textarea>
        `;
        projectsFields.appendChild(projectItem);
    });

    // Add certificate
    addCertificateButton.addEventListener('click', () => {
        const certificateInput = document.createElement('input');
        certificateInput.type = 'text';
        certificateInput.classList.add('certificate');
        certificateInput.placeholder = 'Certificate Name';
        certificatesFields.appendChild(certificateInput);
    });

    // Generate resume content
    generateResumeButton.addEventListener('click', () => {
        const name = nameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;
        const summary = summaryInput.value;

        let experienceText = '';
        document.querySelectorAll('.experience-item').forEach(item => {
            const company = item.querySelector('.company').value;
            const position = item.querySelector('.position').value;
            const description = item.querySelector('.description').value;
            if (company || position || description) {
                experienceText += `<div style="margin-bottom: 15px;"><strong>Company:</strong> ${company}<br><strong>Position:</strong> ${position}<br><strong>Description:</strong> ${description}</div>`;
            }
        });

        let educationText = '';
        document.querySelectorAll('.education-item').forEach(item => {
            const school = item.querySelector('.school').value;
            const degree = item.querySelector('.degree').value;
            const year = item.querySelector('.year').value;
            if (school || degree || year) {
                educationText += `<div style="margin-bottom: 15px;"><strong>School:</strong> ${school}<br><strong>Degree:</strong> ${degree}<br><strong>Year:</strong> ${year}</div>`;
            }
        });

        let skillsText = '';
        document.querySelectorAll('.skill').forEach(skill => {
            if (skill.value.trim()) {
                skillsText += `${skill.value}, `;
            }
        });
        if (skillsText) {
            skillsText = skillsText.slice(0, -2); // Remove last comma and space
        }

        let projectsText = '';
        document.querySelectorAll('.project-item').forEach(item => {
            const projectName = item.querySelector('.project-name').value;
            const projectDescription = item.querySelector('.project-description').value;
            if (projectName || projectDescription) {
                projectsText += `<div style="margin-bottom: 15px;"><strong>Project:</strong> ${projectName}<br><strong>Description:</strong> ${projectDescription}</div>`;
            }
        });

        let certificatesText = '';
        document.querySelectorAll('.certificate').forEach(certificate => {
            if (certificate.value.trim()) {
                certificatesText += `${certificate.value}, `;
            }
        });
        if (certificatesText) {
            certificatesText = certificatesText.slice(0, -2); // Remove last comma and space
        }

        const profilePictureSrc = profilePreview.src;
        let resumeContentHTML = '<div style="text-align: center; margin-bottom: 30px;">';

        // Add profile picture if exists
        if (profilePictureSrc && profilePictureSrc !== '#' && profilePictureSrc !== window.location.href) {
            resumeContentHTML += `<img src="${profilePictureSrc}" alt="Profile Picture" style="width: 120px; height: 120px; border-radius: 50%; margin-bottom: 20px; object-fit: cover; border: 2px solid #ccc;">`;
        }

        resumeContentHTML += `
            <h2 style="margin: 0; color: #333; font-size: 24px;">${name}</h2>
            <p style="margin: 5px 0; color: #666;">${email} | ${phone}</p>
            </div>
        `;

        if (summary) {
            resumeContentHTML += `<div style="margin-bottom: 25px;"><h3 style="color: #1e88e5; border-bottom: 2px solid #1e88e5; padding-bottom: 5px;">Summary</h3><p>${summary}</p></div>`;
        }

        if (experienceText) {
            resumeContentHTML += `<div style="margin-bottom: 25px;"><h3 style="color: #1e88e5; border-bottom: 2px solid #1e88e5; padding-bottom: 5px;">Experience</h3>${experienceText}</div>`;
        }

        if (educationText) {
            resumeContentHTML += `<div style="margin-bottom: 25px;"><h3 style="color: #1e88e5; border-bottom: 2px solid #1e88e5; padding-bottom: 5px;">Education</h3>${educationText}</div>`;
        }

        if (skillsText) {
            resumeContentHTML += `<div style="margin-bottom: 25px;"><h3 style="color: #1e88e5; border-bottom: 2px solid #1e88e5; padding-bottom: 5px;">Skills</h3><p>${skillsText}</p></div>`;
        }

        if (projectsText) {
            resumeContentHTML += `<div style="margin-bottom: 25px;"><h3 style="color: #1e88e5; border-bottom: 2px solid #1e88e5; padding-bottom: 5px;">Projects</h3>${projectsText}</div>`;
        }

        if (certificatesText) {
            resumeContentHTML += `<div style="margin-bottom: 25px;"><h3 style="color: #1e88e5; border-bottom: 2px solid #1e88e5; padding-bottom: 5px;">Certificates</h3><p>${certificatesText}</p></div>`;
        }

        resumeContent.innerHTML = resumeContentHTML;
    });

    // Download Resume with better print handling
    downloadResumeButton.addEventListener('click', async () => {
        // Generate resume if not already generated
        if (resumeContent.innerHTML.trim() === '') {
            generateResumeButton.click();
            await new Promise(resolve => setTimeout(resolve, 300));
        }

        // Create a new window for printing
        const printWindow = window.open('', '_blank');
        const resumeHTML = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Resume</title>
                <style>
                    @page {
                        margin: 0.5in;
                        size: A4;
                    }
                    
                    body {
                        margin: 0;
                        padding: 20px;
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        font-size: 12pt;
                        line-height: 1.4;
                        color: #333;
                        background: white;
                    }
                    
                    h2, h3 {
                        margin-top: 0;
                        margin-bottom: 10px;
                    }
                    
                    p {
                        margin: 5px 0;
                    }
                    
                    img {
                        display: block;
                        margin: 0 auto 20px auto;
                    }
                    
                    @media print {
                        body {
                            -webkit-print-color-adjust: exact;
                            print-color-adjust: exact;
                        }
                    }
                </style>
            </head>
            <body>
                ${resumeContent.innerHTML}
            </body>
            </html>
        `;
        
        printWindow.document.write(resumeHTML);
        printWindow.document.close();
        
        // Wait for content to load, then print
        printWindow.onload = () => {
            setTimeout(() => {
                printWindow.print();
                printWindow.close();
            }, 500);
        };
    });
});
