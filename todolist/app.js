class Task {
    constructor(name) {
        this.name = name;
        this.status = 'open';
    }

    render(index) {

        let p;
        let label;
        let li;

        li = document.createElement("li");

        p = document.createElement("input");
        p.setAttribute("type", "checkbox");
        p.setAttribute("name", "task" + index);
        p.setAttribute("id", "task" + index);

        label = document.createElement("label");
        label.setAttribute("for", "task" + index);
        label.innerText = this.name;

        if (this.status == 'completed') {
            label.classList.add('completed');
            p.checked = true;
        }

        li.appendChild(p);
        li.appendChild(label);

        return li;
    }

    markAsCompleted() {
        //const index = this.list.indexOf(task);

        this.status = (this.status == 'open') ? 'completed' : 'open';

        /*if (index !== -1) {
            this.list[index] = task;
        }*/
    }
}

class TodoList {
    constructor(container) {
        this.tasks = [new Task(
                'Task 1'
            ),
            new Task(
                'Task 2'
            ),
            new Task(
                'Task 3'
            )
        ];

        this.container = document.getElementById(container);
        this.draw();
    }

    get list() {
        return this.tasks;
    }

    addTask(name) {
        this.tasks.push(new Task(
            name
        ));

        this.container.innerHTML = '';
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
            //p = document.createElement("p");

            let li = task.render(index);
            ul.appendChild(li);
            li.addEventListener("click", (event) => {
                //this.removeTask(task);
                task.markAsCompleted();
                this.redraw();
            });

        });

        this.container.appendChild(ul);
    }

    drawActives() {
        let ul = document.createElement("ul");

        this.list.forEach((task, index) => {
            if (task.status == 'open') {


                let li = task.render(index);

                ul.appendChild(li);
                li.addEventListener("click", (event) => {
                    //this.removeTask(task);
                    task.markAsCompleted();
                    this.redraw();
                });
            }
        });

        this.container.appendChild(ul);
    }

    drawCompleted() {
        let ul = document.createElement("ul");

        this.list.forEach((task, index) => {
            if (task.status == 'completed') {
                let li = task.render(index);

                ul.appendChild(li);
                li.addEventListener("click", (event) => {
                    //this.removeTask(task);
                    task.markAsCompleted();
                    this.redraw();
                });
            }
        });

        this.container.appendChild(ul);
    }

    redraw() {
        this.container.innerHTML = '';
        this.draw();
    }

    filterFull() {
        this.redraw();
    }

    filterActives() {
        this.container.innerHTML = '';
        this.drawActives();
    }

    filterCompleted() {
        this.container.innerHTML = '';
        this.drawCompleted();
    }

    removeAllTask() {
        this.tasks = [];
        this.redraw();
    }
}