import {Component, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'ooug-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {
  closeResult = '';

  constructor(private modalService: NgbModal) {}

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  updatedEvent = [
    {
      date: '17-10-2020',
      image: './assets/images/2.jpg',
      detail: 'when an unknown printer took when an unknown printer took',
      eventOn: 'workshop',
    },
    {
      date: '19-02-2020',
      image: './assets/images/1.jpg',
      detail: 'when an unknown printer took when an unknown printer took',
      eventOn: 'workshop',
    },
    {
      date: '17-10-2020',
      image: './assets/images/1.jpg',
      detail: 'when an unknown printer took when an unknown printer took',
      eventOn: 'workshop',
    },
    {
      date: '17-10-2020',
      image: './assets/images/2.jpg',
      detail: 'when an unknown printer took when an unknown printer took',
      eventOn: 'workshop',
    },
    {
      date: '19-02-2020',
      image: './assets/images/1.jpg',
      detail: 'when an unknown printer took when an unknown printer took',
      eventOn: 'workshop',
    },
    {
      date: '17-10-2020',
      image: './assets/images/1.jpg',
      detail: 'when an unknown printer took when an unknown printer took',
      eventOn: 'workshop',
    },
  ];
  allEvents = [
    {
      date: '17-10-2020',
      image: './assets/images/1.jpg',
      detail: 'when an unknown printer took when an unknown printer took',
      eventOn: 'workshop',
    },
    {
      date: '17-10-2020',
      image: './assets/images/1.jpg',
      detail: 'when an unknown printer took when an unknown printer took',
      eventOn: 'workshop',
    },
    {
      date: '17-10-2020',
      image: './assets/images/1.jpg',
      detail: 'when an unknown printer took when an unknown printer took',
      eventOn: 'workshop',
    },
    {
      date: '17-10-2020',
      image: './assets/images/1.jpg',
      detail: 'when an unknown printer took when an unknown printer took',
      eventOn: 'workshop',
    },
    {
      date: '17-10-2020',
      image: './assets/images/1.jpg',
      detail: 'when an unknown printer took when an unknown printer took',
      eventOn: 'workshop',
    },
    {
      date: '17-10-2020',
      image: './assets/images/1.jpg',
      detail: 'when an unknown printer took when an unknown printer took',
      eventOn: 'workshop',
    },
    {
      date: '17-10-2020',
      image: './assets/images/1.jpg',
      detail: 'when an unknown printer took when an unknown printer took',
      eventOn: 'workshop',
    },
  ];

  // ---------image---------------
  url = '';
  onselect(e) {
    if (e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (events: any) => {
        this.url = events.target.result;
      };
    }
  }

  open(content) {
    this.modalService
      .open(content, {ariaLabelledBy: 'modal-basic-title'})
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnInit(): void {}
}
