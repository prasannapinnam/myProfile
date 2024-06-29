document.addEventListener("DOMContentLoaded",() => {
    const selectedProjectType = localStorage.getItem('selectedProjectType');

     //cards fill up
     const allprojects = [
        {
            title:'loopstudios landingpage',
            image:'scss-loopstudios.png',
            skills: ['html','scss'],
            gitlink: 'scss-loopstudio-landingpage',
            deployLink: 'https://prasannapinnam.github.io/scss-loopstudio-landingpage/',
            type: 'css'
        },
        {
            title:'streetstyle landingpage',
            image:'scss-streetstyle.png',
            skills: ['html','css'],
            gitlink: 'css-street-style-landing-page',
            deployLink: 'https://prasannapinnam.github.io/css-street-style-landing-page/',
            type:'css'
        },
        {
            title:'crypto landingpage',
            image:'scss-crypto.png',
            skills: ['html','css'],
            gitlink: 'css-crypto-landing-page',
            deployLink: 'https://css-crypto-landing-page.netlify.app/',
            type:'css'
        },
        {
            title:'paytm clone',
            image:'bootstrap-paytm-clone.png',
            skills: ['html','scss','js','bootstrap'],
            gitlink: 'bootstrap-paytm-clone',
            deployLink: 'https://prasannapinnam.github.io/bootstrap-paytm-clone/',
            type:'css'
        }
    ]

    const cardscontainer = document.getElementById('cards-container');

        allprojects.forEach(project => {
            if(project.type === selectedProjectType) {
            let card = document.createElement('div');
            card.classList.add('project-card');

            let header = document.createElement('div');
            header.classList.add('card-header');
            header.textContent = project.title;
            card.appendChild(header);

            let imagePart = document.createElement('div');     
            imagePart.classList.add('card-image');
            let image = document.createElement('img');
            image.src = `./assets/images/projects/css/${project.image}`;
            imagePart.appendChild(image);
            card.appendChild(imagePart);

            let skills = document.createElement('div');
            skills.classList.add('skills');
            project.skills.forEach(skill => {
                const skillbagde = document.createElement('p');
                skillbagde.textContent = skill;
                skills.appendChild(skillbagde);
            })
            card.appendChild(skills);

            let cardLinks = document.createElement('div');
            cardLinks.classList.add('card-links');
            let gitlink = document.createElement('a');
            gitlink.textContent = 'github link';
            gitlink.href = `https://github.com/prasannapinnam/${project.gitlink}`;
            cardLinks.appendChild(gitlink);
            let deploylink = document.createElement('a');
            deploylink.textContent = 'deploy-view';
            deploylink.href = project.deployLink;
            cardLinks.appendChild(deploylink);
            card.appendChild(cardLinks);

            cardscontainer.appendChild(card);
        }
    })
})