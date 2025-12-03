// src/pages/contactos.jsx
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactosSchema = Yup.object().shape({
    nombre: Yup.string()
        .min(3, "Mínimo 3 caracteres")
        .max(50, "Máximo 50 caracteres")
        .required("El Nombre es obligatorio"),
    telefono: Yup.string()
        .min(7, "Mínimo 7 dígitos")
        .max(15, "Máximo 15 dígitos")
        .required("El Teléfono es obligatorio"),
    mensaje: Yup.string()
        .min(10, "Mínimo 10 caracteres")
        .max(300, "Máximo 300 caracteres")
        .required("El Mensaje es obligatorio"),
});

export default function Contactos() {

    const handleSubmit = (values, { resetForm }) => {
        console.log("Datos de Contacto enviados:", values);
        alert(`Contacto enviado: ${values.nombre}`);
        resetForm();
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h3>Formulario de Contacto (Formik)</h3>
            <Formik
                initialValues={{
                    nombre: "",
                    telefono: "",
                    mensaje: "",
                }}
                validationSchema={ContactosSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>

                        {/* Campo Nombre */}
                        <div>
                            <label>Nombre:</label>
                            <Field name="nombre" type="text" style={{ borderColor: errors.nombre && touched.nombre ? 'red' : '' }} />
                            <ErrorMessage name="nombre" component="span" style={{ color: "red", fontSize: "0.9em", display: "block" }}/>
                        </div>

                        {/* Campo Teléfono */}
                        <div>
                            <label>Teléfono:</label>
                            <Field name="telefono" type="text" style={{ borderColor: errors.telefono && touched.telefono ? 'red' : '' }} />
                            <ErrorMessage name="telefono" component="span" style={{ color: "red", fontSize: "0.9em", display: "block" }} />
                        </div>

                        {/* Campo Mensaje */}
                        <div>
                            <label>Mensaje:</label>
                            <Field name="mensaje" as="textarea" rows="4" style={{ borderColor: errors.mensaje && touched.mensaje ? 'red' : '' }} />
                            <ErrorMessage name="mensaje" component="span" style={{ color: "red", fontSize: "0.9em", display: "block" }} />
                        </div>

                        <button type="submit" style={{ padding: '10px', marginTop: '10px' }}>
                            Guardar Contacto
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}