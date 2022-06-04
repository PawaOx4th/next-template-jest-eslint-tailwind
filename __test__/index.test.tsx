import { render, screen } from "@testing-library/react"
import Home from "../pages"

describe("Renders Home", () => {
  test("should Home", () => {
    render(<Home />)
    expect(screen.getByText("Next.js!")).toBeInTheDocument()
  })
})
