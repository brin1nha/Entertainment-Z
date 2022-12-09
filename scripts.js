//caixa de diálogo na PÁG HOME após o load
   dataAtual = new Date();
   horas = dataAtual.getHours();
   semana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];

   var nome, cidade, curso, universidade, diaSemana, periodo;
   const arrayAlertHomePage = [nome, cidade, curso, universidade, diaSemana, periodo];
   arrayAlertHomePage[0] = "Sabrina Maria Araújo Albuquerque";
   arrayAlertHomePage[1] = "São Paulo";
   arrayAlertHomePage[2] = "TADS";
   arrayAlertHomePage[3] = "Mackenzie";
   arrayAlertHomePage[4] = semana[dataAtual.getDay()];
   //arrayAlertHomePage[5] ou periodo:
   if(horas <= (12)){
      arrayAlertHomePage[5] = "Bom dia!";
   }
   else if (horas>=(12) && horas<=(18)){
      arrayAlertHomePage[5] = "Boa tarde!";
   }
   else {
      arrayAlertHomePage[5] = "Boa noite!";
   }

   function mostrarSaudacao() {
      alert(arrayAlertHomePage[0] +"\n" 
            +arrayAlertHomePage[1] +"/" +arrayAlertHomePage[2]+"-" +arrayAlertHomePage[3] +"\n"
            +arrayAlertHomePage[5] +" Hoje é " +arrayAlertHomePage[4]);
   }

//FOOTER creators info
var creatorName = document.getElementById('name');
   creatorName.innerHTML = "<p>Sabrina Maria Araújo Albuquerque</p>";
var creatorGender = document.getElementById('gender');
   creatorGender.innerHTML = "<ion-icon name='female-outline' style='font-size: 18px'></ion-icon>";
var currentYear = document.getElementById('current_year');
   currentYear.innerHTML = new Date().getFullYear();
var universityLocation =  document.getElementById('university_location');
   universityLocation.innerHTML = "<p>Higienópolis</p>"
var creatorLinkedin = document.getElementById('linkedin');
   creatorLinkedin.innerHTML ="<a href='https://www.linkedin.com/in/devbrina'><ion-icon name='logo-linkedin'></ion-icon></a>";
var creatorInstagram = document.getElementById('instagram');
   creatorInstagram.innerHTML = "<a href='https://www.instagram.com/brina.com.br/'><ion-icon name='logo-instagram'></ion-icon></a>";
var creatorGithub = document.getElementById('github');
   creatorGithub.innerHTML = "<a href='https://github.com/devbrina'><ion-icon name='logo-github'></ion-icon></a>";;
var creatorEmail = document.getElementById('email');
   creatorEmail.innerHTML = "<a href=mailto:sabrinamaria.dev@hotmail.com><ion-icon name='mail-outline'></ion-icon></a>";
