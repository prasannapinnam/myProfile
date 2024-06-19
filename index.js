document.addEventListener("DOMContentLoaded",() => {
    // skill cards fillup
    const cardcontainer = document.querySelector(".skill-cards-1");
    const cardcontainer2 = document.querySelector(".skill-cards-2");

    const images1 = [
        ['html5.png', 120],
        ['css3.ico', 160],
        ['bootstrap.jpg', 150],
        ['git.png',100],
        ['github.png', 100],
        ['bitbucket.png', 100],
        ['javascript.png', 100],
        ['angular.png', 100],
        ['angular-material.png', 100],
        ['typescript.png', 100],
    ];

    const images2 = [
        ['aws.png', 100],
        ['react.ico', 100],
        ['postman.png', 100],
        ['webpack.png', 150],
        ['rxjs.png', 100],
        ['jenkins.png', 100],
        ['sass.png', 100],
        ['mongodb.png', 100],
        ['nodejs.png', 100],
        ['jasmine.png', 120],
        ['karma.png',100],
    ]

    for(let i=0;i<images1.length;i++){
        let card = document.createElement('div');
        card.classList.add('skill-card-left');
        card.classList.add('skill-card');
        card.classList.add('card-'+(i+1));
        card.style.backgroundImage = `url(./assets/images/skills-cards/${images1[i][0]})`;
        card.style.backgroundSize = `${images1[i][1]}%`;
        card.style.animationDelay = `${i*0.9}s`;
        cardcontainer.appendChild(card);
    }

    for(let i=0;i<images2.length;i++){
        let card = document.createElement('div');
        card.classList.add('skill-card-right');
        card.classList.add('skill-card');
        card.classList.add('card-'+(i+1));
        card.style.backgroundImage = `url(./assets/images/skills-cards/${images2[i][0]})`;
        card.style.backgroundSize = `${images2[i][1]}%`;
        card.style.animationDelay = `${i*0.7}s`;
        cardcontainer2.appendChild(card);
    }
    // skill cards fillup end


    // experience cards fillup
    const experienceCards = document.querySelector('.experience-cards');

    const experienceCardsData = [
        {
            image : 'ZYCUS.png',
            title : 'javascript frontend engineer',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsasequi doloribus nisi error sint soluta ut debitis, inventore earum id officia aspernatur suscipit corrupti excepturi vero ducimus extenetur totam accusamus dolores? Sequi dicta hic repellat facere dolorum ut similique quam, praesentium minus nobis repudiandae corporis, aspernatur, ipsam beatae deleniti! Consequuntur id labore nihil laboriosam.'
        },
        {
            image : 'nokia.jpg',
            title : 'graduate engineering trainee',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsasequi doloribus nisi error sint soluta ut debitis, inventore earum id officia aspernatur suscipit corrupti excepturi vero ducimus extenetur totam accusamus dolores? Sequi dicta hic repellat facere dolorum ut similique quam, praesentium minus nobis repudiandae corporis, aspernatur, ipsam beatae deleniti! Consequuntur id labore nihil laboriosam.'
        },
        {
            image : 'amrita.png',
            title : 'Btech at Amrita university',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsasequi doloribus nisi error sint soluta ut debitis, inventore earum id officia aspernatur suscipit corrupti excepturi vero ducimus extenetur totam accusamus dolores? Sequi dicta hic repellat facere dolorum ut similique quam, praesentium minus nobis repudiandae corporis, aspernatur, ipsam beatae deleniti! Consequuntur id labore nihil laboriosam.'
        }
    ]

    for (let i = 0; i<experienceCardsData.length; i++){
        let card = document.createElement('div');
        card.classList.add('experience-card');
        card.classList.add('card-'+(i+1));
        if(i%2 !== 0){
            card.classList.add('flex-reverse');
        }
        let experienceImage = document.createElement('div');
        experienceImage.classList.add('experience-image');
        experienceImage.style.backgroundImage= `url('./assets/images/experience/${experienceCardsData[i].image}')`;
        card.appendChild(experienceImage);

        let experienceDescription = document.createElement('div');
        experienceDescription.classList.add('experience-description');
        card.appendChild(experienceDescription);

        let experienceHeading = document.createElement('div');
        experienceHeading.classList.add('experience-heading');
        experienceHeading.textContent = experienceCardsData[i].title;
        experienceDescription.appendChild(experienceHeading);

        let experienceBrief = document.createElement('div');
        experienceBrief.classList.add('experience-brief');
        experienceBrief.textContent = experienceCardsData[i].description;
        experienceDescription.appendChild(experienceBrief);

        experienceCards.appendChild(card);
    }

    //experience cards fillup end


})


