function calculateLove() {
    var yourName = document.getElementById("yourName").value.trim().toLowerCase();
    var partnerName = document.getElementById("partnerName").value.trim().toLowerCase();

    if (yourName === "" || partnerName === "") {
        alert("Please enter both names.");
        return;
    }

    var loveScore = Math.floor(Math.random() * 101); // Random number between 0 and 100

    var resultText = "The love percentage between " + yourName + " and " + partnerName + " is " + loveScore + "%.";

    document.getElementById("result").innerText = resultText;
}
