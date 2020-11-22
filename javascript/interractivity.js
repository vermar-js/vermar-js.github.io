fullgrid = []
picdes = [
    "Sleepwalking the Pluriverse,_ filmed performance (Guangzhou, 2020)",
    "Sleepwalking the Pluriverse,_ filmed performance (Guangzhou, 2020)",
    "Sleepwalking the Pluriverse,_ filmed performance (Guangzhou, 2020)3",
    "Sleepwalking the Pluriverse,_ filmed performance (Guangzhou, 2020)",
    "Sleepwalking the Pluriverse,_ filmed performance (Guangzhou, 2020)",
    "Eight People with Eight Smartphones Walking Around a Room,_ film (Eindhoven, 2020)",
    "From Here to There,- performance (Eindhoven, 2018)",
    "Mobscan,_ happening (Eindhoven, 2018 - 2019)",
    "Mobscan,_ happening (Eindhoven, 2018 - 2019)",
    "Mobscan,_ happening (Eindhoven, 2018 - 2019)",
    "We’ve Got the Whole World in Our Hands,_ installation (Horst, 2018)",
    "We’ve Got the Whole World in Our Hands,_ photo collection (Ongoing)",
    "Boring Events Inbetween,_ digtial photograph (Eindhoven, 2019)",
    "Boring Events Inbetween,_ digtial photograph (Eindhoven, 2019)",
    "Boring Events Inbetween,_ digtial photograph (Eindhoven, 2019)",
    "Boring Events Inbetween,_ installation (Eindhoven, 2019)",
    "Table Stories,_ film (2019)",
    "Design for the Time Being,_ collection of writing (Online, ongoing)",
    "The Vertical Theatre of Doormats,_ film and public intervention (Eindhoven, 2020)",
    "Caged Swing and a Saw,_ public intervention (Eindhoven, 2020)",
    "Street Pattern at Romolo,_ performance and public intervention (Milan, 2017)",
    "Evident of Gathering,_ photograph (Vancouver, 2016)",
    "British National Oversea Passport,_ drawing (Porto, 2019)",
    "Bed between Beds,_ instillation (Hong Kong, 1999)"
]

column_num = 14
row_num = 9
areanumber = row_num * column_num


// function preload() {
//     loadImage('images/19.jpg')
//     loadImage('images/20.jpg')
//     loadImage('images/21.jpg')
//     loadImage('images/23.jpg')
// }



function setup() {

    canvas = createCanvas(windowWidth, windowHeight)
    canvas.parent("drawingcanvas")
    background(237, 247, 248);

    let x = 0
    let y = 0
    let w = width / column_num
    let h = height / row_num
    for (let i = 0; i < areanumber; i++) {

        var ar = new area(x, y, w, h)

        fullgrid.push(ar)

        x = x + w
        if (x + w > width) {

            y = y + h;
            x = 0
        }

    }
    hovergrid = [fullgrid[16], fullgrid[18], fullgrid[20], fullgrid[22], fullgrid[24], fullgrid[26], fullgrid[44], fullgrid[46], fullgrid[48], fullgrid[50], fullgrid[52], fullgrid[54], fullgrid[72], fullgrid[74], fullgrid[76], fullgrid[78], fullgrid[80], fullgrid[82], fullgrid[100], fullgrid[102], fullgrid[104], fullgrid[106], fullgrid[108], fullgrid[110]]
}





function draw() {

    stroke(0), strokeCap(ROUND), strokeJoin(ROUND), strokeWeight(3)
    line(mouseX, mouseY, pmouseX, pmouseY)


    const isValid = hovergrid.every(item => item.hover(mouseX, mouseY) === false)
    console.log({ isValid })
    if (isValid) {
        console.log("no hover now")
        hiding()
    }

    for (let i = 0; i < hovergrid.length; i++) {
        noStroke(), fill(255, 244, 56)
            //rect(hovergrid[i].x, hovergrid[i].y, hovergrid[i].w, hovergrid[i].h)

        if (hovergrid[i].hover(mouseX, mouseY) === true) {
            console.log("hover on " + i)
            hovergrid[i].display(i)
        }
    }



}

class area {

    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h


    }

    hover(mx, my) {
        if (mx > this.x && mx < this.x + this.w && my > this.y && my < this.y + this.h) {
            return true
        } else { return false }
    }

    display(number) {

        this.img = document.getElementById("displayedimage")
        this.img.style.display = "block"
        this.img.src = "images/" + number + ".jpg"
        this.img.style.top = this.y + "px"
        this.img.style.left = this.x + "px"
            // console.log("x", this.x, "y", this.y)

        var des = picdes[number].split("_");
        //    var dataArr = txt.split(",");

        //    var paragraph = document.getElementById("pid");
        //    paragraph.innerHTML = dataArr[0]+ " <span>"+dataArr[1]+"</span>";


        this.description = document.getElementById("description")
        this.description.style.display = "inline"

        this.description.innerHTML = "<span style='font-family:sneakitalic'>" + des[0] + "</span>" + des[1];

    }
}



function hiding(number) {
    console.log("hiding")
    img = document.getElementById("displayedimage")
    img.style.display = "none"
    description = document.getElementById("description")
    description.style.display = "none"

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function revealbio() {
    textbio = document.getElementById("textbio")
    if (textbio.style.display === "none") {
        textbio.style.display = "inline";
    } else {
        textbio.style.display = "none";
    }
}

function saveimg() {
    saveCanvas('drawingcanvas', 'png')
}