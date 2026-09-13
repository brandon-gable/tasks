import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);

    const reduceAttempts = (): void => {
        setAttempts(attempts - 1);
    };

    const increaseAttempts = (): void => {
        setAttempts(attempts + 1);
    };

    const flipProgress = (): void => {
        setProgress(!inProgress);
    };

    return (
        <div>
            <div>Attempts: {attempts}</div>
            <div>
                <Button
                    onClick={() => {
                        flipProgress();
                        reduceAttempts();
                    }}
                    disabled={inProgress || attempts === 0}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={flipProgress} disabled={!inProgress}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button onClick={increaseAttempts} disabled={inProgress}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
