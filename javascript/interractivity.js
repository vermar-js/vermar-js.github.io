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

column_num = 16
row_num = 10
areanumber = row_num * column_num

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
            // text(i, x, y)

        x = x + w
        if (x + w > width) {

            y = y + h;
            x = 0
        }

    }
    hovergrid = [fullgrid[19], fullgrid[21], fullgrid[23], fullgrid[25], fullgrid[27], fullgrid[29], fullgrid[51], fullgrid[53], fullgrid[55], fullgrid[57], fullgrid[59], fullgrid[61], fullgrid[83], fullgrid[85], fullgrid[87], fullgrid[89], fullgrid[91], fullgrid[93], fullgrid[115], fullgrid[117], fullgrid[119], fullgrid[121], fullgrid[123], fullgrid[125]]
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
            if (i === 11) { spe_display() }
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
        this.img.src = "images/" + number + ".png"
        if (number === 11) {
            this.img.style.display = "none"
            this.spe_img = document.getElementById("img11")
            this.spe_img.style.display = "block"
        }
        this.img.style.top = this.y + "px"
        var currWidth = this.img.clientWidth;
        this.img.style.left = (this.x - (currWidth / 2)) + "px"
        this.img.style.maxHeight = "27%"
        var des = picdes[number].split("_");
        this.description = document.getElementById("description")
        this.description.style.display = "inline"
        this.description.innerHTML = "<span style='font-family:sneakitalic'>" + des[0] + "</span>" + des[1];

    }
}


function spe_display() {

    //spe_img = document.getElementById("img11")
    // spe_img.style.display = "block"
}



function hiding() {
    console.log("hiding")
    document.getElementById("displayedimage").style.display = "none"
    document.getElementById("description").style.display = "none"
    document.getElementById("img11").style.display = "none"

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