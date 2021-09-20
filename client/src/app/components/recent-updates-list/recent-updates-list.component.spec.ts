import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentUpdatesListComponent } from './recent-updates-list.component';

describe('RecentUpdatesListComponent', () => {
  let component: RecentUpdatesListComponent;
  let fixture: ComponentFixture<RecentUpdatesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentUpdatesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentUpdatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
