import { act, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { InputNumber } from './InputNumber';

const placeholder = "Введите число";
const min = 5;
const max = 10;
const number = 6;
const lessNumber = 0;
const moreNumber = 15;

describe("ИнпутНамбер", () => {

  test("Введение и изменение числа, минимум и максимум не указаны", () => {

    act(() => render(<InputNumber placeholder={placeholder} />));

    expect(screen.getByText(placeholder)).toHaveClass("placholder");

    const minus = screen.getAllByRole("img")[0];
    const plus = screen.getAllByRole("img")[1];
    const input = minus.nextElementSibling!;

    act(() => fireEvent.change(input, { target: { value: lessNumber } }));

    expect(input).toHaveValue(lessNumber);
    expect(screen.getByText(placeholder)).toHaveClass("placholder overText");

    act(() => fireEvent.change(input, { target: { value: moreNumber } }));

    expect(screen.getByText(placeholder)).toHaveClass("placholder overText");
    expect(input).toHaveValue(moreNumber);

    act(() => fireEvent.click(plus));

    expect(input).toHaveValue(moreNumber + 1);

    act(() => fireEvent.click(minus));
    act(() => fireEvent.click(minus));

    expect(input).toHaveValue(moreNumber - 1);
  });

  test("Введение и изменение числа, минимум и максимум указаны", () => {

    act(() => render(<InputNumber placeholder={placeholder} min={min} max={max} />));

    expect(screen.getByText(placeholder)).toHaveClass("placholder");

    const minus = screen.getAllByRole("img")[0];
    const plus = screen.getAllByRole("img")[1];
    const input = minus.nextElementSibling!;

    act(() => fireEvent.change(input, { target: { value: lessNumber } }));

    expect(screen.getByText(placeholder)).toHaveClass("placholder overText");
    expect(input).toHaveValue(min);

    act(() => fireEvent.change(input, { target: { value: moreNumber } }));

    expect(screen.getByText(placeholder)).toHaveClass("placholder overText");
    expect(input).toHaveValue(max);

    act(() => fireEvent.click(plus));

    expect(input).toHaveValue(max);

    act(() => fireEvent.click(minus));
    act(() => fireEvent.click(minus));

    expect(input).toHaveValue(max - 2);

    act(() => fireEvent.change(input, { target: { value: number } }));

    expect(input).toHaveValue(number);

    act(() => fireEvent.click(minus));
    act(() => fireEvent.click(minus));

    expect(input).toHaveValue(min);
  });
});