import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import Select from './Select';

const options = [
  "Один", "Два", "Три", "Четыре", "Пять"
];
const placeholder = "Цифра";

describe("Селект", () => {

  test("Один выбор", () => {

    act(() => render(
      <Select options={options} placeholder={placeholder} type="one" />
    ));

    const input = screen.getByRole("textbox");
    const div = input.closest("div")!.closest("div")!;
    const button = input.closest("div")!.getElementsByClassName("button")[0];

    expect(input).toHaveValue("");
    expect(screen.getByText(placeholder)).toHaveClass("placeholder");
    expect(screen.getByText(options[0]).closest("div")).not.toBeVisible();

    act(() => userEvent.click(button));

    expect(input).toHaveValue("");
    expect(screen.getByText(options[0]).closest("div")).toBeVisible();

    act(() => userEvent.click(screen.getByText(options[0])));

    expect(input).toHaveValue(options[0]);
    expect(screen.getByText(options[0]).closest("div")).toBeVisible();

    act(() => userEvent.click(screen.getByText(options[1])));

    expect(input).toHaveValue(options[1]);

    act(() => userEvent.click(screen.getByText(options[1])));
    act(() => fireEvent.blur(div));

    expect(input).toHaveValue(options[1]);
    expect(screen.getByText(options[0]).closest("div")).not.toBeVisible();

    act(() => userEvent.click(button));
    expect(input).toHaveValue(options[1]);
    expect(screen.getByText(options[0]).closest("div")).toBeVisible();

    act(() => userEvent.click(button));
    expect(screen.getByText(options[0]).closest("div")).not.toBeVisible();
  });

  test("Множественный выбор", () => {

    act(() => render(
      <Select options={options} placeholder={placeholder} type="multiple" />
    ));

    const input = screen.getByRole("textbox");
    const div = input.closest("div")!.closest("div")!;
    const button = input.closest("div")!.getElementsByClassName("button")[0];

    expect(input).toHaveValue("");
    expect(screen.getByText(placeholder)).toHaveClass("placeholder");
    expect(screen.getByText(options[0]).closest("div")).not.toBeVisible();

    act(() => userEvent.click(button));

    expect(input).toHaveValue("");
    expect(screen.getByText(options[0]).closest("div")).toBeVisible();

    act(() => userEvent.click(screen.getByText(options[0])));
    act(() => userEvent.click(screen.getByText(options[1])));

    expect(input).toHaveValue([options[0], options[1]].join(", "));
    expect(screen.getByText(options[0]).closest("div")).toBeVisible();

    act(() => userEvent.click(screen.getByText(options[1])));
    act(() => userEvent.click(screen.getByText(options[2])));

    expect(input).toHaveValue([options[0], options[2]].join(", "));

    act(() => userEvent.click(button));

    expect(input).toHaveValue([options[0], options[2]].join(", "));
    expect(screen.getByText(options[0]).closest("div")).not.toBeVisible();
  });
});