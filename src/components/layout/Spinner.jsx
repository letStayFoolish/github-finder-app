import spinner from './assets/spinner.gif'
const Spinner = () => {
  return (
    <div className='w-100 mt-20'>
      <img src={spinner} alt="Loading..." className="text-center mx-auto" width={180}/>
    </div>
  )
}

export default Spinner
