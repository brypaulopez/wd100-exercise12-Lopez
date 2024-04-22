function getCM() {
    var num = document.querySelector("#initialValue").value;

    var result = num / 10;
    console.log(result);

    document.querySelector("#outputAnswer").value = result;
}

function getM() {
    var num = document.querySelector("#initialValue").value;

    var result = num / 1000;
    console.log(result);

    document.querySelector("#outputAnswer").value = result;
}
function getKM() {
    var num = document.querySelector("#initialValue").value;

    var result = num / 1000000;
    console.log(result);

    document.querySelector("#outputAnswer").value = result;
}