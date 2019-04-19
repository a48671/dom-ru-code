import { createSelector } from 'reselect';
import momentum from 'moment';

const telecastDateStart = telecast =>
  momentum(telecast.start.toString()).valueOf();
const telecastDateEnd = telecast =>
  momentum(telecast.start.toString()).valueOf() + telecast.duration * 1000;

export const reduceTelecasts = createSelector(
  state => state.data,
  state => state.currentDate,
  (data, currentDate) =>
    data.reduce((acc, telecast, index, array) => {
      const timeArray = telecast.start.split(' ')[1].split(':');
      const time = `${timeArray[0]}:${timeArray[1]}`;

      if (telecastDateStart(telecast) > currentDate) {
        return [
          ...acc,
          {
            ...telecast,
            type: 'inFuture',
            time: time,
            end: telecastDateEnd(telecast),
          },
        ];
      }
      if (
        telecastDateStart(telecast) <= currentDate &&
        telecastDateEnd(telecast) >= currentDate
      ) {
        return [
          ...acc,
          {
            ...telecast,
            type: 'isNow',
            time: time,
            end: telecastDateEnd(telecast),
          },
        ];
      }
      if (
        telecastDateEnd(telecast) < currentDate &&
        telecastDateEnd(array[index + 1]) >= currentDate
      ) {
        return [
          ...acc,
          {
            ...telecast,
            type: 'isOver',
            time: time,
            end: telecastDateEnd(telecast),
          },
        ];
      }
      if (
        telecastDateEnd(telecast) < currentDate &&
        telecastDateEnd(array[index + 1]) < currentDate &&
        telecastDateEnd(array[index + 2]) >= currentDate
      ) {
        return [
          ...acc,
          {
            ...telecast,
            type: 'isPast',
            time: time,
            end: telecastDateEnd(telecast),
          },
        ];
      } else return [...acc];
    }, [])
);
