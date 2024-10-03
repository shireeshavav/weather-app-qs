let form=document.querySelector("form")
form.addEventListener("submit",(eo)=>{
    eo.preventDefault()
    let location=document.getElementById("location").value
    let weather=async()=>{
        //~fetch  weather API
        let openweather=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2301d8ef96807c402f4f14498172ce8b`)
        let finaldata=await openweather.json()
        // console.log(finaldata)

        let descriptionValue=(finaldata.weather[0].main).toUpperCase()
        console.log(descriptionValue)
        let temperatureValue=(Math.round(finaldata.main.temp-273))
        let humidityValue=(finaldata.main.humidity)
        let desc=document.getElementById("description")
        desc.innerHTML=descriptionValue


    
    let temperature=document.querySelector("#temperature>h1")
    temperature.innerHTML=`${temperatureValue}<sup>0</sup><img src="temperature.png" alt="" height="30px" width="15px" id="logot">`

    
    let humidity=document.querySelector("#humidity>h1")
    humidity.innerHTML=`${humidityValue}<span>kmph</span><img src="humidityicon.png" alt="" height="20px" width="20px">`

    
    
    //~to change image and background image
     let img=document.getElementById("img")
    //  console.log(img)
     let backgif=document.getElementById("main_container")
    //  console.dir(backgif)
     switch(descriptionValue){
     
            case 'CLEAR':
                img.src="clear.png"
                backgif.style.backgroundImage="url(cleargif.gif)"
            break;
            case 'CLOUDS':
                 img.src='cloud.png'
                backgif.style.backgroundImage='url(cloudgif.gif)'
            break;
            
            case 'MIST':
                 img.src='mist.png'
                backgif.style.backgroundImage='url(mistgif.gif)'
            break;
            
            case 'HAZE':
                 img.src='haze.png'
                backgif.style.backgroundImage='url(hazegif.gif)'
            break;
      
            case 'RAIN':
                  img.src='rainy.png'
                backgif.style.backgroundImage='url(raingif.gif)'
            break;
            
            case 'DUST':
                  img.src='dust.png'
                backgif.style.backgroundImage='url(assets\dustgif.gif)'
            break;
        
            default:
                 img.src='assets\def.png'
                backgif.style.backgroundImage='url(cleargif.gif)'
                break;
     }



    }
    weather()

})