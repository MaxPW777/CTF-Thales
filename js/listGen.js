export function generateWindowList(numberOfImages) {
    const windowList = [];
    for (let i = 0; i < numberOfImages; i++) {
        windowList.push({name: `Window ${i + 1 }`, image: `window${i+1}.jpg`, price: randomPrice()});
    }
    return windowList;
}
function randomPrice() {
    return String(Math.floor(Math.random() * 1000)) + ' $';
}