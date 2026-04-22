import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ModificaHero } from "./modifica-hero";

describe("ModificaHero", () => {
  let component: ModificaHero;
  let fixture: ComponentFixture<ModificaHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificaHero],
    }).compileComponents();

    fixture = TestBed.createComponent(ModificaHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
