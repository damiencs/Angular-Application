import { Component, Input, Output } from '@angular/core';
import { faFileExcel, faEye } from '@fortawesome/free-solid-svg-icons';
import { bodyService } from 'src/app/services/body.service';
import { Router } from '@angular/router';
import { ItemsModel } from 'src/app/models/items.model';
import { SearchParamModel } from 'src/app/models/searchParam.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  databaseItems: ItemsModel[] = [];
  @Output() exports = new EventEmitter<{ list: ItemsModel[] }>();
  faFileExcel = faFileExcel;
  faEye = faEye;
  title: keyof ItemsModel = 'title';
  ref: keyof ItemsModel = 'referenceNo';
  stock: keyof ItemsModel = 'stock';
  date: keyof ItemsModel = 'date';
  headers = [this.title, this.ref, this.stock, this.date];
  databaseheaders = ['Title', 'Reference Number', 'Stock', 'Date'];
  itemsToExport: ItemsModel[] = [];
  searchParam: SearchParamModel;
  searchTitle: string;
  searchRef: number;
  searchDateTo: string;
  searchDateFrom: string;

  constructor(private bodyService: bodyService, private router: Router) {}

  ngOnInit(): void {
    this.bodyService.getItems().subscribe((res: ItemsModel[]) => {
      this.databaseItems = res;
    });
    this.bodyService.getSearchParam().subscribe((res: SearchParamModel) => {
      this.searchParam = res;
      this.searchTitle = this.searchParam.title;
      this.searchRef = this.searchParam.refNumber;
      this.searchDateTo = this.searchParam.dateTo;
      this.searchDateFrom = this.searchParam.dateFrom;
      if (this.searchTitle === '') {
        this.unCheckAllCheckBox();
      }
    });
  }

  clickView(item: ItemsModel) {
    this.router.navigate(['/view', item.id]);
  }

  //unchecks all checkbox when user clears search parameters
  unCheckAllCheckBox() {
    this.databaseItems.forEach((x: any) => (x.checked = false));
  }

  checkAllCheckBox(ev: any) {
    for (let i = 0; i < this.databaseItems.length; i++) {
      this.databaseItems.forEach(
        (x: ItemsModel) => (x.checked = ev.target.checked)
      );
      if (this.databaseItems[i].filtered == null) {
        this.databaseItems.forEach(
          (x: ItemsModel) => (x.checked = ev.target.checked)
        );
      }
      //when user searches, filtered property is added. Prperty is used when user selects all on search results
      else if (this.databaseItems[i].filtered) {
        this.databaseItems[i].checked = ev.target.checked;
      }
    }
  }

  isAllCheckBoxChecked() {
    if (this.databaseItems.length !== 0) {
      return this.databaseItems.every((p: ItemsModel) => p.checked);
    }
  }

  exportOneItem(item: ItemsModel) {
    this.itemsToExport = [];
    this.itemsToExport[0] = item; // can use spread operator
    this.exports.emit({ list: this.itemsToExport });
  }

  exportItems() {
    this.itemsToExport = [];

    for (let i = 0; i < this.databaseItems.length; i++) {
      //when clearing form, filtered becomes undefined
      if (this.databaseItems[i].filtered === undefined) {
        if (
          this.databaseItems[i].checked &&
          !this.itemsToExport.includes(this.databaseItems[i])
        ) {
          this.itemsToExport.push(this.databaseItems[i]);
        }
      } else {
        if (
          this.databaseItems[i].checked &&
          this.databaseItems[i].filtered &&
          !this.itemsToExport.includes(this.databaseItems[i])
        ) {
          if (this.databaseItems[i].filtered) {
            delete this.databaseItems[i].filtered;
          }
          this.itemsToExport.push(this.databaseItems[i]);
        }
      }
    }
    this.exports.emit({ list: this.itemsToExport });
  }
}
