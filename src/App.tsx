import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript (Brandon Gable)
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload Hello World.
            </p>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "red",
                }}
            >
                <Container>
                    <Row>
                        <Col>
                            <h1>Hi</h1>
                        </Col>
                        <Col>
                            <Button
                                onClick={() => {
                                    console.log("Hello World!");
                                }}
                            >
                                Log Hello World
                            </Button>
                        </Col>
                        <Col>
                            <img src="./crow.jpeg" alt="Crow" />
                        </Col>
                        <Col>
                            <ol>
                                <li>Tubas</li>
                                <li>Baritones</li>
                                <li>Trombones</li>
                            </ol>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
