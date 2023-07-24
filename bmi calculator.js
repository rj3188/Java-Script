//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

//var bmi = bmiCalculator(50, 2.3); 

function bmiCalculator(weight, height) {
    var bmi = weight / (height * height) ;
    return bmi;
    }
    
    
    /* If my weight is 50Kg and my height is 2.3m, I should be able to call your function like this:
    
    bmi should equal 20 when it's rounded to the nearest whole number.
    
    */

    