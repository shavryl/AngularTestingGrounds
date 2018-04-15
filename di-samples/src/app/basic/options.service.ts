import {Injectable} from "@angular/core";
import {Product} from "./product.service";
import {Http} from "@angular/http";


export class Options {
  constructor(
   public truesness: boolean,
   public optionsAvailable: number){
  }
}


@Injectable()
export class OptionsService {

  constructor() {}
    getOptions(): Options {
      return new Options(false, 13);
  }
}
