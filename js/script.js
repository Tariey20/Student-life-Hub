console.log("Hello Git, I am learning!");

function calculateStudyDays(startDate, endDate) {
    let start = new Date(startDate);
    let end = new Date(endDate);
    
    if (end < start) {
        throw new Error("End date cannot be before start date");
    }
    
    let count = 0;
    let current = new Date(start);
    
    while (current <= end) {
        let day = current.getDay(); // 0 = Sunday, 6 = Saturday
        if (day !== 0 && day !== 6) {
            count++;
        }
        current.setDate(current.getDate() + 1);
    }
    return count;
}

// Test it
let days = calculateStudyDays("2026-10-19", "2026-10-23");
document.getElementById("result").innerText = "Study days Mon-Fri: " + days;
console.log("Study days:", days);