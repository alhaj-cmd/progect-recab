const ali= document.getElementById('withdrow-button');
ali.addEventListener('click',function(){
    const withdrowinput =document.getElementById('withdrow-input');
    const withdrowText=withdrowinput.value;
    const withdrowvalue=parseFloat(withdrowText);
    const withdrows =document.getElementById('withdrow');
    const withdrowvelues=withdrows.innerText;
    const withdrowed =parseFloat(withdrowvelues);
    withdrows.innerText=withdrowed+withdrowvalue;

    const balancetask =document.getElementById('balance-total');
    const balancetake=balancetask.innerText;
    const accounts=parseFloat(balancetake);
    balancetask.innerText=accounts-withdrowText;
    withdrowinput.value=' ';

 
})