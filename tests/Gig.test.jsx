import { screen, render } from "@testing-library/react";

import Gig from "../src/components/Gig";

describe("Gig", () => {
it("Should render all of the gig details", () => {
    render(<Gig name="Slayer" band-image="https://i.scdn.co/image/8c81130db7b5f933412c4906c30327817f1e1b43" description="It's Slayer enough said" dateTime="Sat 12th - 4pm" location="Wembley Arena"/>);
    expect(screen.getByRole("heading")).toHaveTextContent("Slayer");
    expect(screen.getByRole("img", {name: "image of band"})).toBeVisible()
    expect(screen.getByText("It's Slayer enough said")).toBeVisible();
    expect(screen.getByText("Sat 12th - 4pm")).toBeVisible();
    expect(screen.getByText("Wembley Arena")).toBeVisible();
    expect(screen.getByRole("button")).toBeVisible()
    
});
});