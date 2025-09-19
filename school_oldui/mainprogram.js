
let lunchSelection = 0;

const schedulenormal = {
    A: { start: "07:45", end: "08:45" },
    B: { start: "08:48", end: "09:48" },
    C: { start: "09:51", end: "10:51" },
    D: { start: "10:54", end: "12:24" },
    E: { start: "12:27", end: "13:27" },
    F: { start: "13:30", end: "14:30" },
};

const schooltimes = {
"09/01/2025": false,
    "09/02/2025": true,
    "09/03/2025": true,
    "09/04/2025": true,
    "09/05/2025": true,
    "09/06/2025": false,
    "09/07/2025": false,
    "09/08/2025": true,
    "09/09/2025": true,
    "09/10/2025": true,
    "09/11/2025": true,
    "09/12/2025": true,
    "09/13/2025": false,
    "09/14/2025": false,
    "09/15/2025": true,
    "09/16/2025": true,
    "09/17/2025": true,
    "09/18/2025": true,
    "09/19/2025": true,
    "09/20/2025": false,
    "09/21/2025": false,
    "09/22/2025": true,
    "09/23/2025": true,
    "09/24/2025": true,
    "09/25/2025": true,
    "09/26/2025": true,
    "09/27/2025": false,
    "09/28/2025": false,
    "09/29/2025": true,
    "09/30/2025": true,

    "10/01/2025": true,
    "10/02/2025": true,
    "10/03/2025": true,
    "10/04/2025": false,
    "10/05/2025": false,
    "10/06/2025": true,
    "10/07/2025": true,
    "10/08/2025": true,
    "10/09/2025": true,
    "10/10/2025": true,
    "10/11/2025": false,
    "10/12/2025": false,
    "10/13/2025": false,
    "10/14/2025": true,
    "10/15/2025": true,
    "10/16/2025": true,
    "10/17/2025": true,
    "10/18/2025": false,
    "10/19/2025": false,
    "10/20/2025": true,
    "10/21/2025": true,
    "10/22/2025": true,
    "10/23/2025": true,
    "10/24/2025": true,
    "10/25/2025": false,
    "10/26/2025": false,
    "10/27/2025": true,
    "10/28/2025": true,
    "10/29/2025": true,
    "10/30/2025": true,
    "10/31/2025": true,

    "11/01/2025": false,
    "11/02/2025": false,
    "11/03/2025": true,
    "11/04/2025": false,
    "11/05/2025": true,
    "11/06/2025": true,
    "11/07/2025": true,
    "11/08/2025": false,
    "11/09/2025": false,
    "11/10/2025": true,
    "11/11/2025": false,
    "11/12/2025": true,
    "11/13/2025": true,
    "11/14/2025": true,
    "11/15/2025": false,
    "11/16/2025": false,
    "11/17/2025": true,
    "11/18/2025": true,
    "11/19/2025": true,
    "11/20/2025": true,
    "11/21/2025": true,
    "11/22/2025": false,
    "11/23/2025": false,
    "11/24/2025": true,
    "11/25/2025": true,
    "11/26/2025": false,
    "11/27/2025": false,
    "11/28/2025": false,
    "11/29/2025": false,
    "11/30/2025": false,

    "12/01/2025": true,
    "12/02/2025": true,
    "12/03/2025": true,
    "12/04/2025": true,
    "12/05/2025": true,
    "12/06/2025": false,
    "12/07/2025": false,
    "12/08/2025": true,
    "12/09/2025": true,
    "12/10/2025": true,
    "12/11/2025": true,
    "12/12/2025": true,
    "12/13/2025": false,
    "12/14/2025": false,
    "12/15/2025": true,
    "12/16/2025": true,
    "12/17/2025": true,
    "12/18/2025": true,
    "12/19/2025": true,
    "12/20/2025": false,
    "12/21/2025": false,
    "12/22/2025": true,
    "12/23/2025": true,
    "12/24/2025": false,
    "12/25/2025": false,
    "12/26/2025": false,
    "12/27/2025": false,
    "12/28/2025": false,
    "12/29/2025": false,
    "12/30/2025": false,
    "12/31/2025": false,
    
    "01/01/2026": false,
    "01/02/2026": false,
    "01/03/2026": false,
    "01/04/2026": false,
    "01/05/2026": true,
    "01/06/2026": true,
    "01/07/2026": true,
    "01/08/2026": true,
    "01/09/2026": true,
    "01/10/2026": false,
    "01/11/2026": false,
    "01/12/2026": true,
    "01/13/2026": true,
    "01/14/2026": true,
    "01/15/2026": true,
    "01/16/2026": true,
    "01/17/2026": false,
    "01/18/2026": false,
    "01/19/2026": false,
    "01/20/2026": true,
    "01/21/2026": true,
    "01/22/2026": true,
    "01/23/2026": true,
    "01/24/2026": false,
    "01/25/2026": false,
    "01/26/2026": true,
    "01/27/2026": true,
    "01/28/2026": true,
    "01/29/2026": true,
    "01/30/2026": true,
    "01/31/2026": false,

    "02/01/2026": false,
    "02/02/2026": true,
    "02/03/2026": true,
    "02/04/2026": true,
    "02/05/2026": true,
    "02/06/2026": true,
    "02/07/2026": false,
    "02/08/2026": false,
    "02/09/2026": true,
    "02/10/2026": true,
    "02/11/2026": true,
    "02/12/2026": true,
    "02/13/2026": true,
    "02/14/2026": false,
    "02/15/2026": false,
    "02/16/2026": false,
    "02/17/2026": false,
    "02/18/2026": false,
    "02/19/2026": false,
    "02/20/2026": false,
    "02/21/2026": false,
    "02/22/2026": false,
    "02/23/2026": true,
    "02/24/2026": true,
    "02/25/2026": true,
    "02/26/2026": true,
    "02/27/2026": true,
    "02/28/2026": false,

    "03/01/2026": false,
    "03/02/2026": true,
    "03/03/2026": true,
    "03/04/2026": true,
    "03/05/2026": true,
    "03/06/2026": true,
    "03/07/2026": false,
    "03/08/2026": false,
    "03/09/2026": true,
    "03/10/2026": true,
    "03/11/2026": true,
    "03/12/2026": true,
    "03/13/2026": true,
    "03/14/2026": false,
    "03/15/2026": false,
    "03/16/2026": true,
    "03/17/2026": true,
    "03/18/2026": true,
    "03/19/2026": true,
    "03/20/2026": true,
    "03/21/2026": false,
    "03/22/2026": false,
    "03/23/2026": true,
    "03/24/2026": true,
    "03/25/2026": true,
    "03/26/2026": true,
    "03/27/2026": true,
    "03/28/2026": false,
    "03/29/2026": false,
    "03/30/2026": true,
    "03/31/2026": true,

    "04/01/2026": true,
    "04/02/2026": true,
    "04/03/2026": true,
    "04/04/2026": false,
    "04/05/2026": false,
    "04/06/2026": true,
    "04/07/2026": true,
    "04/08/2026": true,
    "04/09/2026": true,
    "04/10/2026": true,
    "04/11/2026": false,
    "04/12/2026": false,
    "04/13/2026": true,
    "04/14/2026": true,
    "04/15/2026": true,
    "04/16/2026": true,
    "04/17/2026": true,
    "04/18/2026": false,
    "04/19/2026": false,
    "04/20/2026": false,
    "04/21/2026": false,
    "04/22/2026": false,
    "04/23/2026": false,
    "04/24/2026": false,
    "04/25/2026": false,
    "04/26/2026": false,
    "04/27/2026": true,
    "04/28/2026": true,
    "04/29/2026": true,
    "04/30/2026": true,

    "05/01/2026": true,
    "05/02/2026": false,
    "05/03/2026": false,
    "05/04/2026": true,
    "05/05/2026": true,
    "05/06/2026": true,
    "05/07/2026": true,
    "05/08/2026": true,
    "05/09/2026": false,
    "05/10/2026": false,
    "05/11/2026": true,
    "05/12/2026": true,
    "05/13/2026": true,
    "05/14/2026": true,
    "05/15/2026": true,
    "05/16/2026": false,
    "05/17/2026": false,
    "05/18/2026": true,
    "05/19/2026": true,
    "05/20/2026": true,
    "05/21/2026": true,
    "05/22/2026": true,
    "05/23/2026": false,
    "05/24/2026": false,
    "05/25/2026": false,
    "05/26/2026": true,
    "05/27/2026": true,
    "05/28/2026": true,
    "05/29/2026": true,
    "05/30/2026": false,
    "05/31/2026": false,

    "06/01/2026": true,
    "06/02/2026": true,
    "06/03/2026": true,
    "06/04/2026": true,
    "06/05/2026": true,
    "06/06/2026": false,
    "06/07/2026": false,
    "06/08/2026": true,
    "06/09/2026": true,
    "06/10/2026": true,
    "06/11/2026": true,
    "06/12/2026": true,
}

const lunchnormal = {
    1: { start: "10:54", end: "11:24" },
    2: { start: "11:24", end: "11:54" },
    3: { start: "11:54", end: "12:24" },
    4: { start: "12:27", end: "12:57" },
}

const schedulelate = {
    A: { start: "08:45", end: "09:33" },
    B: { start: "09:36", end: "10:24" },
    C: { start: "10:27", end: "11:15" },
    D: { start: "11:18", end: "12:48" },
    E: { start: "12:51", end: "13:39" },
    F: { start: "13:42", end: "14:30" },
};

const lunchlate = {
    1: { start: "11:18", end: "11:48" },
    2: { start: "11:48", end: "12:18" },
    3: { start: "12:18", end: "12:48" },
    4: { start: "12:51", end: "13:21" },
}

let mockTime = null;

function setMockTime(timeString) {
    mockTime = timeString;
}

function setLunchPeriod(lunchPeriod) {
    lunchSelection = lunchPeriod;
    console.log(`Lunch period set to: ${lunchSelection}`);
    document.getElementById("lunch1").style.backgroundImage = lunchSelection == 1 ? "linear-gradient(#303030, #902020)" : "linear-gradient(#303030, #202020)";
    document.getElementById("lunch2").style.backgroundImage = lunchSelection == 2 ? "linear-gradient(#303030, #902020)" : "linear-gradient(#303030, #202020)";
    document.getElementById("lunch3").style.backgroundImage = lunchSelection == 3 ? "linear-gradient(#303030, #902020)" : "linear-gradient(#303030, #202020)";
    document.getElementById("lunch4").style.backgroundImage = lunchSelection == 4 ? "linear-gradient(#303030, #902020)" : "linear-gradient(#303030, #202020)";
    
    updateDisplay();
}

function getCurrentTime() {
    if (mockTime) {
        const [hours, minutes] = mockTime.split(":").map(Number);
        const now = new Date();
        now.setHours(hours, minutes, 0, 0); // Set the fake time
        return now;
    }
    return new Date(); // Return real time if mockTime is not set
}

function timeToMinutes(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
}
function getCurrentBlockAndTime(lunch, schedule, lunchschedule) {
    //setMockTime("11:50");
    const now = getCurrentTime();
    var currentMinutes = now.getHours() * 60 + now.getMinutes();
    let currentBlock = "N";
    let timeRemaining = 0;

    for (const [block, times] of Object.entries(schedule)) {
        var start = timeToMinutes(times.start);
        var end = timeToMinutes(times.end);
        
        if (currentMinutes >= start && currentMinutes < end) {
            currentBlock = block;
            break;
        }
    }

    if(currentBlock == "N"){
        return { currentBlock, timeRemaining };
    }

    if(currentBlock == "D") {
        if(lunch == 1) {
            if(currentMinutes < timeToMinutes(lunchschedule[1].end)) {
                timeRemaining = timeToMinutes(lunchschedule[1].end) - currentMinutes;
                currentBlock = "Lunch";
                return { currentBlock,  timeRemaining};
            }
            timeRemaining = end - currentMinutes;
        }
        if(lunch == 2) {
            if(currentMinutes < timeToMinutes(lunchschedule[2].start)) {
                timeRemaining = timeToMinutes(lunchschedule[2].start) - currentMinutes;
                currentBlock = "D [First Half]";
                return { currentBlock,  timeRemaining};
            }
            if(currentMinutes < timeToMinutes(lunchschedule[2].end)) {
                timeRemaining = timeToMinutes(lunchschedule[2].end) - currentMinutes;
                currentBlock = "Lunch";
                return { currentBlock,  timeRemaining};
            }
            currentBlock = "D [Second Half]";
            timeRemaining = end - currentMinutes;
        }
        if(lunch == 3) {
            if(currentMinutes >= timeToMinutes(lunchschedule[3].start)) {
                timeRemaining = timeToMinutes(lunchschedule[3].end) - currentMinutes;
                currentBlock = "Lunch";
                return { currentBlock,  timeRemaining};
            }
            timeRemaining = timeToMinutes(lunchschedule[3].start) - currentMinutes;
        }
        if(lunch == 4) {
            currentBlock = "D [Long Period]";
            timeRemaining = end - currentMinutes;
        }
    } else {
        timeRemaining = end - currentMinutes;
    }

    
    if(currentBlock == "E" && lunch == 4) {
        if(currentMinutes < timeToMinutes(lunchschedule[4].end)) {
            currentBlock = "Lunch";
            timeRemaining = timeToMinutes(lunchschedule[4].end) - currentMinutes;
        } else {
            currentBlock = "E [Shortened]";
        }
    }

    return { currentBlock, timeRemaining };
}


// school days

function calculateSchoolDaysLeft() {
    let today = new Date();          // Get the current date
    let daysLeft = 0;
    let isTodaySchoolDay = false;

    
    // Loop through the schooltimes object
    for (let key in schooltimes) {
        let schoolDate = new Date(key); // Parse the date from the object key
        
        // Check if today is a school day
        if (schoolDate.toDateString() === today.toDateString()) {
            isTodaySchoolDay = schooltimes[key];
        }
        // Only count school days after the start date
        if (schoolDate >= today && schooltimes[key] === true) {
            daysLeft++;
        }
    }
    return { daysLeft, isTodaySchoolDay };
}

function updateDisplay() {
    //const lunchSelection = document.getElementById("lunch").value;

    if(lunchSelection == 1 || lunchSelection == 2 || lunchSelection == 3 || lunchSelection == 4) {
        const today = new Date();
        if (today.getDay() === 3) {
            // Late start
            var { currentBlock, timeRemaining } = getCurrentBlockAndTime(lunchSelection, schedulelate, lunchlate);
        } else {
            // Normal start
            var { currentBlock, timeRemaining } = getCurrentBlockAndTime(lunchSelection, schedulenormal, lunchnormal);
        }
        if(currentBlock == "N") {
            currentBlock = "Not in any class";
        }
    
        document.getElementById("blockd").textContent = `${currentBlock}`;
        document.getElementById("minleft").textContent = `${timeRemaining}`;
    } else {
        document.getElementById("blockd").textContent = `Please select lunch period`;
    }

    var { daysLeft, isTodaySchoolDay } = calculateSchoolDaysLeft();
    
    document.getElementById("isthere").textContent = `${isTodaySchoolDay}`;
    document.getElementById("daysleft").textContent = `${daysLeft}`;

}

setInterval(updateDisplay, 1000);

updateDisplay();



