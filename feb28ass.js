function btnclicked()
{
    var n = window.prompt("Enter n for fizzbuzz series"); 

    if (n % 1 == 0) {
        console.log("you have enterd " + n + " for fizzbuzz series");

        for (let i = 1; i <= n; i++)
        {
            if ( i % 3 ==0 && i % 5 == 0) 
            {
                console.log("fizzbuzz");
                document.write(" fizzbuzz");   
            }
    
            else if (i % 5 == 0) 
            {
                console.log("buzz");
                document.write(" buzz"); 
            }
    
            else if (i % 3 ==0) {
                console.log("fizz");
                document.write(" fizz");
            } 
    
            else {
                console.log(i);
                document.write(" "+i);
            }
        } 
    }
    else{
        alert("enter a valid number")
    }
}