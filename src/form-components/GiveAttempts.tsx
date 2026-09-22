import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [remainingAttempts, setRemainingAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    function updateRequestedAttempts(
        event: React.ChangeEvent<HTMLInputElement>,
    ): void {
        setRequestedAttempts(event.target.value);
    }

    function increaseRemainingAttempts(): void {
        const amount: number | undefined = parseInt(requestedAttempts);
        if (!isNaN(amount)) {
            setRemainingAttempts(remainingAttempts + amount);
        }
    }

    function decreaseRemainingAttempts(): void {
        setRemainingAttempts(remainingAttempts - 1);
    }
    return (
        <div>
            <div>Attempts: {remainingAttempts}</div>
            <div>
                <Form.Group className="attemptBox" controlId="formAttemptBox">
                    <Form.Label>Requested Attempts</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder=""
                        value={requestedAttempts}
                        onChange={updateRequestedAttempts}
                    ></Form.Control>
                </Form.Group>
            </div>
            <div>
                <Button
                    onClick={decreaseRemainingAttempts}
                    disabled={remainingAttempts === 0}
                >
                    use
                </Button>
                <Button onClick={increaseRemainingAttempts}>gain</Button>
            </div>
        </div>
    );
}
