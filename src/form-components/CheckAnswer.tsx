import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group className="theAnswer" controlId="formCheckAnswer">
                <Form.Label>The Answer</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="What is the answer to life, the universe, and everything?"
                    value={answer}
                    onChange={updateAnswer}
                ></Form.Control>
                <Form.Text>{answer === expectedAnswer ? "✔️" : "❌"}</Form.Text>
            </Form.Group>
        </div>
    );
}
