import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'jason',
    email: 'jasonsb@gmial.com'
  })
  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { value, name } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }
  //TODO usefect

  useEffect(() => {
    // console.log('useEffect called');
  }, [])


  useEffect(() => {
    // console.log('formState change');
  }, [formState])

  


  
  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input type="text"
        className='form-control'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChange}
      />

      <input type="email"
        className='form-control mt-2'
        placeholder='email@gmail.com'
        name='email'
        value={email}
        onChange={onInputChange}
      />
      {
        (username==='jason') && <Message/>
      }
    </>
  )
}
