import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FirstInteractionComponent} from './first-interaction.component';

describe('FirstIntractionComponent', () => {
  let component: FirstInteractionComponent;
  let fixture: ComponentFixture<FirstInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FirstInteractionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
