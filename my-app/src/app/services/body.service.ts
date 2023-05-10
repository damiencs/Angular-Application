import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { ItemsModel } from '../models/items.model';
import { SearchParamModel } from '../models/searchParam.model';


@Injectable()
export class bodyService{
    private _searchParam$: BehaviorSubject<SearchParamModel>;
    private _searchParam: SearchParamModel = {title:"", refNumber: 0, dateTo: "", dateFrom:""};

    constructor(private http: HttpClient){
        this._searchParam$ = new BehaviorSubject(this._searchParam);
    }

    getItems() :Observable<ItemsModel[]> {
        return this.http.get<ItemsModel[]>("http://localhost:3000/items");
    }

    getItemById(id:any) :Observable<ItemsModel> {
        let req = "http://localhost:3000/items/"+id
        return this.http.get<ItemsModel>(req);
    }

    //search
    getSearchParam(): Observable<SearchParamModel>{
        return this._searchParam$.asObservable();
    }
    sendSearchParam(data:SearchParamModel){
        this._searchParam$.next(data);
    }
}
