/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Controller,
  Get,
  Query,
  Param,
  Inject,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { SampleApplication } from '../interface/applications/sample.application.interface';
import { SAMPLE_TYPES } from '../interface/types';

@Controller()
export class SampleController {
  constructor(
    @Inject(SAMPLE_TYPES.applications.SampleApplication)
    private readonly sampleApplication: SampleApplication,
  ) {}

  @Get('sample')
  async getSampleData(@Res() res, @Query('key') key: string) {
    try {
      const sample = await this.sampleApplication.getSampleData(key);
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: sample,
      });
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: err,
      });
    }
  }

  @Get('sample/:id')
  async getSampleData2(
    @Res() res,
    @Param('id') id: string,
    @Query('key') key: string,
  ) {
    try {
      const sample = await this.sampleApplication.getSampleData(id + key);
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: sample,
      });
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: err,
      });
    }
  }
}
