import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ContentDescripton from './ContentDescripton';

const tagline = "Убийца ли садовник?";
const descriptionFirstParagraph = "Очень интересный сериал!";
const descriptionSecondParagraph = "Неожиданная развязка!";
const description = descriptionFirstParagraph + "\n" + descriptionSecondParagraph;
const type = "сериал";
const buttonMore = "Детали о фильме";
const buttonLess = "Свернуть детали";

describe("Страница фильма, блок «описания»", () => {

  test("Раскрытие и скрытие блока", () => {

    render(
      <ContentDescripton
        tagline={tagline}
        description={description}
        textClass={''}
        borderedClass={''}
      />);

    const button = screen.getByText(buttonMore);

    expect(screen.getByText(descriptionFirstParagraph)).toBeVisible();
    expect(screen.getByText(descriptionSecondParagraph)).not.toBeVisible();
    expect(screen.queryByText(buttonMore)).toBeInTheDocument();
    expect(screen.queryByText(buttonLess)).toBeNull();

    fireEvent.click(button);

    expect(screen.getByText(descriptionFirstParagraph)).toBeVisible();
    expect(screen.getByText(descriptionSecondParagraph)).toBeVisible();
    expect(screen.queryByText(buttonMore)).toBeNull();
    expect(screen.queryByText(buttonLess)).toBeInTheDocument();


    fireEvent.click(button);

    expect(screen.getByText(descriptionFirstParagraph)).toBeVisible();
    expect(screen.getByText(descriptionSecondParagraph)).not.toBeVisible();
    expect(screen.queryByText(buttonMore)).toBeInTheDocument();
    expect(screen.queryByText(buttonLess)).toBeNull();

  });
});