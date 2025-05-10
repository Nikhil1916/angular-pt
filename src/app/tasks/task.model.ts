export interface Task {
    id: string,
    userId: string,
    title: string,
    summary: string,
    dueDate: string,
}


export interface NewTaskData{
    dueDate:string,
    title:string,
    summary:string
}