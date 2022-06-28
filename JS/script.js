//! BONUS 2:
// Organizzare i singoli membri in card / schede


const teamMembers = [
    {
        Name:"Wayne Barnett",
        Role:"Founder & CEO",
        Img: "./img/wayne-barnett-founder-ceo.jpg",
        Age: 25
    },
    {
        Name: "Angela Caroll",
        Role: "Chief Editor",
        Img: "./img/angela-caroll-chief-editor.jpg",
        Age: 21
    },
    {
        Name: "Walter Gordon",
        Role: "Office Manager",
        Img: "./img/walter-gordon-office-manager.jpg",
        Age: 29
    },
    {
        Name: " Angela Lopez",
        Role: "Media Manager",
        Img: "./img/angela-lopez-social-media-manager.jpg",
        Age: 33
    },
    {
        Name: "Scott Estrada",
        Role: "Developer",
        Img: "./img/scott-estrada-developer.jpg",
        Age: 37
    },
    {
        Name: "Barbara Ramos",
        Role: "Graphic Designer",
        Img: `./img/barbara-ramos-graphic-designer.jpg`,
        Age: 24
    },
];

const newMember = {
    Name: 'Franco Developpi',
    Role: 'DA BOSS',
    Img: './img/new-team-member-02.jpg',
    Age: 44
}

teamMembers.push(newMember);

const teamMembersWrapper = document.getElementById('members-wrapper');

//Creating a Card

for (let i = 0; i < teamMembers.length; i++){
    console.log (teamMembers[i])
    const cardCol = document.createElement('div');
    cardCol.classList.add('card', 'col-3', 'm-4');
    cardCol.innerHTML = `
    <img src="${teamMembers[i].Img}"class="card-img-top p-3 rounded-5" alt="img">
        <div class="card-body">
            <h5 class="card-title fw-bold">${teamMembers[i].Name}</h5>
        </div >
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Età: ${teamMembers[i].Age}</li>
            <li class="list-group-item">Ruolo: ${teamMembers[i].Role}</li>
        </ul>
        <div class="card-body">
            <h5 class="card-title">Links</h5>
            <a href="#" class="card-link">Linkedin</a>
            <a href="#" class="card-link">Instagram</a>
        </div>`
    teamMembersWrapper.append(cardCol);
};

console.log(teamMembers);


