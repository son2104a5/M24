function delayCallback(time: number){
    setTimeout(()=>{
        callDelayCallback();
    }, time)
}
delayCallback(2000)
function callDelayCallback(){
    console.log('Hàm delayCallback được gọi!');
}