import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { updateGoal } from "../features/goals/goalSlice"
import Spinner from "./Spinner"


const EditForm = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user } = useSelector((state) => state.auth);
    const { _id, text } = props.payload
    const [details, setDetails] = useState(text)
    const { isLoading, isError, message } = useSelector((state) => state.goals)

    const dispatchChanges = (e) => {
        e.preventDefault()
        if (isError) {
            console.error(message)
        }
        if (!user) {
            navigate("/login")
        }
        console.log(details)
        dispatch(updateGoal({ _id, details }))
        navigate("/")
        window.location.reload()
    }

    if (isLoading) {
        return <Spinner />
    }
    return (
        <form className="form" onSubmit={dispatchChanges}>
            <div className="form-group">
                <input type="text" placeholder="Edit..." value={details} onChange={(e) => setDetails(e.target.value)} />
            </div>
            <div className="form-group">
                <button className="btn btn-block">Update</button>
            </div>
        </form>
    )
}

export default EditForm