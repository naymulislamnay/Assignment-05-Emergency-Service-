
// function for loved contact count

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
let rewardPoints = Number(document.getElementById('reward-points').innerText);

for (let callBtn of callBtns) {
    callBtn.addEventListener('click', function () {

        // function for reward points

        if (rewardPoints >= 20) {
            rewardPoints -= 20;
            document.getElementById('reward-points').innerText = rewardPoints;
        }

        else if (rewardPoints < 20) {
            alert("You don't have enough coins. Minimum 20 coins needed to start a call.");
            return;
        }

        // function for calling alert

        const serviceMainName = callBtn.parentNode.parentNode.childNodes[3].innerText;
        const serviceName = callBtn.parentNode.parentNode.childNodes[5].innerText;
        const serviceNumber = callBtn.parentNode.parentNode.childNodes[7].innerText;
        const localTime = new Date().toLocaleTimeString();
        alert(`📞 Calling ${serviceName} ${serviceNumber}...`);

        // function for history

        const newHistory = document.createElement('div');
        newHistory.innerHTML = (
            `<div class="mt-0.5 md:mt-2 flex flex-col md:flex-row justify-between md:items-center p-0.5 md:p-2.5 bg-[#FAFAFA] rounded-[8px] text-left">
                <div>
                    <h2 class="font-bold text-[10px] md:text-[16px] inter-regular">
                        ${serviceMainName}
                    </h2>
                    <p class="text-[#5C5C5C] text-[10px] md:text-[16px] madurai-regular">${serviceNumber}</p>
                </div>
                <p class="text-[8px] md:text-[16px] madurai-regular">
                    ${localTime}
                </p>
            </div>`
        )
        historyContainer.appendChild(newHistory);
    })
}


// function for clear button

document.getElementById('clear-btn').addEventListener('click', function () {
    historyContainer.innerHTML = '';
})


// function for copy button

const copyBtns = document.getElementsByClassName('copy-btn');
let copyCount = Number(document.getElementById('copy-count').innerText);

for (let copyBtn of copyBtns) {
    copyBtn.addEventListener('click', async function () {
        copyCount += 1;
        document.getElementById('copy-count').innerText = copyCount;

        const copyNumber = copyBtn.parentNode.parentNode.childNodes[7].innerText;

        try {
            await navigator.clipboard.writeText(copyNumber);
            alert(`The number has been copied: ${copyNumber}`);
        }
        catch (err) {
            console.error("Failed to copy: ", err);
        }
    });
}
