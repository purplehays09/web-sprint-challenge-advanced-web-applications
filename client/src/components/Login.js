import React, {useState} from "react";
import axios from 'axios'

const initialForm = {
  username:'',
  password:''
}

const Login = (props) => {
  const [formValues,setFormValues] = useState(initialForm)
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleChanges = e => {
    const {name,value} = e.target

    setFormValues({
      ...formValues,
      [name]:value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    axios.post('http://localhost:5000/api/login/',formValues)
    .then(res => {
      console.log(res.data)
      window.localStorage.setItem('token',res.data.payload)
      props.history.push('/protected')
    })
    .catch(err => console.log(err))
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          value={formValues.username}
          placeholder='username'
          onChange={handleChanges}
        />

        <input
          type='password'
          name='password'
          value={formValues.password}
          placeholder='password'
          onChange={handleChanges}
        />

        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
