function calcAverageCalories(days){
    let totalCalorie = 0;
    let calcDays = 0;
    const daysOfWeek = {
        0 : "monday",
        1 : "tuesday",
        2 : "wednesday",
        3 : "thursday",
        4 : "friday",
        5 : "saturday",
        6 : "sunday"
    }
    days.forEach(({day, calories}) => {
        if(Object.values(daysOfWeek).includes(day.toLowerCase())){
            totalCalorie += calories;
            calcDays++;
        }
        else{
            console.log(`Invalid day of the week: ${day}, therefore not included in the calculations`);
        }
    });
    return totalCalorie === 0 ? totalCalorie : parseFloat(totalCalorie/calcDays).toFixed(2);
}

console.log("-------------------- Gorev 2 --------------------");
console.log(
    calcAverageCalories([
      { day: "monday", calories: 3010 },
      { day: "tuesday", calories: 3200 },
      { day: "wednesday", calories: 3120 },
      { day: "thursday", calories: 2900 },
      { day: "friday", calories: 3450 },
      { day: "saturday", calories: 3280 },
      { day: "sunday", calories: 3300 }
    ])
  ); // 3180
  
  console.log(
    calcAverageCalories([
      { day: "monday", calories: 2040 },
      { day: "tuesday", calories: 2270 },
      { day: "wednesday", calories: 2420 },
      { day: "thursday", calories: 1900 },
      { day: "friday", calories: 2370 },
      { day: "saturday", calories: 2280 },
      { day: "sunday", calories: 2610 }
    ])
  ); // 2270
  
  console.log(
    calcAverageCalories([])
  ); // 0