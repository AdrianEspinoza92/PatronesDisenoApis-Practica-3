# Práctica 03 - Stack MEAN

Sistema CRUD de empleados desarrollado con MongoDB, Express, Angular, Node.js y TypeScript para la asignatura Patrones de Diseño de APIs.

**Autor:** Carlos Adrian Espinoza Alvarez

La implementación resuelve los cuatro retos de la práctica: Repository, DTO con Zod, Response Wrapper, manejo global de errores, estado reactivo e inmutable, y componentes Smart/Dumb.

## Arquitectura

```text
backend/src/
├── controllers/       # HTTP, sin imports de Mongoose
├── domain/            # Contratos del dominio
├── dtos/              # Validación perimetral con Zod
├── middlewares/       # Validación y errores globales
├── models/            # Esquema Mongoose
├── repositories/      # Interfaz y adaptador de persistencia
└── routes/            # Contratos REST

frontend/src/app/
├── components/        # Dumb: formulario y tabla
├── pages/             # Smart: orquestación y async pipe
├── models/            # Tipos compartidos del cliente
└── services/          # HttpClient y estado con BehaviorSubject
```

## Requisitos

- Node.js LTS 20 o superior (se recomienda una versión par/LTS)
- npm
- MongoDB local o MongoDB Atlas

## Ejecución

### 1. Backend

```bash
cd backend
npm install
npm run dev
```

De forma predeterminada utiliza `mongodb://127.0.0.1:27017/usuarios_db`. Para Atlas o una dirección distinta:

```bash
MONGO_URI="mongodb+srv://USUARIO:CLAVE@HOST/usuarios_db" npm run dev
```

La API queda disponible en `http://localhost:3000`.

### 2. Frontend

En otra terminal:

```bash
cd frontend
npm install
npm start
```

Abrir `http://localhost:4200`.

## Contratos REST

| Método | Ruta | Operación |
| --- | --- | --- |
| GET | `/api/v1/employees?page=1&limit=20` | Listar con paginación |
| POST | `/api/v1/employees` | Crear |
| GET | `/api/v1/employees/:id` | Consultar por ID |
| PUT | `/api/v1/employees/:id` | Reemplazar datos |
| PATCH | `/api/v1/employees/:id` | Actualizar parcialmente |
| DELETE | `/api/v1/employees/:id` | Eliminar |

Todas las respuestas usan el contrato `{ success, message, data, errors? }`. El archivo `api.rest` contiene solicitudes listas para REST Client de VS Code.

## Verificación

```bash
cd backend && npm run check && npm run build
cd ../frontend && npm run build
```

## Pruebas de Postman

La colección `postman/Practica03-Retos-1-y-2.postman_collection.json` contiene el flujo completo de pruebas para los retos 1 y 2. Incluye creación, listado paginado, consulta por ID, actualización parcial, validación de body, validación de parámetros, manejo de recursos inexistentes y eliminación del registro de prueba.

La colección fue verificada con Newman: 10 solicitudes, 20 aserciones aprobadas y 0 fallos.

## Documentación

- [Informe de la práctica](docs/Practica03_Stack_MEAN_Carlos_Adrian_Espinoza.pdf)
- [Evidencia de funcionamiento](docs/evidencias/funcionamiento-frontend.png)
- [Colección de Postman](postman/Practica03-Retos-1-y-2.postman_collection.json)
