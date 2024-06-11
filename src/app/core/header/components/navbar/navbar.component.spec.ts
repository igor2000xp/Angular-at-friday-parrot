import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatToolbarModule, MatButtonModule, NavbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a logo', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.navbar__logo').textContent).toContain('Logo');
  });

  it('should have navigation links', () => {
    const compiled = fixture.nativeElement;
    const links = compiled.querySelectorAll('.navbar__links a');
    expect(links.length).toBe(4);
  });
});
