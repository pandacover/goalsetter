import { useState } from "react"
import { useDispatch } from "react-redux"
import { createGoal } from '../features/goals/goalSlice'
import formStyles from "../styles/Form.module.css"

const GoalForm = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(createGoal({ text }));
        setText('');
    }
    return (
        <section className={`${formStyles["container"]}`}>
            <form onSubmit={onSubmit} className={`${formStyles["form"]}`}>
                <input type="text"
                    name='text' id='text'
                    value={text}
                    placeholder="Example goal..."
                    onChange={(e) => setText(e.target.value)} />
                <button
                    className="btn"
                    type='submit'
                >
                    Add Goal
                </button>
            </form>
        </section>
    )
}

export default GoalForm