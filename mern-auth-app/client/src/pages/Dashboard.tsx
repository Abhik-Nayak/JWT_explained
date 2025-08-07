import React from 'react'
import { useAppDispatch } from '../store/hooks';
import { logoutUser } from '../store/authSlice';

type Props = {}

const Dashboard = (props: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      Dashboard
      <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={() => dispatch(logoutUser())}>
        Log Out
      </button>
    </div>
  )
}

export default Dashboard