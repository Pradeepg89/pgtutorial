import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material';
import { Slicer, SlicerArray } from 'src/app/Models/slicer';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-slicer',
  templateUrl: './slicer.component.html',
  styleUrls: ['./slicer.component.scss']
})
export class SlicerComponent implements OnInit {
  @ViewChild('allSelected', {static: true}) private allSelected: MatSelectionList; 
  @ViewChild('shoes',{static:true}) shoes: MatSelectionList; 
isSelected:boolean;


masterSelected:boolean;
  checklist:any;
  checkedList:any;
  slicerArray:Slicer[]=[];
  

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers','Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  constructor(private httpService:HttpService) { 
    this.masterSelected = false;
      this.checklist = [
        {id:1,value:'Elenor Anderson',isSelected:false},
        {id:2,value:'Caden Kunze',isSelected:true},
        {id:3,value:'Ms. Hortense Zulauf',isSelected:true},
        {id:4,value:'Grady Reichert',isSelected:false},
        {id:5,value:'Dejon Olson',isSelected:false},
        {id:6,value:'Jamir Pfannerstill',isSelected:false},
        {id:7,value:'Aracely Renner DVM',isSelected:false},
        {id:8,value:'Genoveva Luettgen',isSelected:false}
      ];
  }

  checkUncheckAll() {
    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }
  isAllSelected() {
    this.masterSelected = this.checklist.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }
  public get half(): number {
    return Math.ceil(this.slicerArray.length / 2);
}

  getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.checklist.length; i++) {
      if(this.checklist[i].isSelected)
      this.checkedList.push(this.checklist[i]);
    }
    this.checkedList = JSON.stringify(this.checkedList);
  }

  ngOnInit() {
    this.httpService.getListOfSlicerData().subscribe(a=>{
      this.slicerArray=a['slicerarray'];
  
    })
  }

  selectAll(){
  if(this.isSelected){
    this.allSelected.deselectAll();
  }else{
    this.allSelected.selectAll();
  }
  this.isSelected = !(this.isSelected);
    
  }

  

}
