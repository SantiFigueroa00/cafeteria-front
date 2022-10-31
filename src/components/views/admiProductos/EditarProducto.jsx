import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import context from "react-bootstrap/esm/AccordionContext";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { obtenerProductoAPI } from "../../helpers/queries";

const EditarProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();

  const {id} = useParams();

  
  useEffect(() => {
    obtenerProductoAPI(id).then((respuesta)=>{
      if(respuesta.status ===200){
        console.log(respuesta);
        setValue('nombreProducto',respuesta.dato.nombreProducto)
        setValue('precio',respuesta.dato.precio)
        setValue('imagen',respuesta.dato.imagen)
        setValue('categoria',respuesta.dato.categoria)
      }
    },
    (reason)=>{
      console.log(reason)
      Swal.fire(
        'Ocurrio un error',
        'Intente nuevamente en unos minutos',
        'error'
        )
      });
    }, [])
    
    const onSubmit = (datos) => {
      console.log(datos)
    };
    
    return (
      <section className="container mainSection">
      <h1 className="display-4 mt-5">Editar producto</h1>
      <hr />
      {/* <Form onSubmit={handleSubmit}> */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Nombre producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            {...register("nombreProducto", {
              required: "El nombre de prodcuto es necesario",
              minLength: {
                value: 2,
                message: "La cantidad minima es 2 caracteres",
              },
              maxLength: {
                value: 50,
                message: "La cantidad maxima es 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control type="number" placeholder="Ej: 50" 
          {...register('precio',{
              required:'El precio es obligatorio',
              min:{
                value: 1,
                message: 'El precio minimo es de $1'
              },
              max:{
                value: 1000,
                message: 'El precio maximo es de $1000'
              }
          }
          )}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register('imagen',{
              required: 'La URL es obligatoria',
              pattern:{
                value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                message: 'Ingrese una URL valida'
              }
            })}
          />
          <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select {
            ...register('categoria',{
              required: 'Debe seleccionar una categoria'
            })
          }>
            <option value="">Seleccione una opcion</option>
            <option value="bebida-caliente">Bebida caliente</option>
            <option value="bebida-fria">Bebida fria</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">{errors.categoria?.message}</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default EditarProducto;
