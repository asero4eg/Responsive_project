var subButton=document.getElementById('subButton');
subButton.onclick=subscribeCheck;
function subscribeCheck(){
    var input=document.getElementById('subInput'),
    regexpr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (regexpr.test(input.value) == false) {
        console.log('E-mail is not correct')
        input.style.cssText = "transition:0.2s; border-right: 6px solid red";
        input.value ="";
        input.setAttribute('placeholder', `Incorrect email`);
    } else {
        input.style.cssText = "transition:0.2s; border-right: 6px solid #7deb34;";
        input.value ="";
        input.setAttribute('placeholder', `Thank you for subscription`);
    }
}
