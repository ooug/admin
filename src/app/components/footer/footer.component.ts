import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ooug-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public year = new Date().getUTCFullYear();
  constructor() {}

  ngOnInit(): void {}
}
