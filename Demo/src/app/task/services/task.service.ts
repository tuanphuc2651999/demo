import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';
import { Observable } from 'rxjs';

const apiUrl = 'https://localhost:7159/api/Task/';

@Injectable()
export class TaskService {

    constructor(private httpClient: HttpClient) { }

    getData(search: string): Observable<Task[]> {
        return this.httpClient.get<Task[]>(apiUrl + "?search=" + search).pipe()
    }

    create(task: Task) {
        return this.httpClient.post(apiUrl, task).pipe()
    }

    update(id: number, task: Task) {
        return this.httpClient.put(apiUrl + id, task).pipe()
    }

    delete(id: number) {
        return this.httpClient.delete(apiUrl + id).pipe()
    }

    updateIdParent(id: number, idParent: number) {
        return this.httpClient.patch(apiUrl + id + `?idParent=${idParent}`, {}).pipe()
    }

}