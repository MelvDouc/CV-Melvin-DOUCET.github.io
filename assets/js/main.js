// [0] Variables et fonctions

const petitePhoto = document.querySelector('#petite-photo'),
    grandePhoto = document.querySelector('#grande-photo'),
    h2s = document.getElementsByTagName('h2'),
    h3sCompetences = document.querySelectorAll('#competences h3'),
    formation = document.querySelectorAll('#formation > ul.deux-col > li'),
    experience = document.querySelectorAll('#experience > ul > li');

function addBootstrapClasses(elements, ...bootstrapClasses) {
    Object.values(elements).forEach(elem => elem.classList.add(...bootstrapClasses))
}

function toggleClass(element, class1) {
    return element.classList.toggle(class1);
}

// [1] Ajout de classes Bootstrap

addBootstrapClasses(h2s, 'text-center', 'text-white', 'p-1', 'bg-primary', 'position-relative');
addBootstrapClasses(formation, 'mb-3');
addBootstrapClasses(experience, 'mb-3');

// [2] Animation de la photo

petitePhoto.addEventListener('mouseover', function () {
    this.style.display = 'none';
    grandePhoto.style.display = 'block';
});
grandePhoto.addEventListener('mouseout', function () {
    petitePhoto.style.display = 'block';
    this.style.display = 'none';
});

// [3] Animation des sections et sous-sections

Object.values(h2s).forEach(h2 => {
    // Obtenir les siblings du titre h2, sur lesquels sera exécutée l'animation
    let siblings = Object.values(h2.parentElement.children)
        .filter(sibling => sibling != h2);
    // Cacher les siblings si le titre a la classe "titre-inactif"
    if (h2.classList.contains('titre-inactif')) {
        siblings.forEach(sibling => toggleClass(sibling, 'section-inactive'))
    }
    // Faire apparaitre/disparaitre les siblings au clic
    h2.addEventListener('click', function () {
        toggleClass(this, 'titre-inactif');
        siblings.forEach(sibling => {
            if (getComputedStyle(sibling).getPropertyValue('display') != 'none') {
                sibling.classList.add('fade-out');
                sibling.classList.remove('fade-in');
                setTimeout(toggleClass, 500, sibling, 'section-inactive');
            } else {
                toggleClass(sibling, 'section-inactive');
                sibling.classList.remove('fade-out');
                sibling.classList.add('fade-in');
            }
        })
    });
    h2.addEventListener('mouseover', function () {
        this.title = (this.classList.contains('titre-inactif')) ? 'Cliquez pour dérouler.' : 'Cliquez pour replier.';
    })
});


Object.values(h3sCompetences).forEach(h3 => {
    let ul = h3.nextElementSibling;
    if (h3.classList.contains('titre-inactif')) {
        toggleClass(ul, 'section-inactive')
    }
    h3.addEventListener('click', function () {
        toggleClass(this, 'titre-inactif');
        if (getComputedStyle(ul).getPropertyValue('display') != 'none') {
            ul.classList.add('fade-out')
            ul.classList.remove('fade-in')
            setTimeout(toggleClass, 500, ul, 'section-inactive');
        } else {
            toggleClass(ul, 'section-inactive');
            ul.classList.remove('fade-out');
            ul.classList.add('fade-in');
        }
    })
});