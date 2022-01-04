import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDeptInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
