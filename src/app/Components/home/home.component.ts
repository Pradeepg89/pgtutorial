import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSidenav, MatSort, MatTableDataSource } from '@angular/material';
import { Country } from 'src/app/Models/country';
import { Product } from 'src/app/Models/product';
import { Segment } from 'src/app/Models/segment';
import { HttpService } from 'src/app/Services/http.service';


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {

  countryList:Country[];
  manufactererList:string[];
  productNameList:string[];
  fpcList:string[];
  segmentList:Segment[];
  productList:Product[];

  newdataSource = new MatTableDataSource<Product>([]);
  @ViewChild(MatSort,{static:false}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;    

  constructor(private observer: BreakpointObserver,private httpService:HttpService) {}
  


  
  displayedColumns: string[] = ['id', 'country', 'productName', 'fpc','segment','newsegment','modifiedDate'];
  //dataSource = new MatTableDataSource(this.articleService.getAllArticles());

  ngOnInit() {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    this.httpService.getListOfCountry().subscribe(a=>{
      this.countryList=a;
    })
    this.httpService.getListOfManufacturer().subscribe(a=>{
      var manufactererListValue:string[] = a;
      manufactererListValue.unshift("All");
      this.manufactererList=[...manufactererListValue];
    })
    this.httpService.getListOfProductnames().subscribe(a=>{
      this.productNameList=a;
    })
    this.httpService.getListOfFpc().subscribe(a=>{
      this.fpcList=a;
    })
    this.httpService.getListOfSegments().subscribe(a=>{
      this.segmentList=a;
    })
    this.httpService.getListOfProducts().subscribe(a=>{
      this.productList=a;
      console.log(this.productList);
    })
  } 


  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  @ViewChild(MatSidenav,{static:false})
 sidenav!: MatSidenav;


 selectionChange(name,value){
   this.httpService.getFilteredListOfProducts(name,value).subscribe((result)=>{
     var newProductList:Product[] = result;
     this.productList = [];
     this.productList = [...newProductList];
   })
 }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  getRecord(val:Product){
   console.log(val);  
   var abc:Product[] =[];
  abc.push(val);
  this.newdataSource.data=abc;

  }
}
