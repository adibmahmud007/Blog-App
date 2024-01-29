

import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import RefForm from './components/FerForm/RefForm'
// import HookForm from './components/HookForm/HookForm'
// import ReuseabelForm from './components/ReuseableForm/ReuseabelForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefullForm from './components/StatefullForm/StatefullForm'

function App() {

  // const handleSignupSubmit=data=>{
  //   console.log('signup data',data);
  // }
  // const handleUserUpdate=data=>{
  //   console.log('update form',data);
  // }

  

  return (
    <>
      <h2 className='text-center font-bold text-4xl'>Hello world</h2>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm>
       */}
       {/* <StatefullForm></StatefullForm> */}
       {/* <RefForm></RefForm> */}
       {/* <HookForm></HookForm> */}
       {/* <ReuseabelForm 
       formTitle={'Sign Up'} 
       handleSubmit={handleSignupSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up here</p>
        </div>
       </ReuseabelForm>

       <ReuseabelForm 
       formTitle={'User Update'} 
       submitbtntitle='Update' 
       handleSubmit={handleUserUpdate}>
        <div>
          <h2>Update Profile</h2>
          <p>Please Update Profile</p>
        </div>
       </ReuseabelForm> */}
    </>
  )
}

export default App
