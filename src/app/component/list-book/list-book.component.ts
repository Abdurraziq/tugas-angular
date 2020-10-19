import { Component, OnInit } from '@angular/core';
import { katalogProduk } from '../../data/produk';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  daftarProduk = katalogProduk.buku;
  constructor() { }

  ngOnInit(): void {
  }

}
