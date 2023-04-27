// список пісень
var playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
    ];

 
        
const createList = (song) => {
    const li = document.createElement('li');
    li.innerText =song;
    document.querySelector('.song-list').append(li);
}

playList.forEach((object) => createList(object.song));


// світлофор
function changeLight() {
    let activeRed = document.querySelectorAll('.red.active');
    let activeYellow = document.querySelectorAll('.yellow.active');
    let activeGreen = document.querySelectorAll('.green.active');

    if(activeGreen.length > 0) {
        turnOffLight();
        document.querySelector('.red').classList.add('active');
        return;
    }
    if(activeRed.length > 0) {
        turnOffLight();
        document.querySelector('.yellow').classList.add('active');
        return;
    } 
    if(activeYellow.length > 0) {
        turnOffLight();
        document.querySelector('.green').classList.add('active');
        return;
    }
}


function turnOffLight() {
    let elements = document.querySelectorAll('.light');
    elements.forEach((element) =>  element.classList.remove('active'));
}
 //модальне вікно 
    function openModal() {
      document.getElementById('myModal').style.display = 'block';
    }

    function closeModal() {
      document.getElementById('myModal').style.display = 'none';
    }
