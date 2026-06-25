// const getLocalISOString=(dt:string) =>{
//     var now = new Date(dt);
//     // Get local time as ISO string with offset at the end
//     var tzo = -now.getTimezoneOffset();
//     var dif = tzo >= 0 ? '+' : '-';
//     var pad = function(n:any, width:any) {
//         width = width || 2;
//         n = Math.abs(Math.floor(n)) + '';
//         return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
//     };
//     return now.getFullYear() 
//         + '-' + pad(now.getMonth()+1)
//         + '-' + pad(now.getDate())
//         + 'T' + pad(now.getHours())
//         + ':' + pad(now.getMinutes()) 
//         + ':' + pad(now.getSeconds())
//         + '.' + pad(now.getMilliseconds(),3)
//         + dif + pad(tzo / 60) 
//         + ':' + pad(tzo % 60);
// }

// export default getLocalISOString

function toIsoString(dt:string) {
  var date = new Date(dt);
  var tzo = -date.getTimezoneOffset(),
      dif = tzo >= 0 ? '+' : '-',
      pad = function(num:any) {
          return (num < 10 ? '0' : '') + num;
      };

  return date.getFullYear() +
      '-' + pad(date.getMonth() + 1) +
      '-' + pad(date.getDate()) +
      'T' + pad(date.getHours()) +
      ':' + pad(date.getMinutes()) +
      ':' + pad(date.getSeconds()) +
      dif + pad(Math.floor(Math.abs(tzo) / 60)) +
      ':' + pad(Math.abs(tzo) % 60);
}

export default toIsoString