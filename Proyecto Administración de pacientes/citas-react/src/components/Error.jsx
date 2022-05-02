const Error = ({children}) => {
  return (
      <div className='bg-red-800 text-white uppercase p-3 text-center font-bold mb-3 rounded-md'>
      <p>{children}</p>
      </div>
)};

export default Error;
