import React, {useState} from "react";
import Box from "./Box";
import "./BoxesContainer.css";
import { choice, randInt } from "./random";

const defaultColors = [
    "Aqua", "Black", "BlanchedAlmond", "Blue", "Chocolate", "DodgerBlue",
    "Lavender", "LawnGreen", "Peru", "Plum", "SpringGreen", "SteelBlue", "Tan",
    "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Yellow", "YellowGreen",
];

function BoxesContainer({ allColors = defaultColors, numBoxes = 16})