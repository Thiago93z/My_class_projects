/////Taller++++++++++++++++++++++

//1. Ejercicio BAR
// Un Bar muy famoso de@la ciudad está recibiendo propuestas tecnológicas por parte de sus allegados, el programa debe ser capaz de permitir que únicamente las personas con Edad legal puedan ingresar al establecimiento, de lo contrario deberá impedir su entrada, en los días jueves de cada mes las mujeres entran gratis, de lo contrario tanto a hombres como a mujeres se les cobrara una entrada de 18.000 pesos

function bitBar (){
  
    let age,least_age, max_edad;
    
    
    least_age=18;
    max_edad=120;
    
  
    //console.log('Welcome to BITBAR','\n')
    
    while (least_age>=0){
      console.log('Welcome to BITBAR','\n')
      age = prompt('Enter your age')
      if (age<=0 ||age>=max_edad){
        console.log('Your input is out of range','\n','Please enter a valid age')
      }
      else if(age<least_age){
        return console.log(`you´re ${age} and you´re not able to entry in BITBAR, come back when you are 18 year old or more, Thanks to come, Bye`)
      }
      else if(age>=least_age){
        
        console.log('Enter 1 for Monday');
        console.log('Enter 2 for Tuesday');
        console.log('Enter 3 for Wednesday');
        console.log('Enter 4 for Thursday');
        console.log('Enter 5 for Friday');
        console.log('Enter 6 for Saturday');
        console.log('Enter 7 for Sunday');
        let day=prompt('Choose the day you want to come:','\t');
        
        let gender=prompt('Choose the gender you indentify with');
        console.log('Enter 1 for Man');
        console.log('Enter 2 for Woman');
        console.log('Enter 3 for NoBinary');
        
        if(day==4 && gender==2){
          return 'Today is Thursday and the entrance  for Women is free'
        }
        else if(day!=4 && gender!=2 && day >=1 && day<=7 && gender >=1 && gender<=3){
          return 'Thanks for comming, your ticket has a cost of COP $ 18.000'
        }
        else if(day<=0 || day>7 || gender<=0 ||gender>7)
        {
          console.log(`Your input day ${day} or  gender ${gender} are out of range','\n','Please choose a valid option`)
        }
          
        
      }  
    }
    
    
  }
  
  bitBar()

  //Ejercicio 2 Tablas de multiplicar
  //El hijo de la prima de su madrina necesita un programa que le ayude con las tablas de multiplicar, este debe recibir un número y decirle cuales son las tablas de multiplicar de dicho numero

  function multiplicationTables (num){
    console.log(`Welcome to your Multiplication Calculator \n The Table of ${num} is`)
    for(i=1;i<=10;i++){
      oper=num*i;
      console.log(`${num} X ${i} = ${oper} `)
    }
  }
    
  multiplicationTables(5)

//Ejercicio 3 // Se debe imprimir en el navegador un programa que haga lo siguiente en un contador de 1 al numero dado por el usuario 
//Números que sean múltiplos de 5 deberán imprimir  amo_, 
//Números que sean Múltiplos de 3 deberán imprimir al_profe, 
//Números que sean multiplos de 3 y 5 deberán imprimir amo-al-profe
//Si no cumple ninguna condición deberá imprimir el número del contador

function Multiples_3_and_5(num){
    for (let i = 1; i <= num; i++) {
      if (i%3 ==0 && i%5==0){
        console.log('love_the_teacher')
      }
      else if (i%5==0){
        console.log('love_')
      }
      else if (i%3==0){
        console.log('the_teacher')
      }
      else{
        console.log(i)
      } 
    }
  }
  
  Multiples_3_and_5(6)

