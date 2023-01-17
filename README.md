<p align="center"><a href="http://qira.eu.org" target="_blank"><img src="https://i.ibb.co/gt8XvvN/logo-viriustrade.png" width="200" height="180" alt="Virius Logo">
<!--   <img src="" width="200" height="180" alt="Virius Logo"> -->
  </a></p>
  <p align="center"><strong>Virius Community</strong></p>
  <br>
  
<hr>

# anti afk JavaScript Game

this script has been tested in [Pony.town](https://pony.town)
and [Ashes.town](https://ashes.town). this script can be used to another JavaScript Game.


## Authors

- [@ghrimXi](https://www.github.com/qiraxyz)


## Appendix

just for reminder this script is in beta version. this script is only can be used in console inspect element (F12).

## Deployment

To deploy this project copy this.

```javascript
  // global variable
var auto; 
var play_afk;
var setTime;
var DOM;

// set time click 15 min = 900000ms
setTime = 900000;

// set id canvas in game
DOM = 'canvas';

// get canvas games
auto = document.getElementById(DOM);

function play() {
    play_afk = setInterval(function(){
        auto.click()
    }, setTime);
    play_afk.start()   
}
```

and then go to the inspect element and go to console paste and enter.

## FAQ

#### can i afk for 24/7?

yes u can

#### can i use in mobile?

for now this script can't be use in mobile apps.

