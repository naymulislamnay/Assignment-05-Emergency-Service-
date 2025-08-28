let lovedContactCount = Number(document.getElementById('loved-contact-count').innerText);
const loveIcons = document.getElementsByClassName('love-icon');

for (let loveIcon of loveIcons) {
    loveIcon.addEventListener('click', function () {
        lovedContactCount += 1;
        document.getElementById('loved-contact-count').innerText = lovedContactCount;
    })
}

// function for call button

const callBtns = document.getElementsByClassName('call-btn');

for (let callBtn of callBtns) {
    callBtn.addEventListener('click', function () {
        const serviceName = callBtn.parentNode.parentNode.childNodes[5].innerText;
        const serviceNumber = callBtn.parentNode.parentNode.childNodes[7].innerText;
        alert(`📞 Calling ${serviceName} ${serviceNumber}...`)
    })
}
