window.addEventListener('DOMContentLoaded', function (){
    // Modal 

    let popapEngineerBtn = document.querySelector('.popup_engineer_btn'),
        popupEngineer = document.querySelector('.popup_engineer'),
        popupEnginnerClose = document.querySelectorAll('.popup_close');
        
        popapEngineerBtn.addEventListener('click', function(){
            popupEngineer.style.display = 'block';
        });

        popupEnginnerClose.forEach( element =>
           element.addEventListener('click', function(){
                popupEngineer.style.display = 'none';
        }));

        popupEngineer.addEventListener('click', function(event){
                 if(event.target.className == 'popup_engineer'){
                    popupEngineer.style.display = 'none';
                 }
         });
});

