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

  public file = null;

  public sendNewsletterForm = new FormGroup({
    subject: new FormControl(''),
    html: new FormControl(''),
    file: new FormControl(),
  });

  public sendNewsletter() {
    if (confirm('Are you sure to send newsletter?')) {
      this.isLoading = true;
      this.newsletterService
        .sendNewsletter(
          this.sendNewsletterForm.value.html,
          this.sendNewsletterForm.value.subject,
          this.file
        )
        .then(data => {
          this.isLoading = false;
          this.file = null;
          this.sendNewsletterForm.controls.subject.setValue('');
          this.sendNewsletterForm.controls.html.setValue('');
          alert('Newsletter Sent');
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  public onFileChange($event: any) {
    this.toBase64($event.target.files[0])
      .then((data: string) => {
        this.file = {
          buffer: data.split(',')[1],
          mimeType: data.split(',')[0].split(':')[1].split(';')[0],
          originalName: $event.target.files[0].name,
          folder: 'ooug/newsletter/',
        };
      })
      .catch(err => {
        console.log(err);
      });
    this.sendNewsletterForm.patchValue({
      myFile: $event.target.files[0],
    });
  }

  private toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
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
