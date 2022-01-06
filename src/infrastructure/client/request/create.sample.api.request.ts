import { sample } from 'rxjs';
import { SampleData } from 'src/sample/domain/sample.domain';

export class CreateSampleApiRequest {
  readonly name: string;

  readonly comment?: string;

  readonly isValid?: boolean;
  constructor({
    name,
    comment,
    isValid,
  }: {
    name: string;
    comment?: string;
    isValid?: boolean;
  }) {
    this.name = name;
    this.comment = comment;
    this.isValid = isValid;
  }
}

export const from = (model: SampleData): CreateSampleApiRequest => {
  return new CreateSampleApiRequest({
    name: model.name,
    comment: model.comment,
    isValid: model.isValid,
  });
};
