import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategorieQuestionComponent } from './list-categorie-question.component';

describe('ListCategorieQuestionComponent', () => {
  let component: ListCategorieQuestionComponent;
  let fixture: ComponentFixture<ListCategorieQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCategorieQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCategorieQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
