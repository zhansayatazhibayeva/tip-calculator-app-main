
const perFive = document.getElementById('per-5');
const perTen=document.getElementById('per-10');
const perFifteen=document.getElementById('per-15');
const perTwentyFive= document.getElementById('per-25');
const perFifty = document.getElementById('per-50');


perFive.addEventListener('click', function(){

    const billInput = document.getElementById('bill');
    const billValue=billInput.value ;
    const peopleInput = document.getElementById('people');
    const peopleValue=peopleInput.value ;

    let perPersonRes = (billValue * 0.05)/peopleValue;
    let totalRes = (billValue + (billValue*0.05))/peopleValue;


    document.getElementById('per-person').textContent = `$${perPersonRes.toFixed(2)}`
    document.getElementById('per-all').textContent = `$${totalRes.toFixed(2)}`;
    
    
});


perTen.addEventListener('click', function(){

    const billInput = document.getElementById('bill');
    const billValue=billInput.value ;
    const peopleInput = document.getElementById('people');
    const peopleValue=peopleInput.value ;

    let perPersonRes = (billValue * 0.1)/peopleValue;
    let totalRes = (billValue + (billValue*0.1))/peopleValue;


    document.getElementById('per-person').textContent = `$${perPersonRes.toFixed(2)}`
    document.getElementById('per-all').textContent = `$${totalRes.toFixed(2)}`;
    
    
});


perTwentyFive.addEventListener('click', function(){

    const billInput = document.getElementById('bill');
    const billValue=billInput.value ;
    const peopleInput = document.getElementById('people');
    const peopleValue=peopleInput.value ;

    let perPersonRes = (billValue * 0.25)/peopleValue;
    let totalRes = (billValue + (billValue*0.25))/peopleValue;


    document.getElementById('per-person').textContent = `$${perPersonRes.toFixed(2)}`
    document.getElementById('per-all').textContent = `$${totalRes.toFixed(2)}`;
    
    
});

perFifteen.addEventListener('click', function(){

    const billInput = document.getElementById('bill');
    const billValue=billInput.value ;
    const peopleInput = document.getElementById('people');
    const peopleValue=peopleInput.value ;

    let perPersonRes = (billValue * 0.15)/peopleValue;
    let totalRes = (billValue + (billValue*0.15))/peopleValue;


    document.getElementById('per-person').textContent = `$${perPersonRes.toFixed(2)}`
    document.getElementById('per-all').textContent = `$${totalRes.toFixed(2)}`;
    
    
});

perFifty.addEventListener('click', function(){

    const billInput = document.getElementById('bill');
    const billValue=billInput.value ;
    const peopleInput = document.getElementById('people');
    const peopleValue=peopleInput.value ;

    let perPersonRes = (billValue * 0.5)/peopleValue;
    let totalRes = (billValue + (billValue*0.5))/peopleValue;


    document.getElementById('per-person').textContent = `$${perPersonRes.toFixed(2)}`
    document.getElementById('per-all').textContent = `$${totalRes.toFixed(2)}`;
    
    
});

const resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', function (){

    document.getElementById('per-person').textContent = `$${0}`
    document.getElementById('per-all').textContent = `$${0}`;
    
});