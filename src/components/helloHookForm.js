import React from 'react'
import { useForm, useFieldArray, Controller } from 'react-hook-form'

const Input = (p) => {
  // console.log(p)
  return (
    <input type='text' onChange={p.onChange} />
  )
}

const Select = (props) => {
  return (
    <select onChange={props.onChange} >
      {props.option.map(item => (
        <option key={item.id} value={item.id}>{item.name} 00000</option>
      ))}
    </select>
  )
}

export const HelloHookForm = () => {
  const { register, handleSubmit, control, watch } = useForm({
    defaultValues: {
      name: '',
      users: [{ name: '', age: '' }],
      users2: [{ name: 'TEST', age: 242 }, { name: 'TEST2', age: 232 }],
      select: '',
      check: true,
      testprops:''
    }
  })

  const { fields, append } = useFieldArray({
    control,
    name: "users"
  })

  const { fields: fields2, append: append2 } = useFieldArray({
    control,
    name: 'users2'
  })

  const onSubmit = data => { console.log(data) }
  const watchProps = watch('users2')
  console.log('errors', watchProps)

  const option = [
    { name: 'Number 1', id: 2 },
    { name: 'Number 2', id: 3 }
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <Controller as={Input} name="name" control={control} />
      <Controller as={Select} name="select" control={control} option={option} />

      <input type='checkbox' name='check' ref={register()} />

      {fields.map((user, index) => (
        <div key={index}>
          <input name={`users[${index}].age`} defaultValue={user.age} ref={register()} />
          <input name={`users[${index}].name`} defaultValue={user.name} ref={register()} /> <br />
        </div>
      ))}
      <button onClick={() => append({ name: "test", age: 2 })}>append ะำหะก่ดรก้ด</button>

      {fields2.map((user, index) => (
        <div key={index}>
          <input name={`users2[${index}].age`} defaultValue={user.age} ref={register()} />
          <input name={`users2[${index}].name`} defaultValue={user.name} ref={register()} /> <br />
        </div>
      ))}

      <input name='testprops' ref={register()} />

      <button onClick={() => append2({ name: "uses 2 ", age: 2 })}>append user 22</button>
      <button type='submit'>submit ะำหะ</button>
    </form>
  )
}
