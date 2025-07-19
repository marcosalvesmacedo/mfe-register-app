import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakbarComponent } from './snakbar.component';
import { MAT_SNACK_BAR_DATA, MatSnackBarModule } from '@angular/material/snack-bar';

describe('SnakbarComponent', () => {
  let component: SnakbarComponent;
  let fixture: ComponentFixture<SnakbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule
      ],
      declarations: [
        SnakbarComponent
      ],
      providers: [
          {
            provide: MAT_SNACK_BAR_DATA,
            useValue: {}
          },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnakbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
