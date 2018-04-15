import {Injectable, Optional} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {OptionsService} from "./options.service";


export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public description: string,
    public colorIn?: any) {
  }
}

@Injectable()
export class ProductService {

  constructor(public http: Http) {}
  getProducts(): Product {
      return new Product(0, "iPhone 7", 349.99,"The latest iPhone, 7-inch screen", 12);
    }
}

