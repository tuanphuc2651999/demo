export interface TaskModelMap {
	id: number;
	start_date: string;
	duration: number;
	text: string;
	progress: number;
	end_date: string;
	parent: number;
}

export interface Task {
	id: number;
	idparent: number;
	label: string;
	type: string;
	name: string;
	startDate: string;
	endDate: string;
	duration: number;
	progress: number;
	isUnscheduled: boolean;
}
