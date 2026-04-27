window.onload = function() {

    let graduates = 100;
    let enrolled = 120;

    let passRate = (graduates / enrolled) * 100;
    document.getElementById("passRate").innerHTML = passRate.toFixed(1);

    let closingDate = new Date("May 30, 2026 23:59:59").getTime();

    let timer = setInterval(function() {
        let now = new Date().getTime();
        let distance = closingDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById("countdown").innerHTML =
            days + "d " + hours + "h " + minutes + "m ";

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("countdown").innerHTML = "APPLICATIONS CLOSED";
        }

    }, 1000);

}