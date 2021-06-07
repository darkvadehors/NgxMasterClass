import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterClassPageComponent } from './master-class-page.component';

describe('MasterClassPageComponent', () => {
  let component: MasterClassPageComponent;
  let fixture: ComponentFixture<MasterClassPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterClassPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterClassPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
