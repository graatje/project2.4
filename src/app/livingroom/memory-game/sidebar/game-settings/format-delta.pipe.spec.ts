import {FormatTimePipe} from './format-delta.pipe';

describe('FormatDeltaPipe', () => {
  it('create an instance', () => {
    const pipe = new FormatTimePipe();
    expect(pipe).toBeTruthy();
  });
});
