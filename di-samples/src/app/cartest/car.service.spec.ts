import {inject, TestBed} from "@angular/core/testing";
import {CarService} from "./car.service";
import any = jasmine.any;


describe('Given source should be defined', () => {

    beforeEach( () => {
      TestBed.configureTestingModule({
        providers: [
          CarService,
        ],
      });
    });

    it('should initiate the carService', inject([CarService], (carService) => {
      expect(carService).toBeDefined();
    }));

    it('should return "yes" when called carService.isSupercharged with car: Ford Gt',
      inject([CarService], (carService) => {
      expect(carService.isSuperCharged('Ford GT')).toBe('yes');
    }));

    it('should return "no" when called carService.isSupercharged with car: any',
      inject([CarService], (carService) => {
      expect(carService.isSuperCharged(any)).toBe('no');
    }));
});
