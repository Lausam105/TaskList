import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/Task';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
tasks: Task[] = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
