import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "Minimum 6 chars").required("Password is required"),
      });

      export default function FormikForm() {
        return (
            <div className="max-w-md mx-auto mt-10 p-6 border rounded-md shadow-md bg-white">
                  <h2 className="text-2xl font-bold mb-4 text-center">Register with Formik</h2>

                        <Formik
                                initialValues={{ username: "", email: "", password: "" }}
                                        validationSchema={validationSchema}
                                                onSubmit={(values) => {
                                                          console.log("Formik Data:", values);
                                                                    alert("User registered successfully (Formik)!");
                                                                            }}
                                                                                  >
                                                                                          {({ isSubmitting }) => (
                                                                                                    <Form className="space-y-4">
                                                                                                                <div>
                                                                                                                              <Field name="username" placeholder="Username" className="w-full border p-2 rounded" />
                                                                                                                                            <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
                                                                                                                                                        </div>
                                                                                                                                                                    <div>
                                                                                                                                                                                  <Field name="email" type="email" placeholder="Email" className="w-full border p-2 rounded" />
                                                                                                                                                                                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                        <div>
                                                                                                                                                                                                                                      <Field name="password" type="password" placeholder="Password" className="w-full border p-2 rounded" />
                                                                                                                                                                                                                                                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                            <button
                                                                                                                                                                                                                                                                                          type="submit"
                                                                                                                                                                                                                                                                                                        disabled={isSubmitting}
                                                                                                                                                                                                                                                                                                                      className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                                                                                                                                                                                                                                                                                                                                  >
                                                                                                                                                                                                                                                                                                                                                Register
                                                                                                                                                                                                                                                                                                                                                            </button>
                                                                                                                                                                                                                                                                                                                                                                      </Form>
                                                                                                                                                                                                                                                                                                                                                                              )}
                                                                                                                                                                                                                                                                                                                                                                                    </Formik>
                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                                                                                                          