// login part start
document.getElementById('button-type').addEventListener('click',
function(){
    const emailType =document.getElementById('email');
    const emailText =emailType.value;
    const passType =document.getElementById('pass')
    const passText =passType.value;
    if(emailText ==='alhaj@gmail.com' && passText ==='sarkar'){
        window.location.href='deposit.html';
   } else{
        alert('please currect E-mail & password')
   }
})
// login part end
//  Deposite start
