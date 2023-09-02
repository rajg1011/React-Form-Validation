import React from "react";
import { useFormik } from "formik";
import formValidation from "../schemas";
const BasicForm = (props) => {
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
    },
    validationSchema: formValidation ,
    onSubmit: (values,action) => {
      console.log(values);
      action.resetForm();
    },
  });
  console.log(formik);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={formik.values.fname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.fname &&<p className="error-text">{formik.errors.fname}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={formik.values.lname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lname && <p className="error-text">{formik.errors.lname}</p>}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email &&<p className="error-text">{formik.errors.email}</p>}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!( formik.dirty && formik.isValid)}>Submit</button>  {/*dirty means you interact with form or not and isValid will be true if there is no error*/}
      </div>
    </form>
  );
};

export default BasicForm;
