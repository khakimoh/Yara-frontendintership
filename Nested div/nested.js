var lastIndex = 2;
class nested {
    constructor(parent, curent) {
        this.parent = parent;
        this.curent = curent;
    }

    Add() {
        var div = document.createElement("Div");
        div.setAttribute("class", "box");
        div.setAttribute("id", this.curent);
        div.innerHTML = `<div class="row-attribute">
      <div>parent id: ${this.parent}</div>
      <div>curent id: ${this.curent}</div>
      <button class="btn" onclick="addElement(${this.curent})">+</button>
      <button class="btn red" onclick="removeElement(${this.curent})">-</button>
    </div>`;
        document.getElementById(this.parent).appendChild(div);
        lastIndex++;
    }
}

addElement = (parent) => {
    let node = new nested(parent, lastIndex);
    node.Add();
};

removeElement = (curent) => {
    document.getElementById(curent).remove();
};