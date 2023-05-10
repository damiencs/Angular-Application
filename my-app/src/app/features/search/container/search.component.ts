import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import {faMagnifyingGlassArrowRight} from "@fortawesome/free-solid-svg-icons"
import {faXmarkCircle} from "@fortawesome/free-regular-svg-icons"
import {FormGroup,FormControl} from '@angular/forms';
import { bodyService } from "src/app/services/body.service";
import * as moment from "moment";

export interface searchParam{
    title:string;
    refNumber:number;
    dateTo:Date;
    dateFrom:Date;
}

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})

export class SearchComponent implements OnInit {
    faXmarkCircle = faXmarkCircle;
    faMagnifyingGlassArrowRight = faMagnifyingGlassArrowRight;
    search_ref :number;
    search_title :string;
    search_dateFrom :string;
    search_dateTo :string;

    constructor(private bodyService: bodyService){
    }

    forms = new FormGroup({
        title: new FormControl(''),
        ref: new FormControl(''),
        dateFrom: new FormControl(''),
        dateTo: new FormControl(''),
    });
    ngOnInit(): void {
        
    }
    
    clearForm(){
        this.forms.reset();
        this.resetTable();
    }

    //sends empty object to display all items in the list after a search
    resetTable(){
        let searchValues = {
            title: "",
            refNumber: 0,
            dateTo: "",
            dateFrom: ""
        }
        this.bodyService.sendSearchParam(searchValues);
    }

    //send search parameters 
    searchFunc(){
        this.search_dateTo = (moment(this.forms.value.dateTo).format('DD/MM/YYYY'));
        this.search_dateFrom = (moment(this.forms.value.dateFrom).format('DD/MM/YYYY'));
        let searchValues = {
            title: this.search_title,
            refNumber: this.search_ref,
            dateTo: this.search_dateTo,
            dateFrom: this.search_dateFrom
        }
        this.bodyService.sendSearchParam(searchValues);
    }
}


