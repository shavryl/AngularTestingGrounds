import {Component, Optional} from '@angular/core';
import {ProductService, Product} from "./product.service";
import {OptionsService} from "./options.service";

@Component({
  selector: 'di-product-page',
  template: `
    <div>
      <h1>Product Details</h1>
      <h2>Title: {{product.title}}</h2>
      <h2>Description: {{product.description}}</h2>
      <h2>Price: \${{product.price}}</h2>
      <h2>Color: {{product.colorIn}}</h2>
      <h1>{{new_options.truesness}}</h1>
    </div>`,
  providers: [ProductService, OptionsService],
})

export class ProductComponent {
  product: Product;
  new_options: any;

  constructor(productService: ProductService, optionsService: OptionsService) {

    this.product = productService.getProducts();
    this.new_options = optionsService.getOptions();
  }
}
