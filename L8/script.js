var a = new Set();

var ch = 0;

while (ch!=4){
    ch = Number(prompt("1.Add\n2.Remove\n3.Display\n4.Exit"))
    switch (ch) {
        case 1 : if(a.has(item)) alert("Duplicate Entry")
                 var item = prompt("Enter name : ")
                 a.add(item)
                 break
        case 2 : var item = prompt("Remove : ")
                 if(a.has(item)){
                    a.delete(item)
                 }
                 else{
                    alert("Banda does not exist")
                    console.log(item + " does not exist")
                }
                 break
        case 3 : console.log(a)
                 break
        case 4 : console.log("Bye-Bye-Bye")
                 break
    }
}