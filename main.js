var n
 initialize()
// setInterval(()=>{
//     makeLeave($(`.images>img:nth-child(${x(n)})`))
//     .one('transitionend',(e)=>{
//         makeEnter($(e.currrentTarget))
//     })
//     makeCurrent($(`.images>img:nth-child(${x(n+1)})`))
//     n+=1
// },3000)
setInterval(()=>{
    makeLeave(getImage(n))
      .one('transitionend', (e)=>{
        makeEnter($(e.currentTarget))
      })
    makeCurrent(getImage(n+1))
    n += 1
  },3000)

function getImage(n){
    return $(`.images > img:nth-child(${x(n)})`)
  }
function x(n){
    if(n>3){
        n=n%3
        if(n===0){
            n=3
        }
    }
    return n
}

function initialize(){
    n=1
    $(`.images>img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter')
}
function makeCurrent($node){
    $node.removeClass('enter leave').addClass('current')
    // return $node
}
function makeLeave($node){
    $node.removeClass('current enter').addClass('leave')
    return $node
}
function makeEnter($node){
    $node.removeClass('current leave').addClass('enter')
    return $node
}