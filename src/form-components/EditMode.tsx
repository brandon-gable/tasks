import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);

    function updateEditMode(): void {
        setEditMode(!editMode);
    }

    function updateUserName(event: React.ChangeEvent<HTMLInputElement>): void {
        setUserName(event.target.value);
    }

    function updateStudent(): void {
        setStudent(!isStudent);
    }

    return (
        <div>
            <Form.Group>
                <Form.Check
                    type="switch"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={updateEditMode}
                ></Form.Check>

                {editMode ?
                    <div>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={userName}
                            onChange={updateUserName}
                        ></Form.Control>
                        <Form.Check
                            id="student-box"
                            type="checkbox"
                            label="Student"
                            checked={isStudent}
                            onChange={updateStudent}
                        ></Form.Check>
                    </div>
                :   <div>
                        {userName} is {isStudent ? "" : "not "}a student
                    </div>
                }
            </Form.Group>
        </div>
    );
}
