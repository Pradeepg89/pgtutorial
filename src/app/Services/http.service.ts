import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../Models/country';
import { Product } from '../Models/product';
import { Segment } from '../Models/segment';
import { Slicer } from '../Models/slicer';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getListOfCountry():Observable<Country[]>{
  return this.http.get<Country[]>(environment.countryListUrl);
  }
  getListOfManufacturer():Observable<string[]>{
    return this.http.get<string[]>(environment.manufacturerListUrl);
    }
    getListOfProductnames():Observable<string[]>{
      return this.http.get<string[]>(environment.productnameListUrl);
      }
      getListOfFpc():Observable<string[]>{
        return this.http.get<string[]>(environment.fpcListUrl);
        }
        getListOfSegments():Observable<Segment[]>{
          return this.http.get<Segment[]>(environment.segmentListUrl);
          }

          getListOfProducts():Observable<Product[]>{
            return this.http.get<Product[]>(environment.productListUrl);
            }
            getFilteredListOfProducts(name,value):Observable<Product[]>{
              return this.http.get<Product[]>(environment.filteredProductListUrl+"?name="+name+"&value="+value);
              }

              getListOfSlicerData():Observable<Slicer[]>{
                return this.http.get<Slicer[]>("./assets/slicerdata.json");
                }

}
