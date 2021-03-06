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
  data_saved = false;
  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private activityService: ActivityService
  ) {}
  file = null;

  public errorMsg: any;
  updatedEvent = [];
  allEvents = [];
  // ------------------------------------

  upcomingEvents = [];

  upcomingEventDetail = this.fb.group({
    id: [''],
    file: ['', Validators.required],
    url: ['', Validators.required],
  });

  activityDetail = this.fb.group({
    file: ['', [Validators.required]],
    eventType: ['', [Validators.required]],
    date: ['', [Validators.required]],
    eventOn: ['', [Validators.required]],
    organizedBy: ['', [Validators.required]],
    organizedAt: ['', [Validators.required]],
    eventDetails: [''],
  });

  recentActivity = this.fb.group({
    id: [''],
    file: ['', [Validators.required]],
    eventType: ['', [Validators.required]],
    date: ['', [Validators.required]],
    eventOn: ['', [Validators.required]],
    organizedBy: ['', [Validators.required]],
    organizedAt: ['', [Validators.required]],
    eventDetails: [''],
  });

  // ---------image---------------
  url = '';

  addUpcomingActivity() {
    this.activityService
      .addUpcomingActivity(this.upcomingEventDetail.value)
      .subscribe(
        response => console.log('success!', response),
        error => (this.errorMsg = error)
      );
    this.data_saved = true;
    this.ngOnInit();
  }
  upcomingActivityValue(event: any) {
    this.upcomingEventDetail.get('id').setValue(event._id);
    this.upcomingEventDetail.get('file').setValue(event.imageName);
    this.upcomingEventDetail.get('url').setValue(event.url);
  }
  deleteUpcoming(id: any) {
    const c = confirm('Are you sure?');
    if (!c) {
      return 0;
    }
    this.activityService.deleteUpcoming({id: id}).subscribe(
      response => console.log('success!', response),
      error => (this.errorMsg = error)
    );
    this.data_saved = true;
    this.ngOnInit();
  }
  updateUpcomingActivity() {
    if (this.url === '') {
      this.activityService
        .updateUpcomingWithoutImage(this.upcomingEventDetail.value)
        .subscribe(
          response => console.log('success!', response),
          error => (this.errorMsg = error)
        );
    } else {
      this.activityService
        .updateUpcomingWithImage(this.upcomingEventDetail.value)
        .subscribe(
          response => console.log('success!', response),
          error => (this.errorMsg = error)
        );
    }
    this.data_saved = true;
    this.ngOnInit();
  }

  recentactivity(event: any) {
    this.recentActivity.get('id').setValue(event._id);
    this.recentActivity.get('date').setValue(event.eventDate);
    this.recentActivity.get('file').setValue(event.eventImage);
    this.recentActivity.get('eventDetails').setValue(event.eventDetails);
    this.recentActivity.get('eventType').setValue(event.eventType);
    this.recentActivity.get('eventOn').setValue(event.eventOn);
    this.recentActivity.get('organizedBy').setValue(event.organizedBy);
    this.recentActivity.get('organizedAt').setValue(event.organizedAt);
  }

  onselect(e: any) {
    if (e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (events: any) => {
        this.url = events.target.result;
        this.activityDetail.get('file').setValue({
          buffer: this.url.split(',')[1],
          mimetype: this.url.split(',')[0].split(':')[1].split(';')[0],
          originalname: e.target.files[0].name,
          encoding: '64bit',
        });
      };
    }
  }

  onselectrecent(e: any) {
    if (e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (events: any) => {
        this.url = events.target.result;
        this.recentActivity.get('file').setValue({
          buffer: this.url.split(',')[1],
          mimetype: this.url.split(',')[0].split(':')[1].split(';')[0],
          originalname: e.target.files[0].name,
          encoding: '7bit',
        });
      };
    }
  }
  onselectupcoming(e: any) {
    if (e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (events: any) => {
        this.url = events.target.result;
        this.upcomingEventDetail.get('file').setValue({
          buffer: this.url.split(',')[1],
          mimetype: this.url.split(',')[0].split(':')[1].split(';')[0],
          originalname: e.target.files[0].name,
          encoding: '7bit',
        });
      };
    }
  }

  refresh() {
    this.url = '';
  }

  // -----------------upload---------------------
  addActivity() {
    this.activityService.addActivity(this.activityDetail.value).subscribe(
      response => console.log('success!', response),
      error => (this.errorMsg = error)
    );
    this.data_saved = true;
    this.ngOnInit();
  }

  deleteActivity(id: any) {
    const c = confirm('Are you sure?');
    if (!c) {
      return 0;
    }
    this.activityService.deleteActivity({id: id}).subscribe(
      response => console.log('success!', response),
      error => (this.errorMsg = error)
    );
    this.data_saved = true;
    this.ngOnInit();
  }

  updateActivity() {
    if (this.url === '') {
      this.activityService
        .updateActivityWithoutImage(this.recentActivity.value)
        .subscribe(
          response => console.log('success!', response),
          error => (this.errorMsg = error)
        );
    } else {
      this.activityService
        .updateActivityWithImage(this.recentActivity.value)
        .subscribe(
          response => console.log('success!', response),
          error => (this.errorMsg = error)
        );
    }
    this.data_saved = true;
    this.ngOnInit();
  }

  // tslint:disable-next-line: member-ordering

  // -----------------modal-----------------------------

  open(content: any) {
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

  ngOnInit() {
    this.activityService.getRecentActivity().subscribe(
      data => (this.updatedEvent = data),
      error => (this.errorMsg = error)
    );
    this.activityService.getActivity().subscribe(
      data => (this.allEvents = data),
      error => (this.errorMsg = error)
    );
    this.activityService.getUpcomingActivity().subscribe(
      data => (this.upcomingEvents = data),
      error => (this.errorMsg = error)
    );
  }
}
