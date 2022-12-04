import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title: string | undefined
  @Input() description: string | undefined
  @Input() image: string | undefined
  @Input() btnText: string | undefined
  @Input() price: string | undefined
  @Input() btnColor: string | undefined
  @Input() cardSice: string | undefined
  @Input() stock: string | undefined

  constructor() { }

  ngOnInit(): void {
  }

  buy(): void {
    alert("Añadir al carrito")
  }
  notAvailable(): void {
    alert("No hay stock disponible")
  }

}
