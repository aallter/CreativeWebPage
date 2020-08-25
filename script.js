/*SLIDE Afisha*/
let getButtonAfisha = document.querySelectorAll('.slide-button i');
console.log(getButtonAfisha);
let img = document.querySelectorAll('.cont-two img');
console.log(img);
let butLeft=getButtonAfisha[0];
let butRight=getButtonAfisha[1];
//func next img and back img
let endMass = img.length - 1;
let nextImg =() =>{
    for(let i=0; i<img.length;i++){
        if(img[i].classList.contains('d-block')){
                if(i == endMass){ 
                    img[endMass].classList.remove('d-block');
                    i = 0;
                    img[i].classList.add('d-block');
                    break;
                }else{
                    img[i].classList.remove('d-block');
                    i++;
                    img[i].classList.add('d-block');
                    console.log(img[i].classList);
                    console.log(i);
                    break;
                }
        }
    }
}
let predImg =() =>{
    for(let i=0; i<img.length;i++){
        if(img[i].classList.contains('d-block')){
            if(i == 0){
                img[i].classList.remove('d-block');
                i =  endMass;
                img[i].classList.add('d-block');
                break;
            }else{
                img[i].classList.remove('d-block');
                i--;
                img[i].classList.add('d-block');
                console.log(img[i].classList);
                console.log(i);
                break;
            }
            
        }
    }
}

//func click
butRight.addEventListener('click',nextImg);
butLeft.addEventListener('click',predImg);


/*Validation form */
let btn = document.querySelectorAll("form input.submit-button");

btn.forEach(item =>{
    item.addEventListener('click',function(e){

        let inputs = document.querySelectorAll('form input');

        inputs.forEach(item => {
            if(item.checkValidity()){
                item.classList.remove('is-invalid');
                item.classList.add('is-valid');
                /*Send mail on email, not my script*/
                $(document).ready(function() {

                    //E-mail Ajax Send
                    $("form").submit(function() { //Change
                        var th = $(this);
                        $.ajax({
                            type: "POST",
                            url: "mail.php", //Change
                            data: th.serialize()
                        }).done(function() {
                            alert("Thank you!");
                            setTimeout(function() {
                                // Done Functions
                                th.trigger("reset");
                            }, 1000);
                        });
                        return false;
                    });

                });

            }else{
                item.classList.remove('is-valid');
                item.classList.add('is-invalid');
            }

        });
        let form = document.querySelector('form');

        if(!form.checkValidity()){
            e.preventDefault();
        }
    });

});
