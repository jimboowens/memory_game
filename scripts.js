// console.log('sanity check')
// add aready listener to the whole Dom

$(document).ready(()=>{
    // console.log('sanity check')    
    $('button').click(function(){
        console.log($(this))
        let gridSize = $(this).attr('diff')
        // need to half the gridSize by 2, and then add one because we have to have to have pairs,
        // and we start at zero or do <=.
        console.log(gridSize)
        $('button').fadeOut(2000)
        $('h1').fadeOut(2000)
        let cards = []
        for (let i = 1; i <= gridSize/2; i++){
            let monsterNumber=i
            if (i<10){
                monsterNumber = 0+i
            }
            cards.push(`<img src="./images/monsters-0${monsterNumber}" />`)
            cards.push(`<img src="./images/monsters-0${monsterNumber}" />`)
        }
        cards.forEach(i => console.log(i))
    })

    // 
})