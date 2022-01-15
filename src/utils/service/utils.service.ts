/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { NodeEnv } from 'src/constants/nodeenv';
import { EnvGeneralService } from 'src/env/service/env.general.service';

@Injectable()
export class UtilsService {
  constructor(private readonly env: EnvGeneralService) {}

  get isProduction() {
    return this.env.NodeEnv === NodeEnv.PROD;
  }
}
