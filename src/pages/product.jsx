// src/pages/producto.jsx
import React, { useState } from "react"; // Necesitamos useState
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ProductoSchema = Yup.object().shape({
    nombre: Yup.string()
        .min(3, "Mínimo 3 caracteres")
        .max(100, "Máximo 100 caracteres")
        .required("El Nombre del Producto es obligatorio"),
    precio: Yup.number()
        .min(0.01, "El precio debe ser mayor a 0")
        .required("El Precio es obligatorio"),
    stock: Yup.number()
        .min(0, "El stock no puede ser negativo")
        .max(9999, "Máximo 9999 unidades")
        .required("El Stock es obligatorio"),
});

export default function Producto() {
    // 1. Estado para almacenar la lista de productos
    const [productos, setProductos] = useState([]);

    const handleSubmit = (values, { resetForm }) => {
        console.log("Datos de Producto enviados:", values);

        // 2. Agregar el nuevo producto al array de productos
        setProductos(prevProductos => [
            ...prevProductos,
            {
                ...values,
                id: Date.now() // Añadir un ID único para la clave de lista
            }
        ]);

        alert(`Producto registrado: ${values.nombre}`);
        resetForm();
    };

    return (
        <div style={{ maxWidth: '600px', margin: 'auto' }}>
            <div style={{ padding: '20px', border: '1px solid #17a2b8', borderRadius: '5px' }}>
                <h3>Registro de Producto (Formik)</h3>
                <Formik
                    initialValues={{ nombre: "", precio: "", stock: "" }}
                    validationSchema={ProductoSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched }) => (
                        <Form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>

                            <div>
                                <label>Nombre:</label>
                                <Field name="nombre" type="text" style={{ borderColor: errors.nombre && touched.nombre ? 'red' : '' }} />
                                <ErrorMessage name="nombre" component="span" style={{ color: "red", fontSize: "0.9em", display: "block" }} />
                            </div>

                            <div>
                                <label>Precio:</label>
                                <Field name="precio" type="number" step="0.01" style={{ borderColor: errors.precio && touched.precio ? 'red' : '' }} />
                                <ErrorMessage name="precio" component="span" style={{ color: "red", fontSize: "0.9em", display: "block" }} />
                            </div>

                            <div>
                                <label>Stock:</label>
                                <Field name="stock" type="number" style={{ borderColor: errors.stock && touched.stock ? 'red' : '' }} />
                                <ErrorMessage name="stock" component="span" style={{ color: "red", fontSize: "0.9em", display: "block" }} />
                            </div>

                            <button type="submit" style={{ padding: '10px', marginTop: '10px', backgroundColor: '#17a2b8', color: 'white' }}>
                                Guardar Producto
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>

            {/* --- Sección de Lista de Productos --- */}
            <div style={{ marginTop: '30px', padding: '20px', borderTop: '2px solid #ccc' }}>
                <h2>Lista de Productos Registrados ({productos.length})</h2>
                {productos.length === 0 ? (
                    <p>No hay productos registrados aún.</p>
                ) : (
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {/* 3. Mapear y mostrar los productos */}
                        {productos.map(p => (
                            <li
                                key={p.id}
                                style={{
                                    padding: '10px',
                                    margin: '8px 0',
                                    border: '1px solid #eee',
                                    backgroundColor: '#f9f9f9',
                                    borderRadius: '4px',
                                    textAlign: 'left'
                                }}
                            >
                                <strong>{p.nombre}</strong> (Precio: ${p.precio}, Stock: {p.stock})
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}