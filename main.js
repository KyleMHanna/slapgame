//Variables
let health = 100


let players = {
    player_one:{
        playerHealth: 100,
        attacks: {
            punch: 15,
            kick:25,
        }
    },
    player_two:{
        playerHealth: 100,
        attacks: {
            punch: 15,
            kick:25,
        }
    },
}

//Elements

const P1H = document.getElementById('Play1Health')
const P2H = document.getElementById("Play2Health")


//Functions

function startGame(){
    document.getElementById("health-info").classList.remove("visually-hidden")
    document.getElementById("popup-message").classList.add("visually-hidden")
    document.getElementById("staff-imgs").classList.remove("visually-hidden")
    document.getElementById("fight-buttons").classList.remove("visually-hidden")
}

function drawPlayerOneHealth(){  
    let PlayerH1 = players.player_one.playerHealth
    P1H.innerText = players.player_one.playerHealth
    
    if(PlayerH1 <= 1){
        P1H.classList.remove('bg-success')
        P1H.classList.remove('bg-warning')
        P1H.classList.remove('bg-danger')
        P1H.innerHTML = "YOU'RE DEAD"
        P1H.classList.add('bg-dark')}
    if(PlayerH1 <= 25){
        P1H.classList.remove('bg-success')
        P1H.classList.remove('bg-warning')
        P1H.classList.add('bg-danger')
    }
    if(PlayerH1 <= 50){
        P1H.classList.remove('bg-success')
        P1H.classList.add('bg-warning')
    }
    if(PlayerH1 == 100){
        P1H.classList.add('bg-success')
    }
  
}
function drawPlayerTwoHealth(){  
    let PlayerH2 = players.player_two.playerHealth
    P2H.innerText = players.player_two.playerHealth
    
    if(PlayerH2 <= 1){
        P2H.classList.remove('bg-success')
        P2H.classList.remove('bg-warning')
        P2H.classList.remove('bg-danger')
        P2H.innerHTML = "YOU'RE DEAD"
        P2H.classList.add('bg-dark')}
    if(PlayerH2 <= 25){
        P2H.classList.remove('bg-success')
        P2H.classList.remove('bg-warning')
        P2H.classList.add('bg-danger')
    }
    if(PlayerH2 <= 50){
        P2H.classList.remove('bg-success')
        P2H.classList.add('bg-warning')
    }
    if(PlayerH2 == 100){
        P2H.classList.add('bg-success')
    }
}

function drawWinnerMessage(){

    let PlayerH1 = players.player_one.playerHealth
    let PlayerH2 = players.player_two.playerHealth
    if(PlayerH1 <= 0){
        Swal.fire({
            toast: true,
            text: 'Mark Wins The Fight!! He is the ultimate saiyan!',
            position: 'center',
            timer: 5000,
            timerProgressBar: true,
            imageUrl: 'https://i.ytimg.com/vi/_NQ3mWcbiBA/maxresdefault.jpg'
          })
          setTimeout(function(){reload()}, 5000);
    }
    if(PlayerH2 <= 0){
        Swal.fire({
            toast: true,
            text: 'Jake Wins The Fight!! He is the ultimate saiyan!',
            position: 'center',
            timer: 5000,
            timerProgressBar: true,
            imageUrl: 'https://i.ytimg.com/vi/_NQ3mWcbiBA/maxresdefault.jpg'
          })
          setTimeout(function(){reload()}, 5000);
              
          }
          
    }

function reload(){
    window.location.reload(true)
}

// function randomSelector() {
    // let selector= Math.floor(Math.random()*3)
    
    // switch(selector){
        // case 0:
        // case 1:
            // return 'punch'
        // case 2:
        // case 3:
            // return 'kick'
        // }
// }

function P2Atk(atk){
    switch(atk){
        case 'punch':
            players.player_one.playerHealth -= 15;
            Swal.fire({
                toast: true,
                text: `PUNCH MOVE`,
                position: 'center',
                timer: 2000,
                timerProgressBar: true,
                imageUrl: 'https://i.ytimg.com/vi/dIsAbdshW-I/maxresdefault.jpg'
              })
            break;
        case 'kick':
            players.player_one.playerHealth -= 25;
            Swal.fire({
                toast: true,
                text: `KICK MOVE`,
                position: 'center',
                timer: 2000,
                timerProgressBar: true,
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0JAIlG-pyxIvrcQPm7tpOikZejBBImCF2jA&usqp=CAU'
              })
            break;
    }
    drawPlayerOneHealth();
    drawPlayerTwoHealth();
    drawWinnerMessage();
}
function P1Atk(atk){
    switch(atk){
        case 'punch':
            players.player_two.playerHealth -= 15;
            Swal.fire({
                toast: true,
                text: `PUNCH MOVE`,
                position: 'center',
                timer: 2000,
                timerProgressBar: true,
                imageUrl: 'https://i.ytimg.com/vi/dIsAbdshW-I/maxresdefault.jpg'
              })
            break;
        case 'kick':
            players.player_two.playerHealth -= 25;
            Swal.fire({
                toast: true,
                text: `KICK MOVE`,
                position: 'center',
                timer: 2000,
                timerProgressBar: true,
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0JAIlG-pyxIvrcQPm7tpOikZejBBImCF2jA&usqp=CAU'
              })
            break;
        default:

    }
    drawPlayerOneHealth();
    drawPlayerTwoHealth();
    drawWinnerMessage()
}

function jakesMessage(){
    Swal.fire({
        toast: true,
        text: `Jake yells: "Isn't That Neat!!"`,
        position: 'center',
        timer: 2000,
        timerProgressBar: true,
        imageUrl: 'https://i.pinimg.com/originals/70/df/84/70df84159c05666dc72d0d4d6d2b575e.jpg'
      })
}
function marksMessage(){
    Swal.fire({
        toast: true,
        text: 'Mark yells: "Nailed It! Nat 20!!"',
        position: 'center',
        timer: 2000,
        timerProgressBar: true,
        imageUrl: 'https://avatarfiles.alphacoders.com/195/195926.jpg'
      })
    
}

drawPlayerOneHealth()
drawPlayerTwoHealth()

