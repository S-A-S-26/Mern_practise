import React from 'react'
interface AlertProps {
    alert: {
        msg: String;
        color: String;
      } | null;
}

export default function Alert({alert}:AlertProps) {
    console.log("alert",alert)
  return (alert &&
    <>
        <div className={`underline bxsh1 p-5 m-5 rounded-md ${alert.color} fixed left-5 right-5 alert-ani top-[60px] z-10 bg-white`}>{alert.msg}</div>
    </>
  )
}
