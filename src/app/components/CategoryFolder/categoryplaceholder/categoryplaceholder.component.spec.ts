import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryplaceholderComponent } from './categoryplaceholder.component';

describe('CategoryplaceholderComponent', () => {
  let component: CategoryplaceholderComponent;
  let fixture: ComponentFixture<CategoryplaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryplaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryplaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
