import axios from '@/common/utils/axios'
import endpoints from '../endpoints'

export const getDashboardData = async (): Promise<any> => {
    const response = await axios.get(endpoints.dashboard.index)
    return response.data
}

export const getDashboardMembers = async (): Promise<any> => {
    const response = await axios.get(endpoints.dashboard.member)
    return response.data
}

export const getDashboardTrainers = async (): Promise<any> => {
    const response = await axios.get(endpoints.dashboard.trainer)
    return response.data
}

export const getDashboardWorkouts = async (): Promise<any> => {
    const response = await axios.get(endpoints.dashboard.workout)
    return response.data
}