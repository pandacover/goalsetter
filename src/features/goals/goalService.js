import axios from "axios";

const API_URL = '/api/goals/'

const createGoal = async (goalData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.post(API_URL, goalData, config);

    return response.data;
}

const getGoals = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.get(API_URL, config);

    return response.data;
}

const deleteGoal = async (goalID, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.delete(API_URL + goalID, config);

    return response.data;
}

const updateGoal = async (goalData, token) => {
    const goalObject = {
        _id: goalData._id,
        text: goalData.details
    }

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.put(API_URL + goalObject._id, goalObject, config);

    return response.data;
}

const goalService = {
    createGoal,
    getGoals,
    deleteGoal,
    updateGoal
}

export default goalService;