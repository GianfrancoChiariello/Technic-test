import {
    useFormik
} from 'formik'
import {
    TextField,
    CircularProgress
} from '@mui/material'
import {
    registerSchema
} from '../../utils/yups'
import useFetch from '../../hooks/useFetch'

const inputs = [
    {
        id: 'nombre',
        type: 'text',
        placeholder: 'Nombre',
        variant: 'outlined',
        width: '11vw',
        focused: false,
    },
    {
        id: 'apellido',
        type: 'text',
        placeholder: 'Apellido',
        variant: 'outlined',
        width: '11vw',
        focused: false,
    },
    {
        id: 'dni',
        type: 'number',
        placeholder: 'DNI',
        variant: 'outlined',
        width: '8vw',
        focused: false,
    },
    {
        id: 'since',
        type: 'date',
        placeholder: 'Fecha de nacimiento',
        variant: 'outlined',
        width: '14vw',
        focused: false,
    },
    {
        id: 'email',
        type: 'email',
        placeholder: 'Email',
        variant: 'outlined',
        width: '14vw',
        focused: false,
    },
    {
        id: 'phone',
        type: 'number',
        placeholder: 'Telefono',
        variant: 'outlined',
        width: '8vw',
        focused: false,
        inputProps: {
            inputMode: 'numeric',
            pattern: '[0-9]*',
        }
    }
]


const Form = () => {

    const formik = useFormik({
        initialValues: {
            nombre: '',
            apellido: '',
            dni: '',
            since: '',
            email: '',
            phone: '',
        },

        validationSchema: registerSchema,

        onSubmit: async () => {
            await fetchData()
            formik.resetForm()
        }
    })

    const {fetchData, response, error, isLoading } = useFetch('http://localhost:9000/api/', {
        method: 'POST',
        body: JSON.stringify(formik.values),
        notify: true
    })

    return (
        <form className='suscribe_form'>
            <div className='suscribe_form_div'>
                {
                    inputs.map((input) => (
                        <TextField
                            key={input.id}
                            id={input.id}
                            type={input.type}
                            placeholder={input.placeholder}
                            variant={input.variant}
                            focused={input.focused}
                            border={input.border}
                            width={input.width}
                            onChange={formik.handleChange}
                            value={formik.values[input.id]}
                            error={formik.touched[input.id] && Boolean(formik.errors[input.id])}
                            helperText={formik.touched[input.id] && formik.errors[input.id]}
                            sx={{
                                '& .MuiOutlinedInput-root:hover fieldset': {
                                    borderColor: 'white',
                                },
                            }}

                            inputProps={{
                                ...input.inputProps,
                                style: {
                                    color: 'white',
                                    backgroundColor: 'black',
                                    borderRadius: '5px',
                                    width: input.width,
                                    height: '3.5vh',
                                    border: '1px solid white',
                            }}}
                        />
                    )
                    )
                }

                <button className='suscribe_form_buttom' onClick={formik.handleSubmit}>
                    {
                        !error && isLoading ? <CircularProgress color='inherit' size={20} /> : 'Enviar'
                    }
                </button>
            </div>
        </form>
    )
}

export default Form