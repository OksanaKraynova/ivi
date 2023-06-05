import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import DataBlock from './DataBlock';

let items = [
  "Один", "Два", "Три", "Четыре", "Пять"
];

describe("Датаблок", () => {

  test("Удаление блоков с текстом из датаблока", () => {

    render(
      <DataBlock
        items={items}
        deliteItem={(index) => items = items.filter((item, currentIndex) => currentIndex !== index)}
      />
    );

    for (let i = items.length - 1; i >= 0; i--) {
      let item = items[i];
      expect(screen.getByText(item)).toBeInTheDocument();
      fireEvent.click(screen.getByText(item).closest("div")!.children[1]);
      expect(screen.getByText(item)).toBeInTheDocument();
      expect(items.includes(item)).toBe(false);
    }

    expect(items.length).toBe(0);
  });
});