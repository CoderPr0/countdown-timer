const countDownDate = new Date("Feb 5, 2024 15:37:25").getTime()
const timeBox = [...document.querySelector('.time').children]

const x = setInterval(()=>{
    const now = new Date().getTime()
    const distance = countDownDate - now
    
    const days = Math.floor(distance / (1000*60*60*24))
    const hours = Math.floor(distance % (1000*60*60*24) / (1000*60*60))
    const minutes = Math.floor(distance % (1000*60*60) / (1000*60))
    const seconds = Math.floor(distance % (1000*60) / 1000)

    timeBox.forEach(box=>{
        const p = box.querySelector('.num>p')

        switch(box.classList[0]){
            case 'days':
                p.innerHTML = days
                break
            case 'hours':
                p.innerHTML = hours
                break
            case 'minutes':
                p.innerHTML = minutes
                break
            case 'seconds':
                p.innerHTML = seconds
                break
        }

        // Once it reaches 0, stop function
        const time = [days, hours, minutes, seconds]

        if(time.every(digit=> digit == 0) == true){
            clearInterval(x)
        }
    })
}, 1000)
