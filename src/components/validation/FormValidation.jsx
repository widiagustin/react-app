import React, { useEffect, useState } from 'react'

const FormValidation = () => {
  const initialValues = { name: "", username: "", email: "", password: "" }
  const [form, setForm] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value
    }
    setForm(nextFormState)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(form))
    setIsSubmit(true)
  }



  const validate = (values) => {
    const errors = {}
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    // name
    if (!values.name) {
      errors.name = "Nama wajib diisi"
    }

    // username
    if (!values.username) {
      errors.username = "Username wajib diisi"
    }

    // email
    if (!values.email) {
      errors.email = "Email wajib diisi"
    } else if (!regex.test(values.email)) {
      errors.email = "Email tidak valid"
    }

    // password
    if (!values.password) {
      errors.password = "Password wajib diisi"
    } else if (values.password.length < 4) {
      errors.password = "Password tidak boleh kurang dari 4"
    } else if (values.password.length > 8) {
      errors.password = "Password tidak boleh lebih dari 8"
    }
    return errors
  }

  return (
    <div>
      <div className="w-full h-screen bg-purple-800">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className='w-2/5 mx-auto bg-yellow-100 p-2 rounded-md text-green-600 text-center relative top-10'>Login Berhasil</div>
        ) : (
          ""
        )}
        <div className="mx-auto bg-white p-5 shadow-md rounded-lg absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-2/5">
          <div>
            <h1 className="text-center font-bold text-2xl py-5">Registration Form</h1>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col gap-3'>
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    name="name"
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <p className='text-sm text-red-600'>{formErrors.name}</p>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Username"
                    value={form.username}
                    name="username"
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <p className='text-sm text-red-600'>{formErrors.username}</p>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Email Address"
                    value={form.email}
                    name="email"
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <p className='text-sm text-red-600'>{formErrors.email}</p>
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    name="password"
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <p className='text-sm text-red-600'>{formErrors.password}</p>
                </div>
                <div>
                  <button
                    className="bg-blue-500 p-2 w-full rounded-sm text-white flex mx-auto align-center justify-center mt-2"
                  >Create Account</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormValidation