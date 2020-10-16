import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage,{fetchColors} from "./BubblePage";

jest.mock("fetchColors", () => () => [{
  color: "aliceblue",
  code: {
    hex: "#f0f8ff"
  },
  id: 1
},
{
  color: "limegreen",
  code: {
    hex: "#99ddbc"
  },
  id: 2
}])

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  // Arrange
  const { getAllByText, rerender } = render(<BubblePage />);

  const list = getAllByText(/x/i)

  //Act


  //Assert
  expect(list).toHaveLength(2)
});
