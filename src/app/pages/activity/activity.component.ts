import {Component, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {
  Validators,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {ActivityService} from './activity.service';

@Component({
  selector: 'ooug-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {
  closeResult = '';

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private activityService: ActivityService
  ) {}

  updatedEvent = [
    {
      date: '17-10-2020',
      file: './assets/images/2.jpg',
      eventDetails: 'when an unknown printer took when an unknown printer took',
      eventType: 'workshop',
      eventOn: 'web development',
      organizedBy: '3rd year',
      organizedAt: 'GIETU gunupur',
    },
    {
      date: '19-02-2020',
      file: './assets/images/1.jpg',
      eventDetails: 'when an unknown printer took when an unknown printer took',
      eventType: 'celebration',
      eventOn: 'Android',
      organizedBy: '3rd year',
      organizedAt: 'GIETU gunupur',
    },
    {
      date: '17-10-2020',
      file: './assets/images/1.jpg',
      eventDetails: 'when an unknown printer took when an unknown printer took',
      eventType: 'workshop',
      eventOn: 'web development',
      organizedBy: '3rd year',
      organizedAt: 'GIETU gunupur',
    },
    {
      date: '17-10-2020',
      file: './assets/images/2.jpg',
      eventDetails: 'when an unknown printer took when an unknown printer took',
      eventType: 'techbhukkads',
      eventOn: 'web development',
      organizedBy: '3rd year',
      organizedAt: 'GIETU gunupur',
    },
    {
      date: '19-02-2020',
      file: './assets/images/1.jpg',
      eventDetails: 'when an unknown printer took when an unknown printer took',
      eventType: 'techbhukkads',
      eventOn: 'photoshop',
      organizedBy: '4th year',
      organizedAt: 'GIETU gunupur',
    },
    {
      date: '17-10-2020',
      file: './assets/images/1.jpg',
      eventDetails: 'when an unknown printer took when an unknown printer took',
      eventType: 'workshop',
      eventOn: 'web development',
      organizedBy: '3rd year',
      organizedAt: 'GIETU gunupur',
    },
  ];
  allEvents = [
    {
      date: '17-10-2020',
      image: './assets/images/2.jpg',
      detail: 'when an unknown printer took when an unknown printer took',
      type: 'workshop',
      eventOn: 'web development',
      organizedBy: '3rd year',
      organizedAt: 'GIETU gunupur',
    },
    {
      date: '19-02-2020',
      image: './assets/images/1.jpg',
      detail: 'when an unknown printer took when an unknown printer took',
      type: 'celebration',
      eventOn: 'Android',
      organizedBy: '3rd year',
      organizedAt: 'GIETU gunupur',
    },
    {
      date: '17-10-2020',
      image: './assets/images/1.jpg',
      detail: 'when an unknown printer took when an unknown printer took',
      type: 'workshop',
      eventOn: 'web development',
      organizedBy: '3rd year',
      organizedAt: 'GIETU gunupur',
    },
    {
      date: '17-10-2020',
      image: './assets/images/2.jpg',
      detail: 'when an unknown printer took when an unknown printer took',
      type: 'techbhukkads',
      eventOn: 'web development',
      organizedBy: '3rd year',
      organizedAt: 'GIETU gunupur',
    },
    {
      date: '19-02-2020',
      image: './assets/images/1.jpg',
      detail: 'when an unknown printer took when an unknown printer took',
      type: 'techbhukkads',
      eventOn: 'photoshop',
      organizedBy: '4th year',
      organizedAt: 'GIETU gunupur',
    },
    {
      date: '17-10-2020',
      image: './assets/images/1.jpg',
      detail: 'when an unknown printer took when an unknown printer took',
      type: 'workshop',
      eventOn: 'web development',
      organizedBy: '3rd year',
      organizedAt: 'GIETU gunupur',
    },
    {
      date: '17-10-2020',
      image: './assets/images/2.jpg',
      detail: 'when an unknown printer took when an unknown printer took',
      type: 'workshop',
      eventOn: 'web development',
      organizedBy: '3rd year',
      organizedAt: 'GIETU gunupur',
    },
    {
      date: '19-02-2020',
      image: './assets/images/1.jpg',
      detail: 'when an unknown printer took when an unknown printer took',
      type: 'celebration',
      eventOn: 'Android',
      organizedBy: '3rd year',
      organizedAt: 'GIETU gunupur',
    },
    {
      date: '17-10-2020',
      image: './assets/images/1.jpg',
      detail: 'when an unknown printer took when an unknown printer took',
      type: 'workshop',
      eventOn: 'web development',
      organizedBy: '3rd year',
      organizedAt: 'GIETU gunupur',
    },
    {
      date: '17-10-2020',
      image: './assets/images/2.jpg',
      detail: 'when an unknown printer took when an unknown printer took',
      type: 'techbhukkads',
      eventOn: 'web development',
      organizedBy: '3rd year',
      organizedAt: 'GIETU gunupur',
    },
  ];

  activityDetail = this.fb.group({
    file: ['', [Validators.required]],
    eventType: ['', [Validators.required]],
    date: ['', [Validators.required]],
    eventOn: ['', [Validators.required]],
    organizedBy: ['', [Validators.required]],
    organizedAt: ['', [Validators.required]],
    eventDetails: ['', [Validators.required]],
  });

  recentActivity = this.fb.group({
    date: ['', [Validators.required]],
    file: ['', [Validators.required]],
    eventDetails: ['', [Validators.required]],
    eventType: ['', [Validators.required]],
    eventOn: [, [Validators.required]],
    organizedBy: ['', [Validators.required]],
    organizedAt: ['', [Validators.required]],
  });

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

  onselectrecent(e) {
    if (e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (events: any) => {
        this.url = events.target.result;
      };
    }
  }

  refresh() {
    this.url = '';
  }

  addActivity() {
    console.log(this.activityDetail);
    this.activityService.addActivity(this.activityDetail.value).subscribe(
      response => console.log('success!', response),
      error => console.log('Error!', error)
    );
  }

  //-----------------madal-----------------------------

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
