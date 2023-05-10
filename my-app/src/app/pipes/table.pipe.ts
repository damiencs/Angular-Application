import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tableFilter'
  })
  export class TablePipe implements PipeTransform {
  
    transform(items: any[], title: string, ref: number, dateFrom:string, dateTo:string): any[] {
        if (!items) {
          return [];
        }
        if (!title || !ref) {
            items.forEach((x:any) => delete x.filtered)
            return items;
        }
        
    
        return items.filter(singleItem => {
            const titleFound = singleItem.title === title;
            const refFound = singleItem.referenceNo == ref;
            const dateValid = (singleItem.date<=dateTo && singleItem.date>=dateFrom)
            if (titleFound && refFound && dateValid) {
                singleItem.filtered = true; //add filter property for when user selects all on search results
                return singleItem;
            }else{
                singleItem.filtered = false;
            }
        });
        
    }

    
  
  }

