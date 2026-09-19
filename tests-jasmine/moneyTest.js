import {formatCurrency} from "../scripts/utils/money.js";


describe('test suite: formatCurrency', () => {
  it('converts cents to dollars', () => {
    expect(formatCurrency(2090)).toEqual('$20.90');
  });

  it('works with decimal values', () => {
    expect(formatCurrency(2000.5)).toEqual('$20.01');
  });

  it('works with 0', () => {
    expect(formatCurrency(0)).toEqual('$0.00');
  });
});
