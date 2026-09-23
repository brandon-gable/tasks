import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors: string[] = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "gray",
    ];

    const [selectedColor, setColor] = useState<string>("red");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>): void {
        setColor(event.target.value);
    }

    return (
        <div>
            <Form.Group>
                {colors.map((color: string) => (
                    <Form.Check
                        inline
                        key={color}
                        type="radio"
                        label={color}
                        value={color}
                        name="colors"
                        checked={selectedColor === color}
                        onChange={updateColor}
                    ></Form.Check>
                ))}
            </Form.Group>
            <div
                data-testid="colored-box"
                style={{ backgroundColor: selectedColor }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
