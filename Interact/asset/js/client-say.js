let clientSayArray = [
  {
    avtar: "./asset/clientSay/01.jpg",
    Text: "Magna occaecat ad duis veniam eiusmod duis excepteur ut magna laborum animexercitation. Sunt anim adipisicing in magna aliqua proident adipisicing enim dolore incididunt eiusmodnisi amet.",
    qoute: "John Doe",
  },
  {
    avtar: "./asset/clientSay/02.jpg",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis.",
    qoute: "John Doe",
  },
  {
    avtar: "./asset/clientSay/03.jpg",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    qoute: "John Doe",
  },
  {
    avtar: "./asset/clientSay/04.jpg",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    qoute: "John Doe",
  },
  {
    avtar: "./asset/clientSay/05.jpg",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    qoute: "John Doe",
  },
  {
    avtar: "./asset/clientSay/06.jpg",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    qoute: "John Doe",
  },
];
clientSayArray.forEach((element) => {
  var div = document.createElement("Div");
  div.setAttribute("class", "grid col-g-3-9");
  div.innerHTML = `<img src="${element.avtar}" class="img-fluid client-say">
    <div>
      <p class="client-Say"> ${element.Text}</p>
      <h5> - ${element.qoute} </h5>
    </div>`;
  document.getElementById("clientSay").appendChild(div);
});
