let i;
const photo = document.getElementById('photo').getElementsByTagName('img')[0];
const grandePhoto = document.getElementById('gd-photo');
const h2s = document.getElementsByTagName('h2');
const formation = document.querySelectorAll('#formation > ul.deux-col > li');
const experience = document.querySelectorAll('#experience > ul > li');

photo.addEventListener('mouseover', function() {
    this.style.display = 'none';
    grandePhoto.style.display = 'block';
});
grandePhoto.addEventListener('mouseout', function() {
    photo.style.display = 'block';
    this.style.display = 'none';
});

let ajouterClasse = (element, ...classesBootstrap) => {
    for(i = 0; i < element.length; i++) {
        element[i].classList.add(...classesBootstrap);
    }
}

ajouterClasse(h2s, 'text-center', 'text-white', 'p-1', 'bg-primary', 'position-relative');
ajouterClasse(formation, 'mb-3');
ajouterClasse(experience, 'mb-3');

//

function toggleClass(element, class1){
    element.classList.toggle(class1);
}

for(h2 of h2s){
    if(h2.classList.contains('titre-inactif')){
        for(child of h2.parentElement.children){
            if(!child.matches('h2')){
                toggleClass(child, 'section-inactive');
            }
        }
    };
    h2.addEventListener('click', function() {
        toggleClass(h2, 'titre-inactif');
        for(child of this.parentElement.children){
            if(!child.matches('h2')){
                if(window.getComputedStyle(child).getPropertyValue('display') != 'none'){
                    child.classList.add('fade-out');
                    child.classList.remove('fade-in');
                    setTimeout(toggleClass, 500, child, 'section-inactive');
                } else{
                    toggleClass(child, 'section-inactive');
                    child.classList.remove('fade-out');
                    child.classList.add('fade-in');
                }
            }
        }
    });
    h2.addEventListener('mouseover', function() {
        if(this.classList.contains('titre-inactif')) {
        this.setAttribute('title', 'Cliquez pour dérouler.')
        } else {this.setAttribute('title', 'Cliquez pour replier.')}
    })
}