import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { edadValidator } from './validator'
import FormTable from './table'

function FormHook() {

    const [data, setData] = useState([]);

    const { register, formState: { errors }, watch, handleSubmit, } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        const datos = [data];
        setData(datos)

    }
    const includePhone = watch('includePhone')
    return (

        <>

            <div className='card-custom'>
                <div className='card' >
                    <div className='card-body'>
                        <h4>FormHook Example</h4>
                        <form className='form-group' onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label>Country</label>
                                <select className='form-control' {...register('country')}>
                                    <option value="co">Colombia</option>
                                    <option value="es">Spain</option>
                                    <option value="br">Brazil</option>
                                </select>

                            </div>
                            <div>
                                <label>Direction</label>
                                <input className='form-control' type="text" {...register('direction', {
                                    required: true,
                                    maxLength: 30
                                })} />
                                {errors.name?.type === 'required' && <p className='text-danger'>Direction required</p>}
                                {errors.name?.type === 'maxLength' && <p className='text-danger'>30 characters maximum</p>}
                            </div>
                            <div>
                                <label>Name</label>
                                <input className='form-control' type="text" {...register('name', {
                                    required: true,
                                    maxLength: 10
                                })} />
                                {errors.name?.type === 'required' && <p className='text-danger'>Name required</p>}
                                {errors.name?.type === 'maxLength' && <p className='text-danger'>10 characters maximum</p>}
                            </div>

                            <div>
                                <label>Email</label>
                                <input className='form-control' type="text" {...register('email', {
                                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                                })} />
                                {errors.email?.type === 'pattern' && <p className='text-danger'>Email not valid</p>}
                            </div>
                            <div>
                                <label>Age</label>
                                <input className='form-control' type="text"  {...register('age', {
                                    validate: edadValidator
                                })} />
                                {errors.age && <p className='text-danger'>Age must be between 18 and 45</p>}
                            </div>

                            <div>
                                <label>Include phone?</label>
                                <input type="checkbox" {...register('includePhone')} />

                            </div>
                            {
                                includePhone && (
                                    <div>
                                        <label>Phone</label>
                                        <input className='form-control' type="text" {...register('phone')} />
                                    </div>
                                )

                            }
                            <div className='py-3'>
                                <button type='submit' className='btn btn-success'>Submit</button>
                            </div>


                        </form>
                    </div>
                </div>


            </div>
            <div className='card-custom'>
                <div className='card' >
                    <FormTable data={data}></FormTable>
                </div>
            </div>
        </>



    )
}

export default FormHook