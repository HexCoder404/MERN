var s = prompt("Enter your string")
var arr = s.trim().split(" ")
var m = new Map();
console.log(arr)
for (let a of arr) {
    if (m.has(a)) {
        let curr = m.get(a)
        curr++
        m.set(a,curr)
    }
    else m.set(a,1)
}
console.log(m)