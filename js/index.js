function clearResults(){
  document.querySelector('#billAmount').value = ' ';
  document.querySelector('.service-quality-options').value = '0';
  document.querySelector('#numPeople').value = ' ';
};



function calcTip(){
    
    
      let bill= document.querySelector('#billAmount').value;
      let service = document.querySelector('.service-quality-options').value;
      let numPeople= document.querySelector('#numPeople').value;


      if(bill == ' ' || service == 0){
        alert('Please enter values');
        return;
      }

      if(numPeople == ' ' || numPeople <=1){
        numPeople = 1;
        document.getElementById('each').style.display = "none";
      }else{
        document.getElementById('each').style.display = "block";
      }


    let total = (bill*service)/numPeople;
    total = Math.round(total*100)/100;
    total = total.toFixed(2);

    document.querySelector('.result').style.display = "block";
    document.querySelector('.amount').innerHTML = total;
    clearResults();

  };

  document.querySelector('.result').style.display = "none";
 


document.querySelector('.button-calc').addEventListener('click',calcTip);
