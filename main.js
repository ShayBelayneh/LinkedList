class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    let newNode = new Node(value);
    if (!this.head) { //? this.head == null
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  addToEnd(value) {
    let newNode = new Node(value);
    if (!this.head) { //? this.head == null
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
}

const list = new LinkedList();
list.addToHead(1);
list.addToHead(3);
list.addToHead(4);
list.addToEnd(50);
console.log(list);




// images sliders 

const images = new LinkedList();
images.addToHead("https://cdn.pixabay.com/photo/2021/08/23/21/12/duckling-6568845_960_720.jpg");
images.addToHead("https://cdn.pixabay.com/photo/2021/08/26/17/34/yellow-cups-6576738_960_720.jpg");
images.addToHead("https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_960_720.jpg");
images.addToEnd("https://cdn.pixabay.com/photo/2020/07/30/10/26/asian-woman-5450041_960_720.jpg");
console.log(images);

const button = document.getElementById("button")
const div = document.getElementById("div")


button.onclick = () => {

  let now;
  // now = images.head
  div.innerHTML = `<img src = "${images.head.data}">`
  images.head = images.head.next


}
