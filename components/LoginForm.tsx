"use client"
import { useForm } from "react-hook-form"

// 把数据提交到后端
const authenticate = async (formData: any) => {
  console.log(formData);
  try {
    
    const response = await fetch("/api/create", {
        method: "POST", // or 'PUT'
        body: JSON.stringify(formData),
      });
      // console.log(response);
      
  } catch (error) {
    console.log('has error',error);
  }
}

const LoginForm = () => {

    const {
        register,
        handleSubmit,
      } = useForm({
        defaultValues: {
          username: "",
          age: '',
          sex: ''
        }
      })
    
  return (
    <div className='max-w-xl h-screen  mx-auto flex flex-col justify-center'>
      <form className='  flex flex-col p-10 gap-y-4 ring-2 ring-blue-400' onSubmit={handleSubmit(authenticate)} >
        <h1 className=' text-center text-xl font-semibold'>登录界面</h1>
        <div className='flex flex-col'>
          <label htmlFor="username">姓名</label>
          <input className='ring-2 ring-blue-200 p-2 focus:outline-blue-500' type="text" id="username"
            {
            ...register("username")
            }
            placeholder='111' autoComplete="off" />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="age">年龄</label>
          <input id="age" className='ring-2 ring-blue-200 p-2 focus:outline-blue-500' type="text"
            {
            ...register("age")
            }
            placeholder='111' autoComplete="off" />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="sex">性别</label>
          <input id="sex" className='ring-2 ring-blue-200 p-2 focus:outline-blue-500' type="text"
            {
            ...register("sex")
            }
            placeholder='111' autoComplete="off" />
        </div>
        <button type='submit' className='p-2 bg-blue-500 text-white' >提交</button>
      </form>
    </div>
  )
}

export default LoginForm