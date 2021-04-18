/**
 * mdn-web-starter
 * basic javascript
*/


/**
 * 添加一个图像切换器
*/
let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src')

    // Error: is / not \
    if (mySrc === 'images/dog1.jfif') {
        myImage.setAttribute('src', 'images/dog2.jfif');
    } else {
        myImage.setAttribute('src', 'images/dog1.jfif')
    }
}

/**
 * 添加个性化信息
*/
let myHeading = document.querySelector("h1")

function setUserName() {
    let myName = prompt('Please enter your name: ')
    if (!myName || myName === null) {
        setUserName()
    } else {
        localStorage.setItem('name', myName)
        myHeading.textContent = "Mozilla is awesome，" + myName
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name')
    myHeading.textContent = "Mozilla is awesome，" + storedName
}

let myButton = document.querySelector("button")
myButton.onclick = function () {
    setUserName();
}