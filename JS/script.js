// Wayne Barnett	Founder & CEO	        wayne - barnett - founder - ceo.jpg
// Angela Caroll	Chief Editor	        angela - caroll - chief - editor.jpg
// Walter Gordon	Office Manager	        walter - gordon - office - manager.jpg
// Angela Lopez	Social Media Manager	angela - lopez - social - media - manager.jpg
// Scott Estrada	Developer	            scott - estrada - developer.jpg
// Barbara Ramos	Graphic Designer	    barbara - ramos - graphic - designer.jpg

// Consegna
// Viene fornita una piccola tabella che rappresenta i membri di un team.
// Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
// Completate i milestone nell'ordine assegnato, non andate avanti finché non avete concluso con successo la milestone precedente.
// Chiudete almeno una commit per milestone.
//! MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
//! MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
//! MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
//! BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
//! BONUS 2:
// Organizzare i singoli membri in card / schede
// Consigli del giorno:
// Ragioniamo come sempre a step.Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!
// Buon lavoro!
// Wayne Barnett	Founder & CEO	        wayne - barnett - founder - ceo.jpg
// Angela Caroll	Chief Editor	        angela - caroll - chief - editor.jpg
// Walter Gordon	Office Manager	        walter - gordon - office - manager.jpg
// Angela Lopez	Social Media Manager	angela - lopez - social - media - manager.jpg
// Scott Estrada	Developer	            scott - estrada - developer.jpg
// Barbara Ramos	Graphic Designer	    barbara - ramos - graphic - designer.jpg
// p.s.
// vi ho lasciato qualche immagine in più in caso voleste sperimentare:) (modificato) 

const teamMembers = [
    {
        Name:"Wayne Barnett",
        Role:"Founder & CEO",
        Img: "wayne - barnett - founder - ceo.jpg"
    },
    {
        Name: "Angela Caroll",
        Role: "Chief Editor",
        Img: "angela - caroll - chief - editor.jpg"
    },
    {
        Name: "Walter Gordon",
        Role: "Office Manager",
        Img: "walter - gordon - office - manager.jpg"
    },
    {
        Name: " Angela Lopez",
        Role: "Media Manager",
        Img: "angela - lopez - social - media - manager.jpg"
    },
    {
        Name: "Scott Estrada",
        Role: "Developer",
        Img: "scott - estrada - developer.jpg"
    },
    {
        Name: "Barbara Ramos",
        Role: "Graphic Designer",
        Img: "barbara - ramos - graphic - designer.jpg"
    },
];

for (let i = 0; i < teamMembers.length; i++){
    console.log(
        `NAME => ${teamMembers[i].Name}, ROLE => ${teamMembers[i].Role}, IMG => ${teamMembers[i].Img}`
    );
}
