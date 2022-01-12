import { SampleData } from 'src/sample/domain/sample.domain';

export class CreateDummyApiRequest {
  readonly name: string;

  readonly comment?: string;

  readonly note?: string;

  readonly isValid?: boolean;
  constructor({
    name,
    comment,
    note,
    isValid,
  }: {
    name: string;
    comment?: string;
    note?: string;
    isValid?: boolean;
  }) {
    this.name = name;
    this.comment = comment;
    this.note = note;
    this.isValid = isValid;
  }
}

export const from = (model: SampleData): CreateDummyApiRequest => {
  return new CreateDummyApiRequest({
    name: model.name,
    comment: model.comment,
    isValid: model.isValid,
  });
};
