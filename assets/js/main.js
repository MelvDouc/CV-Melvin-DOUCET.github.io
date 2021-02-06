// [0] Variables et fonctions

const petitePhoto = document.querySelector('#petite-photo'),
grandePhoto = document.querySelector('#grande-photo'),
h2s = document.getElementsByTagName('h2'),
h3sCompetences = document.querySelectorAll('.competence h3'),
formation = document.querySelectorAll('#formation > ul.deux-col > li'),
experience = document.querySelectorAll('#experience > ul > li');

function ajouterClasses(elements, ...classesBootstrap) {
    for(element of elements) {
        element.classList.add(...classesBootstrap);
    }  
}

const toggleClass = (element, class1) => element.classList.toggle(class1);

// [1] Ajout de classes Bootstrap

ajouterClasses(h2s, 'text-center', 'text-white', 'p-1', 'bg-primary', 'position-relative');
ajouterClasses(formation, 'mb-3');
ajouterClasses(experience, 'mb-3');

// [2] Animation de la photo

petitePhoto.addEventListener('mouseover', function() {
    this.style.display = 'none';
    grandePhoto.style.display = 'block';
});
grandePhoto.addEventListener('mouseout', function() {
    petitePhoto.style.display = 'block';
    this.style.display = 'none';
});

// [3] Animation des sections et sous-sections

for(h2 of h2s) {
    if(h2.classList.contains('titre-inactif')) {
        for(child of h2.parentElement.children) {
            if(!child.matches('h2')) {
                toggleClass(child, 'section-inactive');
            }
        }
    };
    h2.addEventListener('click', function() {
        toggleClass(this, 'titre-inactif');
        for(child of this.parentElement.children) {
            if(!child.matches('h2')) {
                if(window.getComputedStyle(child).getPropertyValue('display') != 'none') {
                    child.classList.add('fade-out');
                    child.classList.remove('fade-in');
                    setTimeout(toggleClass, 500, child, 'section-inactive');
                } else {
                    toggleClass(child, 'section-inactive');
                    child.classList.remove('fade-out');
                    child.classList.add('fade-in');
                }
            }
        }
    });
    h2.addEventListener('mouseover', function() {
        this.title = (this.classList.contains('titre-inactif')) ? 'Cliquez pour dérouler.' : 'Cliquez pour replier';
    })
};

for(h3 of h3sCompetences) {
    if(h3.classList.contains('titre-inactif')) {
        for(child of h3.parentElement.children) {
            if(!child.matches('h3')) {
                toggleClass(child, 'section-inactive');
            }
        }
    };
    h3.addEventListener('click', function() {
        toggleClass(this, 'titre-inactif');
        for(child of this.parentElement.children) {
            if(!child.matches('h3')) {
                if(window.getComputedStyle(child).getPropertyValue('display') != 'none') {
                    child.classList.add('fade-out');
                    child.classList.remove('fade-in');
                    setTimeout(toggleClass, 500, child, 'section-inactive');
                } else {
                    toggleClass(child, 'section-inactive');
                    child.classList.remove('fade-out');
                    child.classList.add('fade-in');
                }
            }
        }
    });
};