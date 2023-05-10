import { Component, OnInit } from '@angular/core';
import { bodyService } from 'src/app/services/body.service';
import { ExcelService } from 'src/app/services/excel.service';
import { ItemsModel } from 'src/app/models/items.model';
import { ExportedListModel } from 'src/app/models/exported-list.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent implements OnInit {
  databaseItems: ItemsModel[];
  exportList: ExportedListModel[];

  constructor(
    private bodyService: bodyService,
    private excelService: ExcelService
  ) {}

  ngOnInit(): void {}

  deleteChecked_FilteredProperty(
    items: ExportedListModel[]
  ): ExportedListModel[] {
    for (let i = 0; i < items.length; i++) {
      delete items[i].checked;
      delete items[i].filtered;
    }
    return items;
  }

  exportFile(eventData: { list: ItemsModel[] }) {
    this.excelService.exportAsExcelFile(
      this.deleteChecked_FilteredProperty(eventData.list),
      'File'
    );
  }
}
