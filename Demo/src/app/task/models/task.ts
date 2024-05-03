export interface TaskModelMap {
	id: number;
	start_date: string;
	text: string;
	progress: number;
	duration: number;
	parent: number;
	type: string;
}

export interface Task {
	id: number;
	idparent: number;
	label: string;
	type: string;
	name: string;
	startDate: Date;
	endDate: Date;
	duration: number;
	progress: number;
	isUnscheduled: boolean;
}
