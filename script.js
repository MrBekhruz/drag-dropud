let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("rihgt");
let leftBox = document.getElementById("left");

for(list of lists){
    list.addEvenListener("dragstart", function(e){
        let selected = e.target;

        rightBox.addEventListener("dragstart",function(e){
            e.preventDefault();
        });
        rightBox.addEventListener("drop", function(e){
            rightBox.appendChild(selected);
            selected = null;
        });
        
        leftBox.addEventListener("dragstart",function(e){
            e.preventDefault();
        });
        leftBox.addEventListener("drop", function(e){
            rightBox.appendChild(selected);
            selected = null;
    });
    })
}