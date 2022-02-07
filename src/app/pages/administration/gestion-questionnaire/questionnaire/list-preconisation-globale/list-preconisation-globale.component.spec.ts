import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPreconisationGlobaleComponent } from './list-preconisation-globale.component';

describe('ListPreconisationGlobaleComponent', () => {
  let component: ListPreconisationGlobaleComponent;
  let fixture: ComponentFixture<ListPreconisationGlobaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPreconisationGlobaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPreconisationGlobaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
