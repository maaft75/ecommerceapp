import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadministratorComponent } from './superadministrator.component';

describe('SuperadministratorComponent', () => {
  let component: SuperadministratorComponent;
  let fixture: ComponentFixture<SuperadministratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperadministratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperadministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
