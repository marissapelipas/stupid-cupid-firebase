import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomProfilesComponent } from './random-profiles.component';

describe('RandomProfilesComponent', () => {
  let component: RandomProfilesComponent;
  let fixture: ComponentFixture<RandomProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
