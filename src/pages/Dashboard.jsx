import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { GoalForm, GoalItem, Spinner } from "../components"
import { getGoals, reset } from "../features/goals/goalSlice";
import dashStyles from "../styles/Dashboard.module.css"

const Dashboard = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth);
    const { goals, isLoading, isError, message } = useSelector((state) => state.goals)

    useEffect(() => {
        if (isError) {
            console.error(message)
        }

        if (!user) {
            navigate('/login');
        }

        dispatch(getGoals())

        return () => {
            dispatch(reset());
        }
    }, [user, navigate])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className={`${dashStyles.container}`}>
            <p className={`${dashStyles.title}`}>
                Welcome <span>{user && user.name}</span>
            </p>

            <GoalForm />

            <section className={`${dashStyles["goal_container"]}`}>
                {goals.length > 0 ?
                    (<div>
                        {goals.map((goal) => (
                            <GoalItem
                                key={goal._id}
                                goal={goal}
                                payload={props.payload}
                            />
                        ))}
                    </div>)
                    :
                    (<h3>No goals found</h3>)
                }
            </section>
        </div>
    )
}

export default Dashboard