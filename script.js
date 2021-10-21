function displayBtn(val) {
    document.getElementById("screen").value+=val
}
function clearDisplay() {
    document.getElementById('screen').value=""
}
function equalAnswer() {
    let text = document.getElementById('screen').value
    let result = eval(text)
    document.getElementById('screen').value=result
}