import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LinkService {
    constructor(private http: HttpClient) { }
}



