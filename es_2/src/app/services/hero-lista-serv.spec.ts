import { TestBed } from "@angular/core/testing";

import { HeroListaServ } from "./hero-lista-serv";

describe("HeroListaServ", () => {
  let service: HeroListaServ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroListaServ);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
