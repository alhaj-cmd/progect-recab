document.getElementById('deposite-button').addEventListener('click',function(){
    const inputButton =document.getElementById('deposite-input');
    const inputvalue =inputButton.value;
    const innervalues =parseFloat(inputvalue);
   //  add deposit
    const depositeAdd =document.getElementById('deposite');
    const depositeText =depositeAdd.innerText;
    const depositeValue= parseFloat(depositeText) 
    depositeAdd.innerText=innervalues+depositeValue;
// add balance
    const balanceTotal=document.getElementById('balance-total');
    const balancevalue =balanceTotal.innerText;
    const balances =parseFloat(balancevalue);
    balanceTotal.innerText =balances+innervalues;
    //console.log(totalbalance);
    inputButton.value =' ';
});

// withdrow section

