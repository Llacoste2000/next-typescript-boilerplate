import React, { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@redux/reducers";
import { useAppDispatch } from "@redux/store";
import { decrease, increase, increaseBy } from "@redux/actions";

export default function Counter() {
    const dispatch = useAppDispatch();
    const count = useSelector((state: RootState) => state.counter.count);
    const [countInput, setCountInput] = useState<number>(0);

    return (
        <div>
            <div>
                <div className="row">
                    <div className="center-xs">
                        <h2>Counter</h2>
                    </div>
                </div>
                <button type="button" onClick={() => dispatch(increase())}>
                    +
                </button>
                <span>{count}</span>
                <button type="button" onClick={() => dispatch(decrease())}>
                    -
                </button>
                <input
                    id="addcount"
                    type="number"
                    placeholder="Add to count"
                    value={countInput}
                    onChange={(e) => setCountInput(parseInt(e.target.value))}
                />
                <button
                    onClick={() =>
                        dispatch(
                            increaseBy({
                                addCount: countInput,
                            }),
                        )
                    }
                >
                    Submit
                </button>
            </div>
        </div>
    );
}
