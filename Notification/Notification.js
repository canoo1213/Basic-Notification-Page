var notifications = ["Bildirim1","Bildirim2","Bildirim3", "Bildirim4","Bildirim5"];
var User=["Cevat Can Genç","Mehmet Arda Çelik","Ahmet Sürer","Gizem Turker","Ata Mesut Kılınç","Can"]


var notificationContainer = document.getElementById("notifications");

for (var i = 0; i < notifications.length; i++) {
    var notificationElement = document.createElement("div");
    notificationElement.className = "notification"; 

    notificationElement.textContent = User[i] +" Tarafından "+ notifications[i]; 
    notificationContainer.appendChild(notificationElement); 
}