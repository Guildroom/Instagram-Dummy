import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  detailsUser
} from '../actions/userActions'
import { UserCircleIcon } from '@heroicons/react/outline'

const Profile = () => {
  // const userDetails = useSelector((state) => state.productList)
  // const { user } = userDetails
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(detailsUser())
  //   return () => {
  //     //
  //   }
  // })
  return (
        <div>
         <div className='flex flex-col items-center'>
                <UserCircleIcon className='h-20'/>
                <p className='my-4 font-bold'>@diadia</p>
                <div className='flex'>
                  <div className='flex flex-col items-center border-r-2'>
                    <p className='pr-4 font-semibold'>Following</p>
                    <p></p>
                  </div>
                  <div className='flex flex-col items-center border-r-2'>
                    <p className='px-4 font-semibold'>Post</p>
                    <p></p>
                  </div>
                  <div className='flex flex-col items-center'>
                    <p className='pl-4 font-semibold'>Follower</p>
                    <p></p>
                  </div>
                </div>
                <div></div>
                <button></button>
            </div>
        </div>
  )
}

export default Profile
