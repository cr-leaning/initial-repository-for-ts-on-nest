import { CreateDummyApiResponse } from '../../infrastructure/client/response/create.dummy.response';
import { DummyApiResponse } from '../../infrastructure/client/response/dummy.response';
import { CreateSampleRequest } from '../controller/request/create.sample.request';

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
    id?: number;
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

export const fromApiResponse = (apiResponse: DummyApiResponse): SampleData =>
  new SampleData({
    id: apiResponse.id,
    name: apiResponse.name,
    comment: apiResponse.comment,
    isValid: apiResponse.isValid,
  });

export const fromCreateApiResponse = (
  apiResponse: CreateDummyApiResponse,
): SampleData =>
  new SampleData({
    id: apiResponse.id,
  });

export const fromRequest = (request: CreateSampleRequest): SampleData =>
  new SampleData({
    name: request.name,
    comment: request.comment,
    isValid: request.isValid,
  });
