import { getTimeSubtract } from './getTimeSubtract';

describe('getTimeSubtract', () => {
  describe('現在時刻が 2023年4月5日 午前10時30分 の場合', () => {
    beforeEach(() => {
      vi.useFakeTimers();
      vi.setSystemTime(new Date(2023, 3, 5, 10, 30));
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it('対象時刻が 2023年4月5日 午前10時30分59秒なら、"たった今" を返すこと', () => {
      const target = new Date(2023, 3, 5, 10, 30, 59).toISOString();

      const result = getTimeSubtract(target);

      expect(result).toBe('たった今');
    });

    it('対象時刻が 2023年4月5日 午前10時13分 なら、"17分前" を返すこと', () => {
      const target = new Date(2023, 3, 5, 10, 13).toISOString();

      const result = getTimeSubtract(target);

      expect(result).toBe('17分前');
    });

    it('対象時刻が 2023年4月4日21時32分 なら、"13時間前" を返すこと', () => {
      const target = new Date(2023, 3, 4, 21, 32).toISOString();

      const result = getTimeSubtract(target);

      expect(result).toBe('13時間前');
    });

    it('対象時刻が 2023年3月10日 午前10時30分 なら、"26日前" を返すこと', () => {
      const target = new Date(2023, 2, 10, 10, 30).toISOString();

      const result = getTimeSubtract(target);

      expect(result).toBe('26日前');
    });
  });
});
