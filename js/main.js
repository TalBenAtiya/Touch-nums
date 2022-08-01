'use strict'

var gCounter = 0
var gCellCounter = 1
var gIsGameOn = false
var miliSec = 0
var sec = 0
var min = 0
var gNums = createNums(16)

var startWatch = setInterval(startTimer, 47)
var elModal = document.querySelector('.number')
var elTimer = document.querySelector('.timer')
var elModal2 = document.querySelector('.modal span')
var elStopWatch = document.querySelector('.timer')


function init() {

    gCounter = 0
    gCellCounter = 1
    gIsGameOn = false
    miliSec = 0
    sec = 0
    min = 0
    elModal.innerText = `${gCellCounter}`
    elTimer.innerText = '00:00:000'
    renderNums()

}

function changeLevel(elBtn) {
    var currLevel = parseInt(elBtn.innerText)
    gNums = createNums(currLevel)
    init()

}

function numClick(elNum) {
    var numClicked = parseInt(elNum.innerText)
    if (numClicked === 1 && gIsGameOn === false) gIsGameOn = true

    if (numClicked === gCellCounter) {
        elNum.style.backgroundColor = 'red'
        elModal.innerText = `${gCellCounter + 1}`
        gCellCounter++
        if (numClicked === gNums.length) {
            elModal2.innerText = `Nice Work!`
            gIsGameOn = false
            clearInterval(startWatch)

        }
    }
}

function renderNums() {
    var elTable = document.querySelector('table')
    var strHTML = ``
    for (var i = 0; i < gNums.length ** 0.5; i++) {
        strHTML += `<tr>`
        for (var j = 0; j < gNums.length ** 0.5; j++) {
            console.log(gNums[gCounter]);
            strHTML += `<td data-i="${i}" data-j="${j}" onclick="numClick(this, ${i}, ${j})" >${gNums[gCounter]}</td>`
            gCounter++
        }
        strHTML += `<tr/>`
    }
    elTable.innerHTML = strHTML

}

function createNums(num) {
    var nums = []
    var currNum = 0
    for (var i = 0; i < num; i++) {
        currNum++
        nums.push(currNum)
    }
    var shuffledArray = nums.sort((a, b) => 0.5 - Math.random());
    return shuffledArray
}

function startTimer() {
    if (gIsGameOn) {
        miliSec = parseInt(miliSec)
        sec = parseInt(sec)
        min = parseInt(min)

        miliSec += 48

        if (miliSec >= 1000) {
            sec++
            miliSec = 0
        }

        if (sec == 60) {
            min++
            sec = 0
            miliSec = 0
        }

        if (miliSec < 10) {
            miliSec = '0' + miliSec
        }

        if (sec < 10) {
            sec = '0' + sec
        }

        if (min < 10) {
            min = '0' + min
        }
        elStopWatch.innerText = min + ' : ' + sec + ' : ' + miliSec
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


