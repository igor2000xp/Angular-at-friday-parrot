import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsCardComponent } from './tools-card.component';

describe('ToolsCardComponent', () => {
  let component: ToolsCardComponent;
  let fixture: ComponentFixture<ToolsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
