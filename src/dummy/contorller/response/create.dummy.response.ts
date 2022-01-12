export class CreateDummyResponse {
  readonly id: number;
  constructor({ id }: { id: number }) {
    this.id = id;
  }
}
