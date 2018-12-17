// console.log('sanity check')
// add aready listener to the whole Dom

// $(document).ready(()=>{
//     console.log('sanity check')    
// })
$('button').click(function(){
    console.log($(this))
    let gridSize = $(this).attr('diff')
    console.log(gridSize)
})