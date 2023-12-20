import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown() {
    console.log("x");
    const dropdown = document.querySelector('.dropdown');
    dropdown?.classList.toggle('d-none');
    dropdown?.classList.toggle('d-flex-jucoce-alitece');
  }
}
