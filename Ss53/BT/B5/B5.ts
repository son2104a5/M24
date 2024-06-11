function checkCondition(condition: boolean, display: (condition: boolean) => void): void{
    setTimeout(()=>{
        display(condition)
    }, 1000)
}
checkCondition(true, display)
checkCondition(false, display)
function display(condition: boolean): void{
    console.log('Điều kiện trả về:', condition);
    
}