fullgrid = []
picdes = [
    "Sleepwalking the Pluriverse, filmed performance (Guangzhou, 2020)",
    "Sleepwalking the Pluriverse, filmed performance (Guangzhou, 2020)",
    "Sleepwalking the Pluriverse, filmed performance (Guangzhou, 2020)3",
    "Sleepwalking the Pluriverse, filmed performance (Guangzhou, 2020)",
    "Sleepwalking the Pluriverse, filmed performance (Guangzhou, 2020)",
    "Eight People with Eight Smartphones Walking Around a Room, film (Eindhoven, 2020)",
    "From Here to There, performance (Eindhoven, 2018)",
    "Mobscan, happening (Eindhoven, 2018 - 2019)",
    "Mobscan, happening (Eindhoven, 2018 - 2019)",
    "Mobscan, happening (Eindhoven, 2018 - 2019)",
    "We’ve Got the Whole World in Our Hands, installation (Horst, 2018)",
    "We’ve Got the Whole World in Our Hands, photo collection (Ongoing)",
    "Boring Events Inbetween, digtial photograph (Eindhoven, 2019)",
    "Boring Events Inbetween, digtial photograph (Eindhoven, 2019)",
    "Boring Events Inbetween, digtial photograph (Eindhoven, 2019)",
    "Boring Events Inbetween, installation (Eindhoven, 2019)",
    "Table Stories, film (2019)",
    "Design for the Time Being, collection of writing (Online, ongoing)",
    "The Vertical Theatre of Doormats, film and public intervention (Eindhoven, 2020)",
    "Caged Swing and a Saw, public intervention (Eindhoven, 2020)",
    "Street Pattern at Romolo, performance and public intervention (Milan, 2017)",
    "Evident of Gathering, photograph (Vancouver, 2016)",
    "British National Oversea Passport, drawing (Porto, 2019)",
    "Bed between Beds, instillation (Hong Kong, 1999)"
]


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

column_num = 14
row_num = 9
areanumber = row_num * column_num


function preload() {

    loadImage('images/19.jpg')
    loadImage('images/20.jpg')
    loadImage('images/21.jpg')
    loadImage('images/23.jpg')


}



function setup() {

    ww = windowWidth
    wh = windowHeight

    canvas = createCanvas(ww, wh)
    canvas.parent("drawingcanvas")
    background(237, 247, 248);



    // posxbio = width / (column_num * 2), posybio = height / (row_num * 2);
    // bio = document.getElementById("bio").style.left = posxbio + "px"
    // bio = document.getElementById("bio").style.top = posybio + "px"
    // img = document.getElementById("saveimg").style.top = posybio + "px"
    // img = document.getElementById("saveimg").style.right = width / column_num + "px"


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


    let w = width / column_num
    let h = height / row_num

    stroke(0), strokeCap(ROUND), strokeJoin(ROUND), strokeWeight(3)
    line(mouseX, mouseY, pmouseX, pmouseY)


    for (let i = 0; i < hovergrid.length; i++) {
        noStroke(), fill(255, 244, 56)
            //rect(hovergrid[i].x, hovergrid[i].y, w, h)
        if (hovergrid[i].hover(mouseX, mouseY)) {
            console.log("hover on " + i)

            hovergrid[i].display(i)
        }


    }

}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

class area {

    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.posx = width - (x + w)
        this.posy = height / row_num

    }

    hover(mx, my) {
        if (mx > this.x && mx < this.x + this.w && my > this.y && my < this.y + this.h) {
            return true
        }
    }

    display(number) {

        this.img = document.getElementById("displayedimage")
        this.img.style.display = "block"
        this.img.src = "images/" + number + ".jpg"
        this.img.style.right = this.posx + "px"
        this.img.style.bottom = this.posy + "px"
            //this.img.alt = picdes[number]


        this.description = document.getElementById("description")
        this.description.style.display = "inline"
        this.description.innerHTML = picdes[number]
            // this.description.style.right = width / column_num + "px"
            // this.description.style.top = height - (height / row_num) + "px"

    }





}