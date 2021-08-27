import {React} from 'react';
import {ErrorMessage, useField} from 'formik';

function Forms({label, ...props}) {
    const[field, meta] = useField(props);
    // console.log(field, meta, props)
    return (
        <div>
             <input className={`select mt-3 shadow-none ${meta.touched && meta.error && 'is-invalid'}`} autoComplete="off" {...field} {...props} label={label} placeholder={label}/>
             <ErrorMessage component="div" name={field.name} className="error" />
        </div>
    )
}

export default Forms;
