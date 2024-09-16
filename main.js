let str = prompt("Enter text");
let arr = prompt("Enter the letters you want to delete");

function eraseFormStr(str, arrToDel) {
    if (!str.trim() || !arrToDel?.length) {
        return "You haven't entered something.";
    }

    let strArray = str.trim().split('');
    strArray = strArray.filter(function (letter) {
        return !arrToDel.includes(letter);
    });

    return strArray.join('');
}

console.log(eraseFormStr(str, arr));