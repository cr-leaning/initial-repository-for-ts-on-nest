export class SampleResponse implements SampleResponse {
  readonly id: number;

  readonly name: string;

  readonly comment?: string;

  readonly isValid: boolean;
  constructor({
    id,
    name,
    isValid,
    comment,
  }: {
    id: number;
    name: string;
    isValid: boolean;
    comment?: string;
  }) {
    this.id = id;
    this.name = name;
    this.comment = comment;
    this.isValid = isValid;
  }
}
