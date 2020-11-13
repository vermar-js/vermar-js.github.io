grid = []
picdes = ["description of project 1", "description of project 2", "description of project 3", "description of project 4"]




function setup() {
    ww = windowWidth
    wh = windowHeight
    areanumber = 4
    canvas = createCanvas(ww, wh)
    canvas.parent("drawingcanvas")
    background(200, 223, 224)


    let x = 0
    let y = 0
    let w = width / (areanumber / 2)
    let h = height / (areanumber / 2)
    for (let i = 0; i < areanumber; i++) {

        var ar = new area(x, y, w, h)
        grid.push(ar)

        x = x + w
        if (x + w > width) {

            y = 0 + h;
            x = 0
        }

    }
}


function draw() {

    stroke(255), stroke(ROUND), strokeJoin(ROUND), strokeWeight(25)
    line(mouseX, mouseY, pmouseX, pmouseY)

    for (let i = 0; i < grid.length; i++) {
        if (grid[i].hover(mouseX, mouseY)) {
            console.log("hover on " + i)

            grid[i].display(i)
        }


    }

}


class area {

    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.posx = x + 40
        this.posy = y + 40

    }

    hover(mx, my) {
        if (mx > this.x && mx < this.x + this.w && my > this.y && my < this.y + this.h) {
            return true
        }
    }

    display(number) {

        this.img = document.getElementById("displayedimage")
        this.img.style.display = "block"
        this.img.style.left = this.posx + "px"
        this.img.style.top = this.posy + "px"
        this.img.src = "images/" + number + ".png"
        this.img.alt = picdes[number]


        this.description = document.getElementById("description")
        this.description.style.display = "block"
        this.description.innerHTML = picdes[number]
        this.description.style.left = this.posx + "px"

    }




}