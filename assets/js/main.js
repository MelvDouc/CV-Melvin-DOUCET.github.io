let i;
const photo = document.getElementById('photo').getElementsByTagName('img')[0];
const grandePhoto = document.getElementById('gd-photo');
const h2 = document.getElementsByTagName('h2');
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

ajouterClasse(h2, 'text-center', 'text-white', 'p-1', 'bg-primary', 'position-relative');
ajouterClasse(formation, 'mb-3');
ajouterClasse(experience, 'mb-3');

for(i = 0; i < h2.length; i++) {
    h2[i].addEventListener('mouseover', function() {
        if(this.classList.contains('inactive')) {
        this.setAttribute('title', 'Cliquez pour dérouler.')
        } else {this.setAttribute('title', 'Cliquez pour replier.')}
    })
};