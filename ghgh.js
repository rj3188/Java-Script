{count = 2;
    while(count <= 10) {

    if (count % 3 === 0 && count % 5 === 0) {
        count("FizzBuzz");
    }
    else if (count % 3 === 0) {
        count("Fizz");
    }
    else if (count % 5 === 0) {
        count("Buzz");
    }
    else {
        count("FizzBuzz");
    }
    
    count++;
}
    console.log(count);
    }