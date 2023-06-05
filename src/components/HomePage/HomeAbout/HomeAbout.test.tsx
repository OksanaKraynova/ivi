import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import HomeAbout from './HomeAbout';

const visibleText = "Онлайн-кинотеатр Иви: фильмы в хорошем качестве всегда приносят настоящее удовольствие";
const hiddenText = "просмотр онлайн контента хорошего разрешения без регистрации и смс.";
const buttonMore = "Развернуть";
const buttonLess = "Свернуть";
const hiddenClass = "aboutСollapsed";
const visibleClass = "about";

describe("Главная страница, блок «об Иви»", () => {

  test("Раскрытие и скрытие блока", () => {

    render(<HomeAbout />);

    const button = screen.getByText(buttonMore);

    expect(screen.getByText(visibleText)).toBeInTheDocument();
    expect(screen.getByText(visibleText)).toBeVisible();
    expect(screen.getByText(hiddenText)).toBeInTheDocument();
    expect(screen.getByText(hiddenText)).toBeVisible();
    expect(screen.getByText(hiddenText).closest("div")).toHaveClass(hiddenClass);
    expect(screen.getByText(buttonMore)).toBeInTheDocument();
    expect(screen.queryByText(buttonLess)).toBeNull();

    fireEvent.click(button);

    expect(screen.getByText(visibleText)).toBeVisible();
    expect(screen.getByText(hiddenText)).toBeVisible();
    expect(screen.getByText(hiddenText).closest("div")).toHaveClass(visibleClass);
    expect(screen.queryByText(buttonMore)).toBeNull();
    expect(screen.getByText(buttonLess)).toBeInTheDocument();

    fireEvent.click(button);

    expect(screen.getByText(visibleText)).toBeVisible();
    expect(screen.getByText(hiddenText)).toBeVisible();
    expect(screen.getByText(hiddenText).closest("div")).toHaveClass(hiddenClass);
    expect(screen.getByText(buttonMore)).toBeInTheDocument();
    expect(screen.queryByText(buttonLess)).toBeNull();

  });
});