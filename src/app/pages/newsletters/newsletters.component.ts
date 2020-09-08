import {Component, OnInit} from '@angular/core';
import {NewsletterService} from './newsletter.service';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'ooug-newsletters',
  templateUrl: './newsletters.component.html',
  styleUrls: ['./newsletters.component.scss'],
})
export class NewslettersComponent implements OnInit {
  constructor(private newsletterService: NewsletterService) {}

  public subscriptions: any;
  public isLoading = false;

  public sendNewsletterForm = new FormGroup({
    subject: new FormControl(''),
    html: new FormControl(''),
  });

  public sendNewsletter() {
    if (confirm('Are you sure to send newsletter?')) {
      this.isLoading = true;
      this.newsletterService
        .sendNewsletter(
          this.sendNewsletterForm.value.html,
          this.sendNewsletterForm.value.subject
        )
        .then(data => {
          this.isLoading = false;
          this.sendNewsletterForm.controls.subject.setValue('');
          this.sendNewsletterForm.controls.html.setValue('');
          alert('Newsletter Sent');
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  ngOnInit(): void {
    console.log('Called');
    this.newsletterService
      .getNewsLetterSubscription()
      .then(data => {
        this.subscriptions = data;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
