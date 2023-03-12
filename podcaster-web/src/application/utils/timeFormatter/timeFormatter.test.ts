import { timeFormatter } from './timeFormatter';

describe('Timer formatter', () => {
  it('should response 1 min and 2 seconds on 62000ms', () => {
    const { minutes, restSeconds } = timeFormatter(62000);

    expect(minutes).toBe(1);
    expect(restSeconds).toBe('02');
  });
});
