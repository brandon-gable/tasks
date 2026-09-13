import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2);

    const rollLeftDie = () => {
        setLeftDie(d6());
    };

    const rollRightDie = () => {
        setRightDie(d6());
    };

    return (
        <div>
            <div>
                Left: <span data-testid="left-die">{leftDie}</span>
            </div>
            <div>
                Right: <span data-testid="right-die">{rightDie}</span>
            </div>
            <div>
                <Button onClick={rollLeftDie}>Roll Left</Button>
                <Button onClick={rollRightDie}>Roll Right</Button>

                {leftDie === 1 && rightDie === 1 && <div>Lose</div>}

                {leftDie === rightDie && leftDie !== 1 && <div>Win</div>}
            </div>
        </div>
    );
}
