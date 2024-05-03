import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { firstValueFrom } from 'rxjs';

@Injectable()
export class LinkService {
    private linkUrl = 'api/links';


    constructor(private http: HttpClient) {}


}



