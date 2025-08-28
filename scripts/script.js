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
const historyContainer = document.getElementById('history-container');

for (let callBtn of callBtns) {
    callBtn.addEventListener('click', function () {
        const serviceMainName = callBtn.parentNode.parentNode.childNodes[3].innerText;
        const serviceName = callBtn.parentNode.parentNode.childNodes[5].innerText;
        const serviceNumber = callBtn.parentNode.parentNode.childNodes[7].innerText;
        const now = new Date();
        const localTime = now.toLocaleTimeString();
        alert(`📞 Calling ${serviceName} ${serviceNumber}...`)

        // function for history
        const newHistory = document.createElement('div');
        newHistory.innerHTML = (
            `<div class="mt-2 flex justify-between items-center p-2.5 bg-[#FAFAFA] rounded-[8px]">
                <div>
                    <h2 class="font-bold">
                        ${serviceMainName}
                    </h2>
                    <p class="text-[#5C5C5C]">${serviceNumber}</p>
                </div>
                <p>
                    ${localTime}
                </p>
            </div>`
        )
        historyContainer.appendChild(newHistory)
    })
}


// function for clear button

document.getElementById('clear-btn').addEventListener('click', function () {
    historyContainer.innerHTML = '';
})


