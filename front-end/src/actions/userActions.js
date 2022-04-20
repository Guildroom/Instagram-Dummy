import {
  USER_DETAILS_FAIL,
  USER_DETAILS_SUCCESS
} from '../constants/userConstants'
import axios from 'axios'

const detailsUser = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/home' )
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: USER_DETAILS_FAIL, payload: error.message })
  }
}

export {
  detailsUser
}
