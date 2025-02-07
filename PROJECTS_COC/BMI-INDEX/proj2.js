const form=document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault(); // yani ki jo bhi apka default action h use roko thodi der i.e submit wale action ko pause  karo

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');

    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML=`Please give a valid height ${height}`;
    }
    
    else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML=`Please give a valid weight ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2); // Calculate BMI
        let message = `<span>Your BMI is: ${bmi}. `;

        // Determine BMI category
        if (bmi < 18.6) message += `You are Under Weight.</span>`;
        else if (bmi >= 18.6 && bmi <= 24.9) message += `You are in the Normal Range.</span>`;
        else message += `You are Over Weight.</span>`;

        results.innerHTML = message; // Display the final message
    }

})