import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMessage } from "./redux/messagesSlice"

export default function Greeting() {
  const dispatch = useDispatch()
  const message = useSelector((state) => state.messages)

  useEffect(() => {
    dispatch(getMessage())
  }, [])

  console.log(message)

  return (
    <div>
      <p>AAAAAA</p>
    </div>
  )
}