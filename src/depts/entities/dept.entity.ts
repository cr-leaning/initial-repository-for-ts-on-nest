import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Dept {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
