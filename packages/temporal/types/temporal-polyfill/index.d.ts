// @ts-ignore
import { Temporal as T } from '@js-temporal/polyfill';

declare global {
  namespace Temporal {
    export const Calendar: typeof T.Calendar;
    export const Duration: typeof T.Duration;
    export const Instant: typeof T.Instant;
    export const PlainDate: typeof T.PlainDate;
    export const PlainDateTime: typeof T.PlainDateTime;
    export const PlainMonthDay: typeof T.PlainMonthDay;
    export const PlainTime: typeof T.PlainTime;
    export const PlainYearMonth: typeof T.PlainYearMonth;
    export const TimeZone: typeof T.TimeZone;
    export const ZonedDateTime: typeof T.ZonedDateTime;
    export type Calendar = T.Calendar;
    export type Duration = T.Duration;
    export type Instant = T.Instant;
    export type PlainDate = T.PlainDate;
    export type PlainDateTime = T.PlainDateTime;
    export type PlainMonthDay = T.PlainMonthDay;
    export type PlainTime = T.PlainTime;
    export type PlainYearMonth = T.PlainYearMonth;
    export type TimeZone = T.TimeZone;
    export type ZonedDateTime = T.ZonedDateTime;
    export namespace Now {
      export const instant: typeof T.Now.instant;
      export const plainDate: typeof T.Now.plainDate;
      export const plainDateISO: typeof T.Now.plainDateISO;
      export const plainDateTime: typeof T.Now.plainDateTime;
      export const plainDateTimeISO: typeof T.Now.plainDateTimeISO;
      export const plainTimeISO: typeof T.Now.plainTimeISO;
      export const timeZone: typeof T.Now.timeZone;
      export const zonedDateTime: typeof T.Now.zonedDateTime;
      export const zonedDateTimeISO: typeof T.Now.zonedDateTimeISO;
    }
  }
}
