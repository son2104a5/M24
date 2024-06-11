function strings(type:string|Array<string>) {
    if(typeof type === 'string'){
        return type;
    }else{
        for(let i = 0; i < type.length;i++){
            console.log(type[i]);
        }
    }
}

console.log(strings('hello'));
 
strings(['hello','my','name','is','Son'])