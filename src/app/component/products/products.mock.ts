export const productsList:Product [] = [
    {id: 1, name: 'Log Your Climb', tecnology: 'Kotlin - SQLite', description: 'Registra tus logros de escalada facilmente.', imageUrl: 'https://www.ishir.com/wp-content/uploads/2017/07/web-development-img.jpg',salary: 19000, category: 'Climbing'},
    {id: 2, name: 'Registro Horario', tecnology: '.Net Core - C# - Blazor)', description: 'Registra la hora de entrada y salida', imageUrl: 'https://www.ishir.com/wp-content/uploads/2017/07/web-development-img.jpg',salary: 22000, category: 'Climbing'},
    {id: 3, name: 'DiskPartition', tecnology: '.Net WF', description: 'Particiona tus discos.', imageUrl: 'https://www.ishir.com/wp-content/uploads/2017/07/web-development-img.jpg',salary: 24000, category: 'Climbing'},
    {id: 4, name: 'Prueba', tecnology: '.Net WF', imageUrl: 'https://www.ishir.com/wp-content/uploads/2017/07/web-development-img.jpg',salary: 33000, category: 'Climbing'}
]

export interface Product {
    id: number;
    name: string;
    tecnology: string;
    description?: string; //si ponemos ? es opcional
    imageUrl: string;
    salary: number;
    category: string;
}
  