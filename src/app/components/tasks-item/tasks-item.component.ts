import { Task } from './../../Task';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css'],
})
export class TasksItemComponent implements OnInit {
  @Input() task!: Task;
  faTimes = faTimes;

  @Output() onDeleteTask = new EventEmitter<Task>();
  @Output() onToggleReminder = new EventEmitter<Task>();

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}
