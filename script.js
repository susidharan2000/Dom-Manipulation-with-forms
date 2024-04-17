
const submit = document.querySelector('#submit'); 
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    /* first Name */
    let first_name = document.querySelector('#first-name');
    let displayfirstName = document.querySelector('.first');
    displayfirstName.innerHTML = first_name.value;
    /* lastname */
    let last_name = document.querySelector('#last-name');
    let displaylastName = document.querySelector('.last');
    displaylastName.innerHTML = last_name.value;
    /* Address */
    let address = document.querySelector('#address');
    let displayAddress = document.querySelector('.address')
    displayAddress.innerHTML = address.value;
    /* pincode */
    let pincode = document.querySelector('#pincode');
    let displayPincode = document.querySelector('.pincode');
    displayPincode.innerHTML = pincode.value;
    /* Gender */
    let gender = document.querySelector('input[name="gender"]:checked');
    let displayGender = document.querySelector('.gender');
    displayGender.innerHTML = gender.value;
    /* choose food */
    let food = document.querySelectorAll('#food');
    let displayfood = document.querySelector('.food');
    var foodarray = [];
    for(let i = 0;i< food.length;i++){
        if(food[i].checked === true){
            foodarray.push(food[i].value);

        }
    }
    displayfood.innerHTML = foodarray.toString();
    /* Country */
    let country = document.querySelector('#country').value;
    let displaycontry = document.querySelector('.country');
    displaycontry.innerHTML = country;
    

    /* State */
    let state = document.querySelector('#state').value;
    let displaystats = document.querySelector('.state');
    displaystats.innerHTML = state;
/* reset's form */
    document.querySelector('#form').reset();
});   