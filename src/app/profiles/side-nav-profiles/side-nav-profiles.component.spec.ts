import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavProfilesComponent } from './side-nav-profiles.component';

describe('SideNavProfilesComponent', () => {
  let component: SideNavProfilesComponent;
  let fixture: ComponentFixture<SideNavProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
