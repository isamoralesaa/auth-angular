# Ejemplo de una aplicacion con autenticación y autorización basada en Token JWT con Angular 11, HttpInterceptor y Router.

características de la aplicacion:
- componentes para el registro e inicio de sesión con validación de formulario.
- componente Home es público para todos los visitantes.
- componente Profile muestra los datos del usuario almacenado en session.
- componentes Board-User, Board-Moderator, Board-Admin se mostrarán en función del rol.

* La página de acceso, contiene los campos para el correo y el clave, con un botón de acceso para enviar la información. La información es validada mediante una API.

* Si la información es inválida, se muestra un mensaje de error.

* De ser válida la información, se guarda el token e información del usuario (nombre de usuario, correo electrónico, role) y se envia a la página de perfil.

* De acuerdo al rol del usuario (administrador, moderador, usuario), la barra de navegación cambia sus elementos automáticamente.

la aplicacion utiliza HttpClient ( $httpservicio) para realizar solicitudes de autenticación.
Cada solicitud HTTP por $httpservicio será inspeccionada y transformada antes de ser enviada al back-end.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


#LEEEME
ng new Auth
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? CSS

También necesitamos generar algunos componentes y servicios:

ng g s _services/auth
ng g s _services/token-storage
ng g s _services/user

ng g c login
ng g c register
ng g c home
ng g c profile
ng g c board-admin
ng g c board-moderator
ng g c board-user
