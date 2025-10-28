function flickSwitch(arr){
    let result = [];
    let currentBool = true;
    for(let i = 0; i<=arr.length-1;i++) {
        if(arr[i] === "flick") {
            currentBool = !currentBool;
        }
        result.push(currentBool)
    }
    return result;
}

console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']));

