function showPopup(popupId) {
    console.log(popupId);
    document.getElementById(popupId).style.display = "flex";
}

function hidePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}