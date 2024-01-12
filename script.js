const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body")

buttons.forEach(function (button) {
    // if you want to change bgcolor when mouseout,mouseover then one modified  write ('click ', 'mouseout' ,'mouseover')
    button.addEventListener('click' ,function (e) {
        console.log(e)
        console.log(e.target)

        // if(e.target.id === 'grey')
        // body.style.backgroundColor = e.target.id;

        // if(e.target.id === 'white')
        // body.style.backgroundColor = e.target.id;

        // if(e.target.id === 'blue')
        // body.style.backgroundColor = e.target.id;

        // if(e.target.id === 'yellow')
        // body.style.backgroundColor = e.target.id;

        // if(e.target.id === 'lightblue')
        // body.style.backgroundColor = e.target.id;

        // if(e.target.id === 'green')
        // body.style.backgroundColor = e.target.id;

        // if(e.target.id === 'pink')
        // body.style.backgroundColor = e.target.id;


        //  method 2


        switch (e.target.id) {
            case 'grey':
            case 'white':
            case 'blue':
            case 'yellow':
            case 'lightblue':
            case 'green':
            case 'pink':
                body.style.backgroundColor = e.target.id;
                break;

                
            default:
                // Handle the case when the color is not one of the specified ones
                break;
        }
        

    })
})