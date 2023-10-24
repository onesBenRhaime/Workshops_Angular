import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDbComponent } from './users-db.component';

describe('UsersDbComponent', () => {
  let component: UsersDbComponent;
  let fixture: ComponentFixture<UsersDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersDbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
