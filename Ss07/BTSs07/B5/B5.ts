function typeAny(userName:any):void {
    console.log(userName.toUpperCase());
    
}
typeAny("hoa")
function typeUnknown(userName:unknown):void {
    if(typeof userName=="string")  {
        console.log(userName.toUpperCase());
    } else{
        console.log("không phải là string"); 
    }
}
typeAny("hoa")

//==>any có thể là bất kì kiểu dữ liệu nào, unknown cũng vậy nhưng chặt chẽ hơn, cần phải kiểm tra mới xác định được kiểu dữ liệu