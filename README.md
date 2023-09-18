# ABM Mascotas
Desafio Técnico Evoltis.

Proyecto de frontend base proporcionado: [Link](https://bitbucket.org/evoltis/technical-tests-frontend-ssr/src/master/)

## Desafio
Se solicita armar un proyecto de Angular 13+ con un BackEnd .NET 6+, éste deberá contar como mínimo con un ABM completo integrando lo básico de redux (NGRX).

### Requisitos FrontEnd
- PrimeNG
- Formularios Reactivos
- Tabla con Filtros
- Redux

Opcional:
- Se valorara altamente el uso de ngrx-form 

### Requisitos BackEnd
- Patrón Repository
- Patrón Service
- AutoMapper
- Entity Framework Core (Base de Datos: MySQL)
- Inyecciones de Dependencias

Opcional:
- Se valorará altamente el uso de Fluent Validation y Fluent API

## Instrucciones de Uso
### Ejecución Manual 🖥️
Podrá ejecutarse el proyecto ejecutando las soluciones API y UI con las configuraciones por defecto y exponiendo una base de datos MySQL en el puerto 2930.
La misma deberá poseer como base los siguientes requisitos:
- Server expuesto en **localhost:2930**
- Una base de datos llamada **mascotasdb**
- Usuario llamado **mascotas_app** con permisos totales sobre **mascotasdb**
- Contraseña Usuario **default@1234**

En la ejecución inicial del backend se ejecutaran las migraciones necesarias para inicializar la base de datos y cargar datos iniciales de prueba.

### Docker 🐳
Desde una consola de comandos podrá inicializarse el procto ejecutando desde la carpeta raiz el comando:

``` docker compose up -d ```

El mismo utilizará el archivo de entorno **base.env** 

Éste puede modificarse o indicarse uno nuevo en el archivo docker-compose.yaml para usar uno diferente basandose en el archivo base.env

#### Referencia del archivo base.env
```bash 
API_PORT = 81 #Puerto donde exponer BackEnd
UI_PORT = 80 # Puerto donde exponer FrontEnd
```



## Mejoras no implementadas
- Autenticación y autorizacion de usuarios
- Administración de mascotas por usuario
  
### Licencias
- Angular
- .NET Core
- Docker
- PrimeNG
- PrimeIcons