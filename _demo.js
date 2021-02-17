function Add(x, y, cb) {
    cb(x + y)
}

Add(5, 3, function (sum) {
    console.log(sum)
})

Add(1, 2, console.log)
Add(1, 4, print)

function print(val){
    console.log(val)
}

document.getElementById("something").addEventListener("click", handleClick)

function handleClick(e){

}