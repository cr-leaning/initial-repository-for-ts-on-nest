import { SampleData } from 'src/sample/domain/sample.domain';

export class SampleResponse {
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
    name?: string;
    isValid?: boolean;
    comment?: string;
  }) {
    this.id = id;
    this.name = name;
    this.comment = comment;
    this.isValid = isValid;
  }
}

export const fromModel = (model: SampleData): SampleResponse =>
  new SampleResponse({
    id: model.id,
    name: model.name,
    comment: model.comment,
    isValid: model.isValid,
  });

export const fromId = (id: number): SampleResponse =>
  new SampleResponse({
    id: id,
  });
