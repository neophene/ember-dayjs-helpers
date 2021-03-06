import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';

export default helper(function dayjsSubtract(params, { amount, unit, format }) {
  return dayjs().subtract(amount, unit).format(format);
});
