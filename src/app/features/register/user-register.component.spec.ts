import { TestBed } from '@angular/core/testing';
import { UserRegisterComponent } from './user-register.component';
import { RegisterFacade } from './facades/register.facade';

describe('UserRegisterComponent', () => {
  let component: UserRegisterComponent;
  const registerFacadeStub = jasmine.createSpyObj('RegisterFacade', ['onRegisterSubmit']);

  beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [
            UserRegisterComponent
          ],
          providers: [
            UserRegisterComponent,
            { provide: RegisterFacade, useValue: registerFacadeStub }
          ]
        }).compileComponents();
        component = TestBed.inject(UserRegisterComponent);
    
      });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
