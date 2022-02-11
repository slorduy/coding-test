import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/core/interfaces/task';
import { TaskServiceService } from 'src/app/core/services/task-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private taskService: TaskServiceService) {}
  newTask: any;
  tasksList: any;
  loaded:boolean = false;
  taskInfo = {
    id: 0,
    title:'',
    completed:false
  }
  checkedTasks: any[] = [];

  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      next: (res: any) => {
        this.tasksList = res;
         this.loaded = true
      },
      error: () => {
        alert('Error al consultar las tareas');
      }
    });
  }

  addChecked = (ev: any) => {
    if (ev.target.checked) {
      this.checkedTasks.unshift(parseInt(ev.target.value));
        

    } else {
      this.checkedTasks.map((checkedTask,index)=>{
        if (checkedTask === parseInt(ev.target.value)) {
          this.checkedTasks.splice(index, 1);
        }
      })
        

    }
  };

  addTask = () => {
    const max = Math.max.apply(
      Math,
      this.tasksList.map(function (t: any) {
        return t.id;
      })
    );
    const task = {
      completed: false,
      id: max + 1,
      title: this.newTask,
      userId: 1,
    };
    this.tasksList.unshift(task);
    this.newTask = '';
    Swal.fire('Hecho', 'Tarea agregada exitosamente!', 'success');
  };


  editTask = (task:any) => {
     this.taskInfo.title = task.title
     this.taskInfo.id = task.id
     this.taskInfo.completed = task.completed
  }

  saveTask = () => {
      this.tasksList.map((task:any,index:any)=>{
      if (task.id  === this.taskInfo.id ) {
        task.completed = this.taskInfo.completed
        task.title = this.taskInfo.title
         Swal.fire('Hecho', 'Tarea editada exitosamente!', 'success');

      }
    })
  }

  deleteSelectedTasks = () => {
    const result = this.tasksList.filter((task:any)=>{
     return !this.checkedTasks.includes(task.id)
    });
    this.tasksList = result  
    Swal.fire('Hecho', 'Tarea/s eliminada/s exitosamente!', 'success');
  };
}
