/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class DateUtilsService {
  timezonedLocale = (): string => {
    return this.toISOStringWithTimezone(new Date());
    // return new Date().toLocaleString('ja-JP', {
    //   timeZone: 'Asia/Tokyo',
    // });
  };

  toISOStringWithTimezone = (date: Date): string => {
    const pad = function (str: string): string {
      return ('0' + str).slice(-2);
    };
    const year = date.getFullYear().toString();
    const month = pad((date.getMonth() + 1).toString());
    const day = pad(date.getDate().toString());
    const hour = pad(date.getHours().toString());
    const min = pad(date.getMinutes().toString());
    const sec = pad(date.getSeconds().toString());
    const millisec = ('00' + date.getMilliseconds().toString()).slice(-3);
    const tz = -date.getTimezoneOffset();
    const sign = tz >= 0 ? '+' : '-';
    const tzHour = pad((tz / 60).toString());
    const tzMin = pad((tz % 60).toString());
    return `${year}-${month}-${day}T${hour}:${min}:${sec}.${millisec}${sign}${tzHour}:${tzMin}`;
  };
}
