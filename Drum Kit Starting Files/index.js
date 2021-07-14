

// const drumEl = document.querySelector('button')
  
// drumEl.addEventListener("click",handleclick)

// function handleclick() {

//     alert (' i am click')
// }


// var NumberofDrum = document.querySelectorAll('.drum').length

// for (let i =0; i <= NumberofDrum; i++) {

//    document.querySelectorAll('.drum')[i].addEventListener("click", function () { alert (" i am click") })

// }



var NumberofDrum = document.querySelectorAll('.drum').length

for (let i = 0; i <= NumberofDrum; i++) {

   document.querySelectorAll('.drum')[i].addEventListener("click", function () { 


      var Playdrum = this.innerHTML;
            makeSound(Playdrum)

    
//       switch (Playdrum) {                                              /// using switch statment

//            case 'w':
//             var ton1 = new Audio("sounds/crash.mp3")
//             ton1.play();
//             break;


//              case 'a':
//              var ton2 = new Audio("sounds/tom-2.mp3")
//              ton2.play();
//              break;

//              case 's' :
//              var ton3 = new Audio("sounds/tom-3.mp3")
//              ton3.play();
//              break;

//              case 'd' :
//              var ton4 = new Audio("sounds/tom-4.mp3")
//              ton4.play();
//              break;

//              case 'j' :
//              var kickbass = new Audio("sounds/kick-bass.mp3")
//              kickbass.play();
//              break;

//              case 'k' :
//              var crash = new Audio("sounds/crash.mp3")
//              crash.play();
//              break;

//              case 'l' :
//              var ton2 = new Audio("sounds/tom-2.mp3")
//              ton2.play();
//              break;

//              default:

//              var audio = new Audio("sounds/ton-1.mp3")
//              audio.play()

// }
       


      
      // this.style.color = "white";

         

   
   })

}

   document.addEventListener("keypress", function(event){


      makeSound(event.key)
    }) 





   // var mouseKeyboard = document.querySelector('.drum')


  function makeSound (key) {

   // var PlaydrumwithKey = this.innerHTML;

    switch (key) {                                              /// using switch statment

        case 'w':
         var ton1 = new Audio("sounds/crash.mp3")
         ton1.play();
         break;


          case 'a':
          var ton2 = new Audio("sounds/tom-2.mp3")
          ton2.play();
          break;

          case 's' :
          var ton3 = new Audio("sounds/tom-3.mp3")
          ton3.play();
          break;

          case 'd' :
          var ton4 = new Audio("sounds/tom-4.mp3")
          ton4.play();
          break;

          case 'j' :
          var kickbass = new Audio("sounds/kick-bass.mp3")
          kickbass.play();
          break;

          case 'k' :
          var crash = new Audio("sounds/crash.mp3")
          crash.play();
          break;

          case 'l' :
          var ton2 = new Audio("sounds/tom-2.mp3")
          ton2.play();
          break;

          default:

           console.log(key)


}

}


// document.querySelector('button').addEventListener('click', function() { alert ("i am click")})