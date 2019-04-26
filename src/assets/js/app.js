let nowDate = new Date();

function createCalendar(id, year, month) {
  let elem = document.getElementById(id);
  let d = new Date(year, month);
  let table = '<table><tr><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></tr><tr>';
  for (let i = 0; i < getDay(d); i++) {
    table += '<td></td>';
  }

  while (d.getMonth() == month) {
    table += '<td id="dayOfMonth" onclick="pickDate('+ d.getDate()+')">' + d.getDate() + '</td>';

    if (getDay(d) % 7 == 6) {
      table += '</tr><tr>';
    }

    d.setDate(d.getDate() + 1);
  }

  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += '<td></td>';
    }
  }

  table += '</tr></table>';

  elem.innerHTML = table;
}

function getDay(date) {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
}

function pickDate(data){
  let pickedDay = new Date(nowDate.getFullYear(),nowDate.getMonth(),data);
  let month = pickedDay.getMonth()+1;
  let day = pickedDay.getDate();
  if (month < 10) {
    month = '0'+month;
  }
  if (day < 10) {
    day = '0'+day;
  }
  document.getElementById("nowDate").innerHTML = 'Picked date: ' + day + '.' + month + '.' +  pickedDay.getFullYear();
}

createCalendar("cal", nowDate.getFullYear(), nowDate.getMonth());
