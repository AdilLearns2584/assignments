setInterval(()=>{
    let dateTime = new Date();
    let period = dateTime.getHours < 12 ? 'AM' :'PM';
    process.stdout.write(`\r ${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()} ${period}`)

},1000)