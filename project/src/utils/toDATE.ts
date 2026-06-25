const toDATE=(now:string)=>{
var date = new Date(now);
return date.toISOString().substring(0, 10);
}

export default toDATE