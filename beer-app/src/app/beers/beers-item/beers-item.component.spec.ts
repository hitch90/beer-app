import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersItemComponent } from './beers-item.component';

describe('BeersItemComponent', () => {
  let component: BeersItemComponent;
  let fixture: ComponentFixture<BeersItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeersItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
