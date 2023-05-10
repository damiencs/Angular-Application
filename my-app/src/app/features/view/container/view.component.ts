import { Component, OnInit, Input} from "@angular/core";
import { Router,ActivatedRoute } from "@angular/router";
import { bodyService } from "src/app/services/body.service";
import { ItemsModel } from "src/app/models/items.model";

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html'
})
export class ViewComponent implements OnInit{
    item:any;
    itemHeaders:any;

    constructor(private bodyService: bodyService, private activatedRoute: ActivatedRoute, private router:Router){
    }

    ngOnInit(){
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        this.bodyService.getItemById(id).subscribe((res: ItemsModel) => {
            this.item = res;
            this.getHeaders(this.item);
          }) 
    }
    
    getHeaders(item:ItemsModel){
        this.itemHeaders = Object.keys(item);
    }

    //go back to homepage
    goBack(){
        const parentURL = this.router.url.split('/')[0];
        this.router.navigate([parentURL]);
    }

}