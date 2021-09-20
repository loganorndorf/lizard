import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentItemListComponent } from './current-item-list.component';

describe('CurrentItemListComponent', () => {
  let component: CurrentItemListComponent;
  let fixture: ComponentFixture<CurrentItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
