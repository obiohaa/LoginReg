import {React} from 'react';
import {ErrorMessage, useField} from 'formik';

function Select({label, ...props}){
    const[field, meta] = useField(props);
    //console.log(field, meta, props)
    return (
        <div>
            <select className={`select mt-3 shadow-none ${meta.touched && meta.error && 'is-invalid'}`} aria-label="Default select example" width="100%" {...props} {...field} >
                    <option value="">Select Role</option>
                    <option value="boss">Boss Admin</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
            </select>
           <ErrorMessage name={field.name} component="div" className="pr-5 error"/>
        </div>
    )
}

export default Select;