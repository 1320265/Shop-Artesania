import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";

export default function Persona() {

    useEffect(() => {
        if (window.componentHandler) {
            window.componentHandler.upgradeDom();
        }
    });

    const PersonaSchema = Yup.object().shape({
        nombres: Yup.string()
        .min(3, "El nombre debe tener minimo 3 caracteres")
        .max(40, "El nombre solo puede tener maximo 40 caracteres")
        .required("Es obligatorio el nombre"),
        a_paterno: Yup.string()
        .min(3, "El apellido paterno debe tener minimo 3 caractares")
        .required("Es obligatorio el apellido paterno"),
        a_materno: Yup.string()
        .min(3, "El apellido materno debe tener minimo 3 caractares")
        .required("Es obligatorio el apellido materno"),
        edad: Yup.number()
        .min(1, "la edad debe ser minimo de 1 año")
        .required("Es obligatorio la edad"),
    });

    return (
        <>
        <div>persona</div>
        <Formik initialValues={{
            nombres: "",
            a_paterno: "",
            a_materno: "",
            edad: "",
        }} validationSchema={PersonaSchema} 
        onSubmit={( values, { resetForm }) => { console.log("Datos enviados", values); resetForm(); }}>
            <Form style={{ display: "flex", flexDirection: "column" }}>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <label className="mdl-textfield__label">Nombres</label>
                    <Field name="nombres" type="text" className="mdl-textfield__input"/>
                    <ErrorMessage name="nombres" component="span" className="mdl-textfield__error" style={{ visibility: "initial"}}/>
                </div>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <label className="mdl-textfield__label">Apellido Paterno</label>
                    <Field name="a_paterno" type="text" className="mdl-textfield__input"/>
                    <ErrorMessage name="a_paterno" component="span" className="mdl-textfield__error" style={{ visibility: "initial"}} />
                </div>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <label className="mdl-textfield__label">Apellido Materno</label>
                    <Field name="a_materno" type="text" className="mdl-textfield__input"/>
                    <ErrorMessage name="a_materno" component="span" className="mdl-textfield__error" style={{ visibility: "initial"}} />
                </div>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <label className="mdl-textfield__label">Edad</label>
                    <Field name="edad" type="number" className="mdl-textfield__input"/>
                    <ErrorMessage name="edad" component="span" className="mdl-textfield__error" style={{ visibility: "initial"}} />
                </div>
                <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Guardar</button>
            </Form>
        </Formik>
        </>
    );
}