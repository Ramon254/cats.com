# cats.com
A simple single-page React application used to demonstrate basic Software Engineering concepts

# ¿Cómo trabajar con el repositorio?
Los pasos siguientes son el proceso común que suelo seguir en mi flujo de trabajo. Son una **sugerencia**, y el flujo de otras personas puede ser diferente. 

1. Clonar el repositorio - `git clone <repo_url>`
2. Cambiar a la rama **master** (o main) del repositorio - `git checkout master`
3. Crear una nueva rama para tu _feature_ - `git checkout -b feature-branch`
4. Hacer todos los cambios en el código.
5. Revisar el estado de tus cambios - `git status`
6. Cada que completes una unidad de trabajo relevante, añadir los cambios al _staging area_ - `git add .` (Pista: "." añade todos los archivos).
7. Crear un **commit** con los cambios. Añadir un mensaje que explique de manera simple _qué_ se cambió - `git commit -m "commit message"`
8. Subir tus cambios al repositorio remoto - `git push origin <feature-branch>`
9. En GitHub, cuando tu rama esté lista, crear un Pull Request, pedir una revisión, y mergear tu rama con la rama destino (en este caso, **master**).

_**Extra:**_ No olvides actualizar el estado de tu ticket en cada paso del proceso.
