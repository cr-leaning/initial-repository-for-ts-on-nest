import { SampleApiResponse } from 'src/infrastructure/client/response/sample.response';

export class SampleData {
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

export const from = (apiResponse: SampleApiResponse): SampleData => {
  return new SampleData({
    id: apiResponse.id,
    name: apiResponse.name,
    comment: apiResponse.comment,
    isValid: apiResponse.isValid,
  });
};
