
function updateTimes() {
    // Get the current date and time in the specified time zones
    const datePT = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
    const dateCET = new Date().toLocaleString('en-GB', { timeZone: 'Europe/Paris' });

    // Update the contents of the divs with the formatted dates
    document.getElementById('PT').textContent = `PT : ${datePT}`;
    document.getElementById('CET').textContent = `CET : ${dateCET}`;
  }

  // Call the updateTimes function every second
  //updateTimes();
  setInterval(updateTimes, 10);

// PT:pacific time
// CET:central european time









// function getTime(zone) {
//     const now = new Date();
//     const options = { timeZone: zone };
//     return now.toLocaleString('en-US', options);
// }

// function showTime() {
//     const usEasternTime = getTime('en-US', { timeZone: 'America/Los_Angeles' });
//     document.getElementById('PT').innerText = usEasternTime;
//     const centralEuropeanTime = getTime('en-GB', { timeZone: 'Europe/Paris' });
//     document.getElementById('CET').innerText = CEN;
// }

// // 以下是前面提到的代码
// const intervalId = setInterval(updateTime, 1000);

// function updateTime() {
//     document.getElementById('PT').innerText=getTime('en-US', { timeZone: 'America/Los_Angeles' })
//     document.getElementById('CET').innerText=getTime('en-GB', { timeZone: 'Europe/Paris' })
// }

// Sure, here are some examples of toLocaleString() parameters for the commonly used time zones:

// • Pacific Time (PT): 'en-US', { timeZone: 'America/Los_Angeles' }
// • Mountain Time (MT): 'en-US', { timeZone: 'America/Denver' }
// • Central Time (CT): 'en-US', { timeZone: 'America/Chicago' }
// • Eastern Time (ET): 'en-US', { timeZone: 'America/New_York' }
// • Atlantic Time (AT): 'en-US', { timeZone: 'America/Halifax' }
// • Greenwich Mean Time (GMT): 'en-GB', { timeZone: 'GMT' }
// • Coordinated Universal Time (UTC): 'en-US', { timeZone: 'UTC' }
// • Central European Time (CET): 'en-GB', { timeZone: 'Europe/Paris' }
// • Eastern European Time (EET): 'en-GB', { timeZone: 'Europe/Bucharest' }
// • Australian Eastern Standard Time (AEST): 'en-AU', { timeZone: 'Australia/Sydney' }
// • Japan Standard Time (JST): 'ja-JP', { timeZone: 'Japan' }
// • China Standard Time (CST): 'zh-CN', { timeZone: 'Asia/Shanghai' }
// • India Standard Time (IST): 'en-IN', { timeZone: 'Asia/Kolkata' }