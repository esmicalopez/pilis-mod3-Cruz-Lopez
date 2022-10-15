import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './Login.css'

const Login = () => {

  const { setCurrentUser } = useContext(UserContext)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()

  const onSubmit = (data) => {
    localStorage.setItem('currentUser', JSON.stringify(data))
    setCurrentUser(data)
    navigate('/')
  }

  return (
    <div className='sign-in-container'>
      <form className='sign-in-form' onSubmit={handleSubmit(onSubmit)}>
      <span>Ingresar usuario y contraseña</span>
        <input
          className='input-form'
          type="text"
          placeholder='Nombre de usuario'
          {...register('username', {
              required : 'Debe ingresar su nombre de usuario'
            }
          )
        } />
        <p>{errors.username?.message}</p>
        <input
          className='input-form'
          type='password'
          placeholder='Contraseña'
          {...register(
              'password',
              {
                required : 'Debe ingresar su contraseña'
              }
            )
          }
        />
        <p>{errors.password?.message}</p>
         <button className='btn-form' type='submit'>Iniciar Sesión</button>
      </form>
      <Link className='btn-back' to='/'>
        Volver al Inicio
      </Link>
    </div>
  )
}

export default Login