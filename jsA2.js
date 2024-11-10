//Assignment 2

// Q1. Find Grades
let M=45;
function get_Grade(M){

    switch(true){
        case(M>0 && M<=10):
        return 'E';
        break;

        case(M>=11 && M<=20):
        return 'D';
        break;

        case(M>=21 && M<=30):
        return 'C';
        break;


        case(M>=31 && M<=40):
        return 'B';
        break;

        case(M>=41 && M<=50):
        return 'A';
        break;

        default:
            return 'Invalid marks';

    
}
}
  
console.log(get_Grade(M));


//Q2. Get value.

function getValue(C){
    if(C === "P" || C === "p"){
        console.log("PrepBytes");
    }
    else if(C === "Z" || C === "z"){
        console.log("Zenith");
    }
    
    else if(C === "E" || C === "e"){
        console.log("Expert coder");
    }

    else if(C === "D" || C === "d"){
        console.log("Data structure");
    }

    else{
        console.log("Invalid input");
    }
}

 let C = "z";
 console.log(getValue(C));


 // Q3. Find the maximum out of three numbers.

 function max_number(A,B,C){
    if(A>B && A>C){
        console.log(A + " is greater.");
    }

    else if(B>A && B>C){
        console.log(B + " is greater.");
    }

    else if(C>A && C>B){
        console.log(C + " is greater.");
    }
    
    else{
        console.log(-1);
    }

 }

 max_number(3,7,9);


 // Q4. Find the second smallest number.
  
 function sec_smallest(A,B,C){
    if(A>B){
        if(B<C){
            console.log(B + " is second smallest number.");
        }
        else if(A>C){
            console.log(C + " is second smallest number.");
        }
        else{
            console.log(A + " is second smallest number."); 
        }
        }

    else{
        if(A>C){
            console.log(A + " is second smallest number.");
        }

        else if(B>C){
            console.log(C + " is second smallest number.");
        }

        else{
            console.log(B + " is second smallest number."); 
    }
}
 }

 sec_smallest(2,3,4);

 // Q.5 Check wheather the triangle is obtuse or acute.

 function find_Triangle(A,B,C){
   if(A>90 || B>90 || C>90){
    console.log("It is a obtuse angle");

   }

   else{
    console.log("It is a acute angle");

   }

 }
 
 find_Triangle(20,80,89);