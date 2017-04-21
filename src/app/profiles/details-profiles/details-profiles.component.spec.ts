import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProfilesComponent } from './details-profiles.component';

describe('DetailsProfilesComponent', () => {
  let component: DetailsProfilesComponent;
  let fixture: ComponentFixture<DetailsProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
