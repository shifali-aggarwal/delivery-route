import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ShortestPathService } from '../../services/shortest-path.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  currProd = [];
  path = {};
  visible: boolean = false;
  origin = '';
  destination = '';
  constructor(
    private shortestPathSvc: ShortestPathService,
    private route: ActivatedRoute,
    private prodSvc: ProductsService
  ) {}

  getPath(dest) {
    const path = (this.currProd['origin'].substr(0,3) + dest.substr(0,3)).toLowerCase();
    this.path = this.shortestPathSvc.dijkstra(path);
    this.visible = true;
    this.origin = this.currProd['origin'];
    this.destination = dest;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currProd = this.prodSvc.getProduct(params.id);
    })
    console.log(this.currProd)
  }

}
