import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfilesComponent } from './edit-profiles.component';

describe('EditProfilesComponent', () => {
  let component: EditProfilesComponent;
  let fixture: ComponentFixture<EditProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
