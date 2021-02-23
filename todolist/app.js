class Task {
  constructor(name) {
    this.name = name;
    this.status = "open";
  }

  render(index) {

    let li = document.createElement("li");
    let div = document.createElement("div");
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "task" + index);
    checkbox.setAttribute("id", "task" + index);

    let label = document.createElement("label");
    label.setAttribute("for", "task" + index);
    label.innerText = this.name;

    let clear = document.createElement("button");
    clear.innerText = 'x';

    if (this.status == "completed") {
      label.classList.add("completed");
      checkbox.checked = true;
    }

    div.appendChild(checkbox);
    div.appendChild(label);
    li.appendChild(div);
    li.appendChild(clear);

    return li;
  }

  markAsCompleted() {
    //const index = this.list.indexOf(task);

    this.status = this.status == "open" ? "completed" : "open";

    /*if (index !== -1) {
            this.list[index] = task;
        }*/
  }
}

class TodoList {
  constructor(config) {
    this.tasks = [new Task("Task 1"), new Task("Task 2"), new Task("Task 3")];

    this.filter = "all";

    this.container = document.getElementById(config.el);
    this.draw();
  }

  get list() {
    return this.tasks;
  }

  addTask(name) {
    this.tasks.push(new Task(name));

    this.container.innerHTML = "";
    this.draw();
  }

  removeTask(task) {
    const index = this.list.indexOf(task);
    if (index > -1) {
      this.list.splice(index, 1);
    }
  }

  draw() {
    let ul = document.createElement("ul");

    this.list.forEach((task, index) => {
      this.renderItemList(task, index, ul);
    });

    this.container.appendChild(ul);

    this.renderTotal(this.list);

  }

  drawActives() {
    let ul = document.createElement("ul");

    const listActives = this.list.filter((task) => task.status == "open");

    listActives.forEach((task, index) => {
      this.renderItemList(task, index, ul);
    });

    this.container.appendChild(ul);

    this.renderTotal(listActives);
  }

  drawCompleted() {
    let ul = document.createElement("ul");

    const listCompleted = this.list.filter(
      (task) => task.status == "completed"
    );

    listCompleted.forEach((task, index) => {
      this.renderItemList(task, index, ul);
    });

    this.container.appendChild(ul);

    this.renderTotal(listCompleted);    
  }

  renderTotal(list){
    let containertotal = document.createElement("div");
    containertotal.innerHTML = `<spam>Items: ${list.length}</span>`
    this.container.appendChild(containertotal);
  }

  renderItemList(task, index, ul) {
    let li = task.render(index);

    ul.appendChild(li);
    li.addEventListener("click", (event) => {
      //this.removeTask(task);

      if(event.target.tagName == 'BUTTON'){
        this.removeTask(task);
        this.redraw();
      } else {
        task.markAsCompleted();
        this.redraw();
      }
      
    });
  }

  redraw() {
    this.container.innerHTML = "";
    this.draw();
  }

  filterFull() {
    this.redraw();
  }

  filterActives() {
    this.container.innerHTML = "";
    this.drawActives();
  }

  filterCompleted() {
    this.container.innerHTML = "";
    this.drawCompleted();
  }

  removeAllTask() {
    this.tasks = [];
    this.redraw();
  }
}
