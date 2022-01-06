import { Length, IsNotEmpty } from 'class-validator';

export class CreateDummyRequest {
  @IsNotEmpty()
  @Length(2, 20)
  readonly name: string;

  @Length(0, 30, {
    message: 'Comment is too long',
  })
  readonly comment?: string;

  readonly note?: string;

  readonly isValid?: boolean;
}
