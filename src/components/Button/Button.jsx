

const Button = ({label, callback, color}) => {
  return (
    <>
        <button style={{backgroundColor:color}} className="w-36 rounded-1g p-2 border-1 border-slate-800 text-black " onClick={()=>callback()}>{label}</button>
    </>
  )
}

export default Button