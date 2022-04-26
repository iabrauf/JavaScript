const TimeConversion = timeIn12h =>{
    let [time,cycle] = timeIn12h.split(' ');
    let [hour,min,sec] = time.split(':');
    let hourInIntger = parseInt(hour);
    try{
        if (hourInIntger > 12){
            throw new Error;
        }
            if (hour === '12' ){
                hour = '00';
            }
            if( cycle === 'PM'){
                hour = hourInIntger + 12;
            }
        
        }catch(err){
            console.log("Time is not in 12h format")
            return
        }
         return `${hour}:${min}:${sec}`;
};

console.log(TimeConversion('15:00:00 PM'));