export class DummyApiResponse {
  id: number;

  name: string;

  comment?: string;

  note?: string;

  isValid: boolean;
  constructor({
    id,
    name,
    isValid,
    comment,
    note,
  }: {
    id: number;
    name: string;
    isValid: boolean;
    comment?: string;
    note?: string;
  }) {
    this.id = id;
    this.name = name;
    this.comment = comment;
    this.isValid = isValid;
    this.note = note;
  }
}
