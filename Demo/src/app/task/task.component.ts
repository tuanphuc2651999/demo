import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { LinkService } from './services/link.service';
import { TaskService } from './services/task.service';
import { Task, TaskModelMap } from './models/task';
import moment from "moment";
import { GanttStatic, gantt } from 'dhtmlx-gantt';
import { LinkModelMap } from './models/link';

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'task',
	styleUrls: ['./task.component.scss'],
	providers: [TaskService, LinkService],
	templateUrl: './task.component.html',
})
export class TaskComponent implements OnInit {
	@ViewChild('gantt_here', { static: true }) ganttContainer!: ElementRef;
	private _gantt?: GanttStatic;

	constructor(private taskService: TaskService, private linkService: LinkService) {
	}

	ngOnInit() {
		gantt.config.date_format = '%Y-%m-%d %H:%i';
		gantt.init(this.ganttContainer.nativeElement);
		gantt.createDataProcessor({
			task: {
				update: (data: TaskModelMap) => {
					let inputData: Task = {
						id: data.id,
						duration: data.duration,
						idparent: data.parent,
						progress: data.progress,
						isUnscheduled: true,
						label: data.text,
						name: data.text,
						startDate: data.start_date.slice(0, 10),
						endDate: data.end_date.slice(0, 10),
						type: "1"

					}
					this.taskService.update(data.id, inputData).subscribe(rs => {
						this.getData();
					});
				},
				create: (data: TaskModelMap) => {
					let inputData: Task = {
						id: 0,
						duration: data.duration,
						idparent: data.parent,
						progress: data.progress,
						isUnscheduled: true,
						label: data.text,
						name: data.text,
						startDate: data.start_date.slice(0, 10),
						endDate: data.end_date.slice(0, 10),
						type: "1"

					}
					this.taskService.create(inputData).subscribe(rs => {
						this.getData();
					});

				},
				delete: (id: number) => {
					this.taskService.delete(id).subscribe(rs => {
						this.getData();
					})
				}
			},
			link: {
				update: (data: LinkModelMap) => {
					console.log("update link")
				},
				create: (data: LinkModelMap) => {
					this.taskService.updateIdParent(data.target, data.source).subscribe(rs => {
						this.getData();
					});
				},
				delete: (id: number) => {
					console.log("Delete link")
				}
			}
		});
		this.getData();
	}

	getData() {
		gantt.clearAll();
		let tasks: TaskModelMap[] = [];
		let links: LinkModelMap[] = [];
		this.taskService.getData("").subscribe((r: Task[]) => {
			if (r.length > 0) {
				tasks = r.map(function (e) {
					let task: TaskModelMap = {
						id: e.id,
						text: e.name,
						start_date: moment(e.startDate).format("YYYY-MM-DD h:mm"),
						end_date: moment(e.endDate).format("YYYY-MM-DD h:mm"),
						duration: e.duration,
						progress: e.progress,
						parent: e.idparent,
					}
					return task
				});

				tasks.forEach(element => {
					let listDataFilter = tasks.filter(f => f.parent == element.id).map(function (e) {
						const link: LinkModelMap = {
							id: e.id,
							source: e.parent,
							target: e.id,
							type: "1"
						}
						return link
					}
					);
					links = links.concat(listDataFilter)
				});
				gantt.parse({ tasks, links });
				gantt.eachTask(function (t) {
					t.$open = true
				});
				gantt.render()
			}
		},
		)




		this._gantt = gantt;
	}


	ngOnDestroy() {
		//if (this._gantt) this._gantt.destructor();
	}
}
