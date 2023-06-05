import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import InputText from './InputFile';

const placeholder = "Введите ответ";
const minSize = 6;
const smallResponse = "Ответ";
const error = `Минимум ${minSize} символов, вы ввели`;
const bigResponse = "Написанный ответ";

describe("ИнпутТекст", () => {

  test("Изменение подписи, минимальный размер не указан", () => {

    render(
      <InputText placeholder={placeholder} />);

    expect(screen.getByText(placeholder)).toHaveClass("placholder");

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: smallResponse } });

    expect(screen.getByText(placeholder)).toHaveClass("placholder overText");
    expect(input).toHaveValue(smallResponse);

    fireEvent.change(input, { target: { value: bigResponse } });

    expect(screen.getByText(placeholder)).toHaveClass("placholder overText");
    expect(input).toHaveValue(bigResponse);
  });

  test(`Изменение подписи и сообщения об ошибке, минимальный размер ${minSize}`, () => {

    render(
      <InputText placeholder={placeholder} minSize={minSize} />);

    expect(screen.getByText(placeholder)).toHaveClass("placholder");
    expect(screen.queryByText(`${error} 0`)).toBeNull();

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: smallResponse } });

    expect(screen.getByText(placeholder)).toHaveClass("orange");
    expect(screen.getByText(`${error} ${smallResponse.length}`)).toHaveClass("error");
    expect(input).toHaveValue(smallResponse);

    fireEvent.change(input, { target: { value: bigResponse } });

    expect(input).toHaveValue(bigResponse);
    expect(screen.getByDisplayValue(bigResponse)).toBeVisible();
    expect(screen.queryByText(`${error} 9`)).toBeNull();
  });
});