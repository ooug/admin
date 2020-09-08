import {Component, OnInit} from '@angular/core';

export interface PeriodicElement {
  id: number;
  name: string;
  cover_photo: string;
  discription: string;
  photos: string;
  label: string;
  coordinator_name: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Android Development', cover_photo: 'img', discription: 'Hello world',photos:'img', label:'123', coordinator_name:'Prof.'},
  {id: 2, name: 'Web Development', cover_photo: 'img', discription: 'Hello world',photos:'img', label:'123', coordinator_name:'Prof.'},
  {id: 3, name: 'Android Development', cover_photo: 'img', discription: 'Hello world',photos:'img', label:'123', coordinator_name:'Prof.'},
  {id: 4, name: 'Web Development', cover_photo: 'img', discription: 'Hello world',photos:'img', label:'123', coordinator_name:'Prof.'},
  {id: 5, name: 'Android Development', cover_photo: 'img', discription: 'Hello world',photos:'img', label:'123', coordinator_name:'Prof.'},
  {id: 6, name: 'Web Development', cover_photo: 'img', discription: 'Hello world',photos:'img', label:'123', coordinator_name:'Prof.'},
  {id: 7, name: 'Android Development', cover_photo: 'img', discription: 'Hello world',photos:'img', label:'123', coordinator_name:'Prof.'},
  {id: 8, name: 'Web Development', cover_photo: 'img', discription: 'Hello world',photos:'img', label:'123123', coordinator_name:'Prof.'},
  {id: 9, name: 'Android Development', cover_photo: 'img', discription: 'Hello world',photos:'img', label:'123', coordinator_name:'Prof.'},
  {id: 10, name: 'Web Development', cover_photo: 'img', discription: 'Hello world',photos:'img', label:'123', coordinator_name:'Prof.'},
];

@Component({
  selector: 'ooug-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'cover_photo', 'discription','photos','label','coordinator_name'];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit(): void {}
}
