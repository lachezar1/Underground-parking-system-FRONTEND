let startTime = "";
let duration = "";
let spaceId = 0;
var availableSpots = [];
//date and time
function load() {
    setDate();
    setToday();
    restartFilter();
}

//TOAST
const toast = document.getElementById('myToast');
const closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click', () => {
    toast.classList.remove('showToast');
})

function loadToast() {
    toast.classList.add('showToast');
    setTimeout(() => {
        toast.classList.remove('showToast');
        location.reload();
    }, 3000);
}

//DATE
var btn_today = document.getElementById('btn-today');
var btn_tomorrow = document.getElementById('btn-tomorrow');
var today = document.getElementById('today');
var tomorrow = document.getElementById('tomorrow');

var todayDate;
var tomorrowDate;
var todaybool = true;

/*Get Date*/
function setDate() {
    document.getElementById('filter-btn').click();
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    // todayDate = (String(day).padStart(2, '0')) + "/" + (String(month).padStart(2, '0')) + "/" + (String(year).padStart(4, '0'));

    todayDate = (String(year).padStart(4, '0')) + "-" + (String(month).padStart(2, '0')) + "-" + (String(day).padStart(2, '0'));
    document.getElementById('todays-date').innerHTML = (String(day).padStart(2, '0'));
    document.getElementById('todays-month').innerHTML = (String(month).padStart(2, '0'));
    document.getElementById('todays-year').innerHTML = (String(year).padStart(4, '0'));

    var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    day = currentDate.getDate();
    month = currentDate.getMonth() + 1;
    year = currentDate.getFullYear();
    tomorrowDate = (String(year).padStart(4, '0')) + "-" + (String(month).padStart(2, '0')) + "-" + (String(day).padStart(2, '0'));

    document.getElementById('tomorrows-date').innerHTML = (String(day).padStart(2, '0'));
    document.getElementById('tomorrows-month').innerHTML = (String(month).padStart(2, '0'));
    document.getElementById('tomorrows-year').innerHTML = (String(year).padStart(4, '0'));
}

function setToday() {
    todaybool = true;
    /*Activate Today btn*/
    btn_today.style.backgroundColor = '#202020';
    btn_today.style.borderBlockColor = '#202020';
    btn_today.style.color = '#E6BD4C';
    today.classList.remove('opacity-50');

    /*Deactivate Tomorrow btn*/
    btn_tomorrow.style.backgroundColor = '#E6BD4C';
    btn_tomorrow.style.borderBlockColor = '#202020';
    btn_tomorrow.style.color = '#000000';
    tomorrow.classList.add('opacity-50');

}
function setTomorrow() {
    todaybool = false;
    /*Deactivate Today btn*/
    btn_today.style.backgroundColor = '#E6BD4C';
    btn_today.style.borderBlockColor = '#202020';
    btn_today.style.color = '#000000';
    today.classList.add('opacity-50');

    /*Activate Tomorrow btn*/
    btn_tomorrow.style.backgroundColor = '#202020';
    btn_tomorrow.style.borderBlockColor = '#202020';
    btn_tomorrow.style.color = '#E6BD4C';
    tomorrow.classList.remove('opacity-50');
}

//HOURS
var hour_text = document.getElementById('hour-text');
var mins_text = document.getElementById('mins-text');
var arrow_upH = document.getElementById('arrow-upH');
var arrow_downH = document.getElementById('arrow-downH');
var arrow_upM = document.getElementById('arrow-upM');
var arrow_downM = document.getElementById('arrow-downM');

var hour_text2 = document.getElementById('hour-text2');
var mins_text2 = document.getElementById('mins-text2');
var arrow_upH2 = document.getElementById('arrow-upH2');
var arrow_downH2 = document.getElementById('arrow-downH2');
var arrow_upM2 = document.getElementById('arrow-upM2');
var arrow_downM2 = document.getElementById('arrow-downM2');

var hour = 7;
var min = 0;
var hour2 = 7;
var min2 = 0;

function upH(par) {
    if (par == 1) {
        if (hour != 7) {
            hour--;
            hour_text.innerText = (String(hour).padStart(2, '0'));
            if (arrow_downH.classList == "px-1 fs-4 bi bi-caret-down") {
                arrow_downH.classList.add('bi-caret-down-fill');
                arrow_downH.classList.remove('bi-caret-down');
            }
            if (hour == 7) {
                arrow_upH.classList.add('bi-caret-up');
                arrow_upH.classList.remove('bi-caret-up-fill');
            }
        }
    }
    else if (par == 2) {
        if (hour2 != 7) {
            hour2--;
            hour_text2.innerText = (String(hour2).padStart(2, '0'));
            if (arrow_downH2.classList == "px-1 fs-4 bi bi-caret-down") {
                arrow_downH2.classList.add('bi-caret-down-fill');
                arrow_downH2.classList.remove('bi-caret-down');
            }
            if (hour2 == 7) {
                arrow_upH2.classList.add('bi-caret-up');
                arrow_upH2.classList.remove('bi-caret-up-fill');
            }
        }
    }
}

function downH(par) {
    if (par == 1) {
        if (hour != 20) {
            hour++;
            hour_text.innerText = (String(hour).padStart(2, '0'));
            if (arrow_upH.classList == "px-1 fs-4 bi bi-caret-up") {
                arrow_upH.classList.add('bi-caret-up-fill');
                arrow_upH.classList.remove('bi-caret-up');
            }
            if (hour == 20) {
                arrow_downH.classList.add('bi-caret-down');
                arrow_downH.classList.remove('bi-caret-down-fill');

            }
        }
    }
    else if (par == 2) {
        if (hour2 != 20) {
            hour2++;
            hour_text2.innerText = (String(hour2).padStart(2, '0'));
            if (arrow_upH2.classList == "px-1 fs-4 bi bi-caret-up") {
                arrow_upH2.classList.add('bi-caret-up-fill');
                arrow_upH2.classList.remove('bi-caret-up');
            }
            if (hour2 == 20) {
                arrow_downH2.classList.add('bi-caret-down');
                arrow_downH2.classList.remove('bi-caret-down-fill');

            }
        }
    }
}

function upM(par) {
    if (par == 1) {
        if (min != 0) {
            mins_text.innerText = '';
            if (min <= 15) {
                min = 0;
            }
            else if (min <= 30) {
                min = 15;
            }
            else if (min <= 45) {
                min = 30;
            }
            else if (min <= 60) {
                min = 45;
            }
            else {
                return "invalid";
            }
            mins_text.innerText = (String(min).padStart(2, '0'));
            if (arrow_downM.classList == "px-1 fs-4 bi bi-caret-down") {
                arrow_downM.classList.add('bi-caret-down-fill');
                arrow_downM.classList.remove('bi-caret-down');
            }
            if (min == 0) {
                arrow_upM.classList.add('bi-caret-up');
                arrow_upM.classList.remove('bi-caret-up-fill');
            }
        }
    }

    else if (par == 2) {
        if (min2 != 0) {
            mins_text2.innerText = '';
            if (min2 <= 15) {
                min2 = 0;
            }
            else if (min2 <= 30) {
                min2 = 15;
            }
            else if (min2 <= 45) {
                min2 = 30;
            }
            else if (min2 <= 60) {
                min2 = 45;
            }
            else {
                return "invalid";
            }
            mins_text2.innerText = (String(min2).padStart(2, '0'));
            if (arrow_downM2.classList == "px-1 fs-4 bi bi-caret-down") {
                arrow_downM2.classList.add('bi-caret-down-fill');
                arrow_downM2.classList.remove('bi-caret-down');
            }
            if (min2 == 0) {
                arrow_upM2.classList.add('bi-caret-up');
                arrow_upM2.classList.remove('bi-caret-up-fill');
            }
        }
    }

}

function downM(par) {
    if (par == 1) {
        if (min < 60) {
            if (min < 15) {
                min = 15;
            }
            else if (min < 30) {
                min = 30;
            }
            else if (min < 45) {
                min = 45;
            }
            else {
                return "invalid";
            }
            mins_text.innerText = String(min).padStart(2, '0');
            if (arrow_upM.classList == "px-1 fs-4 bi bi-caret-up") {
                arrow_upM.classList.add('bi-caret-up-fill');
                arrow_upM.classList.remove('bi-caret-up');
            }
            if (min == 45) {
                arrow_downM.classList.add('bi-caret-down');
                arrow_downM.classList.remove('bi-caret-down-fill');

            }
        }
    }

    if (par == 2) {
        if (min2 < 60) {
            if (min2 < 15) {
                min2 = 15;
            }
            else if (min2 < 30) {
                min2 = 30;
            }
            else if (min2 < 45) {
                min2 = 45;
            }
            else {
                return "invalid";
            }
            mins_text2.innerText = String(min2).padStart(2, '0');
            if (arrow_upM2.classList == "px-1 fs-4 bi bi-caret-up") {
                arrow_upM2.classList.add('bi-caret-up-fill');
                arrow_upM2.classList.remove('bi-caret-up');
            }
            if (min2 == 45) {
                arrow_downM2.classList.add('bi-caret-down');
                arrow_downM2.classList.remove('bi-caret-down-fill');

            }
        }
    }

}

//APPLYING FILTERS
function applyingFilters() {
    let result;

    let fromTime = Number(hour) * 60 + Number(min);
    let toTime = Number(hour2) * 60 + Number(min2);

    const now = new Date();
    const nowTime = now.getHours() * 60 + now.getMinutes();

    if (todaybool == true) {
        result = todayDate;
        if (toTime < nowTime) {
            alert("The end time has already passed. (it ends it)");
            return "ERROR";
        }
        else if (fromTime < nowTime) { //THIS SHOULD BE TESTED ON FRIDAY
            alert("The start time has already passed. (but it proceeds/accepts it)");
        }
    }
    else { result = tomorrowDate; }

    if (fromTime < 7 * 60) {
        alert("The start time is before business hours (07:00-20:00).");
        return "ERROR";
    }
    if (toTime > (20 * 60)) {
        alert("The end time is hereafter business hours (07:00-20:00).");
        return "ERROR";
    }

    if (((toTime - fromTime) < 5)) {
        if ((toTime - fromTime) >= 0) {
            alert("Less than 5-minute stay.");
        }
        else {
            alert("Invalid time interval.");
        }
        return "ERROR";
    }
    else if ((toTime - fromTime) > 8 * 60) {
        alert("Over 8-hour stay.");
        return "ERROR";
    }

    let durationH = Math.floor((toTime - fromTime) / 60);
    let durationM = (toTime - fromTime) - durationH * 60;
    let wholeDuration = (String(durationH).padStart(2, '0')) + ":" + (String(durationM).padStart(2, '0')) + ":" + (String(0).padStart(2, '0'));

    document.getElementById('close-filter').click();
    let from = result + "T" + (String(hour).padStart(2, '0')) + ":" +
        (String(min).padStart(2, '0')) + ":00.000Z";

    let to = result + "T" + (String(hour2).padStart(2, '0')) + ":" +
        (String(min2).padStart(2, '0')) + ":00.000Z";
    fetchFilter(from, to);


    startTime = from;
    duration = wholeDuration;
}


function bookSpace() {

    let url = 'http://localhost:8080/api/booking';
    let token = localStorage.getItem('token');
    const headers = new Headers();


    if (token) {
        headers.append(
            'Authorization', `Basic ${token}`
        )
    }
    headers.append('accept', `*/*`);
    headers.append('Content-Type', `application/json`);
    const body = {
        parkSpaceId: spaceId,
        duration: duration,
        startTime: startTime
    }


    fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
    })
        .then((resp) => {
            if (!resp.ok) {
                return resp.text().then(text => { throw new Error(text) })
            }
            loadToast();
        })
        .catch(error => {
            console.log('ERROR: ' + error);
                    });
}
//2024-02-29T10:38:56.336Z
async function fetchFilter(from, to) {
    let url = new URL("http://localhost:8080/api/parkSpaceGetAvailableByFilter?From=&To=");
    url.searchParams.set('From', from);
    url.searchParams.set('To', to);

    let token = localStorage.getItem('token');
    const headers = new Headers();
    if (token) {
        headers.append(
            'Authorization', `Basic ${token}`
        )
    }
    headers.append(
        'accept', `text\plain`
    )
    await fetch(url, {
        method: 'GET',
        headers
    })
        .then((resp) => {
            if (!resp.ok) {
                return resp.text().then(text => { throw new Error(text) })
            }
            return resp.json();
        }).then(resp => {
            availableSpots = resp;
            document.getElementById("bookBtn").disabled = false;
            document.getElementById('close-filter').click();

            availableSpots.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });

            last_index = 0;
            section = availableSpots[last_index].name[0];
            image_of_spot.src = './parking_images/car1.svg';
            current_spot.innerHTML = availableSpots[last_index].name;
            spaceId = availableSpots[last_index].parkSpaceId;

            if (availableSpots[last_index].name == "A1" || availableSpots[last_index].name == "B1") {
                image_of_spot.src = './parking_images/car1.svg';
            }
            else if (Number(availableSpots[last_index].name[1]) % 2 == 1) {
                image_of_spot.src = './parking_images/car3.svg';
            }
            else if (Number(availableSpots[last_index].name[1]) % 2 == 0) {
                image_of_spot.src = './parking_images/car2.svg';
            }

            // sessionStorage.setItem("capacity", loadAvailability());
            // document.getElementById('capacity').load();
            console.log(loadAvailability());
            drawCapacity(loadAvailability());
        })
        .catch(error => {
            console.log('ERROR: ' + error);
        });
}

//RESTARTING FILTERS
function restartFilter() {
    hour = 7;
    hour2 = 7;
    min = 0;
    min2 = 0;

    hour_text.innerText = (String(hour).padStart(2, '0'));
    arrow_upH.classList.add('bi-caret-up');
    arrow_upH.classList.remove('bi-caret-up-fill');

    hour_text2.innerText = (String(hour2).padStart(2, '0'));
    arrow_upH2.classList.add('bi-caret-up');
    arrow_upH2.classList.remove('bi-caret-up-fill');

    mins_text.innerText = (String(min).padStart(2, '0'));
    arrow_upM.classList.add('bi-caret-up');
    arrow_upM.classList.remove('bi-caret-up-fill');

    mins_text2.innerText = (String(min2).padStart(2, '0'));
    arrow_upM2.classList.add('bi-caret-up');
    arrow_upM2.classList.remove('bi-caret-up-fill');

    setToday();
}

//history
function loadHistoryModal() {
    printActiveBookings();
}

function printActiveBookings() {
    let active_table_body = document.getElementById('active-table-body');
    active_table_body.innerHTML = '';
    //NEWEST
    let exampleActive = [];
    let url = 'http://localhost:8080/api/booking';
    let token = localStorage.getItem('token');
    const headers = new Headers();
    if (token) {
        headers.append(
            'Authorization', `Basic ${token}`
        )
    }
    headers.append(
        'accept', `text\plain`
    )
    fetch(url, {
        method: 'GET',
        headers
    })
        .then((resp) => {
            if (!resp.ok) {
                return resp.text().then(text => { throw new Error(text) })
            }
            return resp.json();
        }).then(resp => {
            exampleActive = resp;
            console.log(exampleActive[0])
            if (exampleActive.length == 0) {
                active_table_body.innerHTML = "<h2 class='d-flex justify-content-center w-100'>There are no active bookings.</h2>";
                return '';
            }
            exampleActive.sort(function (a, b) {
                var dateA = new Date(a.startTime.replace(/(\d{2})\/(\d{2})\/(\d{4}), (\d{2}):(\d{2})/, '$3-$2-$1T$4:$5'));
                var dateB = new Date(b.startTime.replace(/(\d{2})\/(\d{2})\/(\d{4}), (\d{2}):(\d{2})/, '$3-$2-$1T$4:$5'));

                return dateA - dateB;
            });


            for (let i = 0; i < exampleActive.length; i++) {
                let tr = document.createElement('tr');
                let th = document.createElement('th');
                th.scope = 'row';
                th.innerHTML = (i + 1);
                tr.appendChild(th);

                let tdPlace = document.createElement('td'); let place = (exampleActive[i].parkSpaceName); //ne pokazva mestata, a id-tata v tablica
                let tdFrom = document.createElement('td'); let from = (exampleActive[i].startTime).split('T').join(', ');
                let tdTo = document.createElement('td'); let to = (exampleActive[i].endTime).split('T').join(', ');

                tdPlace.innerHTML = place; tr.appendChild(tdPlace);
                tdFrom.innerHTML = from; tr.appendChild(tdFrom);
                tdTo.innerHTML = to; tr.appendChild(tdTo);

                active_table_body.appendChild(tr);
            }
        })
        .catch(error => {
            console.log('ERROR: ' + error);
        });
}
function calculateDuration(tableRow, i) {
    let durationH = Number(tableRow[i].duration.slice(0, 2));
    let durationM = Number(tableRow[i].duration.slice(3, 5));
    durationH += Number(tableRow[i].startTime.slice(12, 14));
    durationM += Number(tableRow[i].startTime.slice(15, 17));
    return String(durationH).padStart(2, '0') + ":" + String(durationM).padStart(2, '0');
}


//allocate parking spots
var image_of_spot = document.getElementById('current-spot-image');
var current_spot = document.getElementById('current-spot');
var section = 'A';
var last_index = 0;
var last_A = 0;
var last_B = 0;
//var availableSpots = ["A1", "A4", "A5", "A6", "A7", "A8", "A9", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "Disabled"];


function changeSector() {
    if (availableSpots.length == 0) {
        return "Empty";
    }
    if (section == 'B') {
        for (let i = 0; i < availableSpots.length; i++) {
            if (availableSpots[i].name.startsWith("A")) {
                last_index = i;
                break;
            }
        }
        section = 'A';
        image_of_spot.src = './parking_images/car1.svg';
        current_spot.innerHTML = availableSpots[last_index].name;
        spaceId = availableSpots[last_index].parkSpaceId;
    }
    else if (section == 'A') {
        for (let i = 0; i < availableSpots.length; i++) {
            if (availableSpots[i].name.startsWith("B")) {
                last_index = i;
                break;
            }
        }
        section = 'B';
        image_of_spot.src = './parking_images/car1.svg';
        current_spot.innerHTML = availableSpots[last_index].name;
        spaceId = availableSpots[last_index].parkSpaceId;
    }
    console.log(section);
}
//tova se tegli ot DBto

function spot(direction) {
    if (section == "A") {
        if (direction == "next") {
            last_index++;
        }
        else if (direction == "prev") {
            if (last_index == 0) {
                return "ERROR";
            }
            last_index--;
        }

        if (availableSpots[last_index].name.startsWith("A") == true) {

            if (availableSpots[last_index].name == "A1") {
                image_of_spot.src = './parking_images/car1.svg';
            }
            else if (Number(availableSpots[last_index].name[1]) % 2 == 1) {
                image_of_spot.src = './parking_images/car3.svg';
            }
            else if (Number(availableSpots[last_index].name[1]) % 2 == 0) {
                image_of_spot.src = './parking_images/car2.svg';
            }
            current_spot.innerHTML = availableSpots[last_index].name;
            spaceId = availableSpots[last_index].parkSpaceId;
        }
        else {
            last_index--;
        }
    }

    else if (section == "B") {
        if (direction == "next") {
            if (last_index == availableSpots.length - 1) {
                return "ERROR";
            }
            last_index++;
        }
        else if (direction == "prev") {
            last_index--;
        }


        if (availableSpots[last_index].name.startsWith("B") == true) {

            if (availableSpots[last_index].name == "B1") {
                image_of_spot.src = './parking_images/car1.svg';
            }
            else if (Number(availableSpots[last_index].name[1]) % 2 == 1) {
                image_of_spot.src = './parking_images/car3.svg';
            }
            else if (Number(availableSpots[last_index].name[1]) % 2 == 0) {
                image_of_spot.src = './parking_images/car2.svg';
            }
            current_spot.innerHTML = availableSpots[last_index].name;
            spaceId = availableSpots[last_index].parkSpaceId;
        }

        else if (availableSpots[last_index].name == "Disabled") {
            image_of_spot.src = './parking_images/invalid.svg';
            current_spot.innerHTML = availableSpots[last_index].name;
            spaceId = availableSpots[last_index].parkSpaceId;
        }

        else {
            last_index--;
            return "ERROR";
        }
    }

    else {
        return "ERROR";
    }
}


function loadMap() {
    var map_body_img = document.getElementById('map-body-img');
    map_body_img.innerHTML = '';
    var map_body_h1 = document.getElementById('map-body-h1');
    map_body_h1.innerHTML = '';

    var mapModalLabel = document.getElementById('mapModalLabel');
    mapModalLabel.innerHTML = '';
    if (section == 'A') {
        for (let i = 0; i < 9; i++) {
            let img = document.createElement('img');
            img.classList.add('col-1', 'rotation', 'p-0', 'm-0');
            let h1 = document.createElement('h1');
            h1.classList.add('col-1', 'p-0', 'm-0', 'text-center');
            if (i == 0) {
                img.src = './parking_images/car1.svg';

            }
            else if (i % 2 == 1) {
                img.src = './parking_images/car2.svg';
            }
            else if (i % 2 == 0) {
                img.src = './parking_images/car3.svg';
            }
            h1.innerText = 'A' + (i + 1);
            map_body_img.appendChild(img);
            map_body_h1.appendChild(h1);
        }
    }
    else if (section = 'B') {
        for (let i = 0; i < 8; i++) {
            let img = document.createElement('img');
            img.classList.add('col-1');
            let h1 = document.createElement('h1');
            h1.classList.add('col-1', 'p-0', 'm-0', 'text-center');
            if (i == 0) {
                img.src = './parking_images/car1.svg';
                h1.innerText = 'B' + (i + 1);
            }
            else if (i == 7) {
                img.src = './parking_images/invalid.svg';
                h1.innerText = 'Disabled';
            }
            else if (i % 2 == 1) {
                img.src = './parking_images/car2.svg';
                h1.innerText = 'B' + (i + 1);
            }
            else if (i % 2 == 0) {
                img.src = './parking_images/car3.svg';
                h1.innerText = 'B' + (i + 1);
            }
            map_body_img.appendChild(img);
            map_body_h1.appendChild(h1);
        }

    }
    else {
        return "ERROR";
    }
    mapModalLabel.innerHTML = section + " section";
}

//logout
function logout() {
    localStorage.removeItem("token");
    document.getElementById('mainContent').classList.add('d-none');
    window.location.href = "./login_animation.html";
}

const allParkingSpots = 17; //doesn't need to be gotten from the DB
//CALCULATING
function loadAvailability() {
    //let availableSpots = ["A1", "A4", "A5", "A6", "A7", "A8", "A9", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "invalid"];//this we get from DB
    let availSpots = Number(availableSpots.length);
    availSpots /= allParkingSpots;
    availSpots *= 100;
    return (availSpots / 100).toFixed(2);
}



