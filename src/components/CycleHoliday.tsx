import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    enum Holiday {
        Hanukkah = "🕎",
        Birthday = "🎂",
        Halloween = "🎃",
        NewYears = "🎆",
        Thanksgiving = "🦃",
    }

    const [holiday, setHoliday] = useState<Holiday>(Holiday.Halloween);

    const ALPHABET_TRANSITIONS: Record<Holiday, Holiday> = {
        [Holiday.Halloween]: Holiday.NewYears,
        [Holiday.NewYears]: Holiday.Thanksgiving,
        [Holiday.Thanksgiving]: Holiday.Birthday,
        [Holiday.Birthday]: Holiday.Hanukkah,
        [Holiday.Hanukkah]: Holiday.Halloween,
    };

    const YEAR_TRANSITIONS: Record<Holiday, Holiday> = {
        [Holiday.Halloween]: Holiday.Thanksgiving,
        [Holiday.NewYears]: Holiday.Birthday,
        [Holiday.Thanksgiving]: Holiday.Hanukkah,
        [Holiday.Birthday]: Holiday.Halloween,
        [Holiday.Hanukkah]: Holiday.NewYears,
    };

    function advanceAlphabet(): void {
        const newHoliday: Holiday = ALPHABET_TRANSITIONS[holiday];
        setHoliday(newHoliday);
    }

    function advanceYear(): void {
        const newHoliday: Holiday = YEAR_TRANSITIONS[holiday];
        setHoliday(newHoliday);
    }

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <div>
                <Button onClick={advanceAlphabet}>Advance by Alphabet</Button>
                <Button onClick={advanceYear}>Advance by Year</Button>
            </div>
        </div>
    );
}
