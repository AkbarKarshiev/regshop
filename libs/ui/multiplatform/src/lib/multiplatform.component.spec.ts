import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplatformComponent } from './multiplatform.component';

describe('MultiplatformComponent', () => {
  let component: MultiplatformComponent;
  let fixture: ComponentFixture<MultiplatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
