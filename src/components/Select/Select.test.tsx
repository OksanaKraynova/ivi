import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Select } from './Select';

const options = [
  "Один", "Два", "Три", "Четыре", "Пять"
];
const placeholder = "Цифра";

describe("Селект", () => {

  test("Один выбор", () => {

    render(
      <Select options={options} placeholder={placeholder} type="one" />);

    const input = screen.getByRole("textbox");
    const div = input.closest("div")!;

    expect(input).toHaveValue("");
    expect(screen.getByText(placeholder)).toHaveClass("placholder");
    expect(screen.getByText(options[0]).closest("div")).not.toBeVisible();

    fireEvent.click(div);

    expect(input).toHaveValue("");
    expect(screen.getByText(options[0]).closest("div")).toBeVisible();

    fireEvent.click(screen.getByText(options[0]));

    expect(input).toHaveValue(options[0]);
    expect(screen.getByText(options[0]).closest("div")).toBeVisible();

    fireEvent.click(screen.getByText(options[1]));

    expect(input).toHaveValue(options[1]);

    fireEvent.click(screen.getByText(options[1]));

    expect(input).toHaveValue(options[1]);

    fireEvent.click(div);
    fireEvent.click(screen.getByText(options[1]));
    expect(screen.getByText(options[0]).closest("div")).not.toBeVisible();
  });

  test("Множественный выбор", () => {

    render(
      <Select options={options} placeholder={placeholder} type="multiple" />);

    const input = screen.getByRole("textbox");
    const div = input.closest("div")!;

    expect(input).toHaveValue("");
    expect(screen.getByText(placeholder)).toHaveClass("placholder");
    expect(screen.getByText(options[0]).closest("div")).not.toBeVisible();

    fireEvent.click(div);

    expect(input).toHaveValue("");
    expect(screen.getByText(options[0]).closest("div")).toBeVisible();

    fireEvent.click(screen.getByText(options[0]));
    fireEvent.click(screen.getByText(options[1]));

    expect(input).toHaveValue([options[0], options[1]].join(", "));
    expect(screen.getByText(options[0]).closest("div")).toBeVisible();

    fireEvent.click(screen.getByText(options[1]));
    fireEvent.click(screen.getByText(options[2]));

    expect(input).toHaveValue([options[0], options[2]].join(", "));

    fireEvent.click(div);
    expect(input).toHaveValue([options[0], options[2]].join(", "));
    expect(screen.getByText(options[0]).closest("div")).not.toBeVisible();
  });
});