import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { CommentParent } from './Comment';
import { ICommentParents } from '@/types/ICommentParents';

const comment: ICommentParents = {
  id: 123,
  userName: "userName",
  date: "20.05.2023",
  comment: "Комментарий",
  parentComment: null
};

const coloIcon = "orange";
const error = "Минимум 10 символов, вы ввели";
const smallResponse = "Ответ";
const bigResponse = "Написанный ответ";

describe("Комментарий с ответом", () => {

  test("Раскрытие и скрытие ответа", () => {

    render(
      <CommentParent
        comment={comment}
        type="fullLength"
      />);

    const div = screen.getByText(comment.userName).closest("div")!;
    const avatar = div.children[0];
    const button = div.children[1];

    expect(avatar).toHaveClass(coloIcon);
    expect(screen.getByText(comment.comment)).toBeInTheDocument();
    expect(screen.queryByAltText("ответ")).toBeInTheDocument();
    expect(screen.queryByAltText("отмена")).toBeNull();
    expect(screen.queryByText(`${error} 0`)).toBeNull();

    fireEvent.click(button);

    expect(screen.queryByAltText("отмена")).toBeInTheDocument();
    expect(screen.queryByAltText("ответ")).toBeNull();
    expect(screen.queryByText(`${error} 0`)).toBeInTheDocument();
    expect(screen.queryByText(`${error} 0`)).not.toBeVisible();

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: smallResponse } });

    expect(input).toHaveValue(smallResponse);
    expect(screen.queryByText(`${error} ${smallResponse.length}`)).toBeVisible();

    fireEvent.change(input, { target: { value: bigResponse } });

    expect(input).toHaveValue(bigResponse);
    expect(screen.getByDisplayValue(bigResponse)).toBeVisible();
    expect(screen.queryByText(`${error} ${bigResponse.length}`)).not.toBeVisible();

    fireEvent.click(button);

    expect(input).toHaveValue(bigResponse);
    expect(screen.getByDisplayValue(bigResponse)).not.toBeVisible();

    fireEvent.click(button);

    expect(input).toHaveValue(bigResponse);
    expect(screen.getByDisplayValue(bigResponse)).toBeVisible();

  });
});