import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from './models/task';
import { TaskService } from './services/task.service';

// Componente principal da aplicação de tarefas 
// Responsável por gerenciar CRUD e filtros de tarefas

type FilterType = 'todas' | 'pendentes' | 'concluidas';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  tasks: Task[] = [];

  newTaskTitle: string = '';
  newTaskDescription: string = '';
  newTaskPriority: string = 'MEDIA';

  activeFilter: FilterType = 'todas';

  isEditModalOpen: boolean = false;
  editingTaskId: number | null = null;
  editTaskTitle: string = '';
  editTaskDescription: string = '';
  editTaskPriority: string = 'MEDIA';
  editTaskStatus: string = 'PENDENTE';

  constructor(
    private taskService: TaskService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadTasks();
  }
// Busca todas as tarefas do backend 
  loadTasks(): void {
    this.taskService.getTasks().subscribe({
      next: (data) => {
        this.tasks = [...data];
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Erro ao buscar tarefas:', error);
      }
    });
  }
// cria nova tarefa
  addTask(): void {
    const title = this.newTaskTitle.trim();
    const description = this.newTaskDescription.trim();

    if (!title) return;

    const newTask = {
      title: title,
      description: description || 'Sem descrição',
      priority: this.newTaskPriority,
      status: 'PENDENTE'
    };

    this.taskService.createTask(newTask).subscribe({
      next: () => {
        this.newTaskTitle = '';
        this.newTaskDescription = '';
        this.newTaskPriority = 'MEDIA';
        this.loadTasks();
      },
      error: (error) => {
        console.error('Erro ao criar tarefa:', error);
      }
    });
  }
// remove tarefa por id
  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe({
      next: () => {
        this.loadTasks();
      },
      error: (error) => {
        console.error('Erro ao excluir tarefa:', error);
      }
    });
  }
// marca tarefa como concluída por id
  markAsCompleted(id: number): void {
    this.taskService.markAsCompleted(id).subscribe({
      next: () => {
        this.loadTasks();
      },
      error: (error) => {
        console.error('Erro ao concluir tarefa:', error);
      }
    });
  }
// abre modal de edição preenchendo campos com dados da tarefa selecionada
  openEditModal(task: Task): void {
    this.editingTaskId = task.id;
    this.editTaskTitle = task.title;
    this.editTaskDescription = task.description;
    this.editTaskPriority = task.priority;
    this.editTaskStatus = task.status;
    this.isEditModalOpen = true;
  }

  closeEditModal(): void {
    this.isEditModalOpen = false;
    this.editingTaskId = null;
    this.editTaskTitle = '';
    this.editTaskDescription = '';
    this.editTaskPriority = 'MEDIA';
    this.editTaskStatus = 'PENDENTE';
  }

  saveTaskEdit(): void {
    if (this.editingTaskId === null) return;

    this.cdr.detectChanges();

    const title = this.editTaskTitle.trim();
    const description = this.editTaskDescription.trim();

    if (!title) return;

    const updatedTask = {
      title: title,
      description: description || 'Sem descrição',
      priority: this.editTaskPriority,
      status: this.editTaskStatus
    };

    this.taskService.updateTask(this.editingTaskId, updatedTask).subscribe({
      next: () => {
        const index = this.tasks.findIndex(task => task.id === this.editingTaskId);

        if (index !== -1) {
          this.tasks[index] = {
            ...this.tasks[index],
            title: updatedTask.title,
            description: updatedTask.description,
            priority: updatedTask.priority,
            status: updatedTask.status
          };
          this.tasks = [...this.tasks];
        }

        this.closeEditModal();
      },
      error: (error) => {
        console.error('Erro ao editar tarefa:', error);
      }
    });
  }

  setFilter(filter: FilterType): void {
    this.activeFilter = filter;
  }

  get filteredTasks(): Task[] {
    switch (this.activeFilter) {
      case 'pendentes':
        return this.tasks.filter(task => task.status?.toUpperCase() !== 'CONCLUIDA');
      case 'concluidas':
        return this.tasks.filter(task => task.status?.toUpperCase() === 'CONCLUIDA');
      case 'todas':
      default:
        return this.tasks;
    }
  }

  get totalPendentes(): number {
    return this.tasks.filter(task => task.status?.toUpperCase() !== 'CONCLUIDA').length;
  }

  get totalConcluidas(): number {
    return this.tasks.filter(task => task.status?.toUpperCase() === 'CONCLUIDA').length;
  }

  getPriorityClass(priority: string): string {
    switch (priority?.toUpperCase()) {
      case 'ALTA':
      case 'HIGH':
        return 'priority-high';
      case 'MEDIA':
      case 'MEDIUM':
        return 'priority-medium';
      case 'BAIXA':
      case 'LOW':
        return 'priority-low';
      default:
        return 'priority-default';
    }
  }

  getStatusLabel(status: string): string {
    switch (status?.toUpperCase()) {
      case 'PENDENTE':
        return 'Pendente';
      case 'EM_PROGRESSO':
      case 'IN_PROGRESS':
        return 'Em progresso';
      case 'CONCLUIDA':
      case 'COMPLETED':
        return 'Concluída';
      default:
        return status;
    }
  }
}