import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const types: QuestionType[] = [
        "short_answer_question",
        "multiple_choice_question",
    ];
    const [type, setType] = useState<QuestionType>(types[0]);

    function flipType(): void {
        setType(
            type === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    }

    return (
        <div>
            <Button onClick={flipType}>Change Type</Button>
            {type === "multiple_choice_question" && <div>Multiple Choice</div>}
            {type === "short_answer_question" && <div>Short Answer</div>}
        </div>
    );
}
