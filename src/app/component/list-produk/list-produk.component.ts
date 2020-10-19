import { Component, OnInit } from '@angular/core';
import { katalogProduk } from '../../data/produk';

@Component({
  selector: 'app-list-produk',
  templateUrl: './list-produk.component.html',
  styleUrls: ['./list-produk.component.css']
})
export class ListProdukComponent implements OnInit {

  daftarProduk = katalogProduk.hp;

  constructor() { }

  ngOnInit(): void {
  }

}
