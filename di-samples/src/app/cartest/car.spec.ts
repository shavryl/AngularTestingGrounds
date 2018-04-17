import {CarService} from "./car.service";


describe('CarService', () => {
  let service: CarService;
  beforeEach(() => {
    service = new CarService();
  });

  it('', () => {
    expect(service.isSuperCharged().toBe('yes'));
  });
});
