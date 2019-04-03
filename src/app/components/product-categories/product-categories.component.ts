import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {

  products = [];
  constructor(private router: Router, private route: ActivatedRoute, private prodSvc: ProductsService) { }
  viewProd(id) {
    this.router.navigateByUrl(`/product/${id}`);
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.products = this.prodSvc.getCategory(param.id);
    })
  }

}
