import { useDispatch } from "react-redux"
import { deleteGoal } from '../features/goals/goalSlice';
import goalStyles from "../styles/Goal.module.css"
import { useNavigate } from "react-router-dom";

const GoalItem = (props) => {
    const { goal, payload } = props
    const { dispatchEditGoals } = payload

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const editGoal = (e) => {
        e.preventDefault()
        dispatchEditGoals({
            _id: goal._id,
            text: goal.text
        })
        navigate(`/edit/${goal._id}`)
    }

    return (
        <div className={`${goalStyles.container}`}>
            <section>
                <span>
                    {new Date(goal.createdAt).toLocaleString('en-US')}
                </span>
            </section>
            <section>
                <span>{goal.text}</span>
                <div>
                    <button className="btn" to="edit" onClick={editGoal}>
                        Edit
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch(deleteGoal(goal._id))}>
                        Delete
                    </button>
                </div>
            </section>
        </div>
    )
}

export default GoalItem