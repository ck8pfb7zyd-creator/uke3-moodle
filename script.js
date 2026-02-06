
 function buttonclicked() {
            window.location.href = "https://getacademy.no"; 

        }

        function lukkBoks() {
            const boks = document.getElementById("meldingsboks");
            const knapp = document.getElementById("lukknapp");

            boks.classList.toggle("skjult"); 
            
            if (boks.classList.contains("skjult")) {
                knapp.innerText = "Åpne meldingsboks";
            } else {
            knapp.innerText = "Lukk";
           }
    }
        
    function byttSide() {
        const side1 = document.getElementById("side1");
        const side2 = document.getElementById("side2"); 
        const lukknapp = document.getElementById("lukknapp");

        side1.classList.toggle("skjult");
        side2.classList.toggle("skjult");

        if(!side2.classList.contains("skjult")) {
            lukknapp.style.display = "none"
        } else {
            lukknapp.style.display = "inline-block";
        }
    
    }



  


    


       