//Alert
const alertBanner = document.getElementById("alert");

    let bellAlert = document.getElementById('belldot');
    
    alertBanner.innerHTML = 

        "<p class='alertmessage'> Alert: you have unread messages</p>" +
        "<p class='alert-banner-close'>x</p>";

    alertBanner.addEventListener ('click', e => {
        const element = e.target;
        if (element.classList.contains ("alert-banner-close")) {
            alertBanner.style.display = "none"
            bellAlert.style.display = "none"
        }
        
    });



//Traffic Chart
const trafficCanvas = document.getElementById("traffic-chart");

const trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        label: 'User Rate',
        data: [500, 700, 1240, 1900, 1234, 2500, 1001, 555, 888, 2100, 1999],
        backgroundColor: 'rgba(111, 100, 201, .4)',
        borderwidth: 2,
        tension: 0.4
    }]

};

const trafficOptions = {
    fill: true,
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
}

let trafficChart = new Chart(trafficCanvas,{
    type: 'line',
    data: trafficData,
    options: trafficOptions

});


//daily
const dailyCanvas = document.getElementById("daily-chart");

const dailyData = {
    labels: ["S", "M", "T", "W", "Th", "F", "S"],
    datasets: [{
        label: 'User Rate',
        data: [29, 42, 56, 67, 22, 78, 33],
        backgroundColor: 'rgba(111, 100, 201, 1)',
        borderwidth: 2

    }]

};

const dailyOptions = {
    aspectRatio: 2,
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

//mobile
const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phone"],
    datasets: [{
        label: 'User Rate',
        data: [44, 16, 16],
        backgroundColor: [
            'rgb(91, 28, 164)',
            'rgb(15, 193, 33)',
            'rgb(255, 147, 24)'
        ],
        borderwidth: 2
    }]

};

const mobileOptions = {
    aspectRatio: 2,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 30,
                font: {
                    size: 15,
                    style: 'normal'
                
                }
            }
        }
    }
};

let mobileChart = new Chart(mobileCanvas,{
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

//messaging

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener ('click', () => {

    if (user.value === "" && message.value === "") {
        alert ("Please fill out user and message fields before sending");
    } else if (user.value === "") {
        alert ("Please fill out user field before sending");
    } else if ( message.value === "") {
        alert ("Please fill out message field before sending");
    } else {
        alert ('Message successuflly sent to: ${user.value}');
    }

});






