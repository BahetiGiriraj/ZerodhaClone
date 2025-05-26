import React from "react";
import {render , screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../landing_page/home/Hero";

//Test Suite
describe('Hero Component' , () => {
    test("Render Hero Image" , () => {
        render(<Hero/>);
        const heroImage = screen.getAllByAltText("heroimg");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src' , 'media/images/homeHero.png');
    });
})

