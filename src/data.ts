import { Capacitaciones } from "./types";

export const capacitacionesPendientes: Capacitaciones[] = [
    {
        id: crypto.randomUUID(),
        nombre: "Desarrollo Web Avanzado",
        descripcion: "Curso avanzado que cubre técnicas modernas en desarrollo web, incluyendo frameworks y herramientas actuales.",
        capacitador: "Ana López",
        duracion: "4h",
        progreso: 30
    },
    {
        id: crypto.randomUUID(),
        nombre: "Introducción a la Inteligencia Artificial",
        descripcion: "Un curso introductorio sobre conceptos y técnicas de inteligencia artificial, incluyendo aprendizaje automático y redes neuronales.",
        capacitador: "Carla Martínez",
        duracion: "3h",
        progreso: 64
    },
    {
        id: crypto.randomUUID(),
        nombre: "Fundamentos de la Programación en Python",
        descripcion: "Aprende los fundamentos de la programación utilizando Python, incluyendo sintaxis básica, estructuras de datos y desarrollo de proyectos simples.",
        capacitador: "Marta Fernández",
        duracion: "2h y 30m",
        progreso: 17
    },
    {
        id: crypto.randomUUID(),
        nombre: "Metodologías Ágiles para la Gestión de Proyectos",
        descripcion: "Curso sobre metodologías ágiles como Scrum y Kanban, que enseña cómo implementar prácticas ágiles para una gestión de proyectos más efectiva.",
        capacitador: "Jimena García",
        duracion: "3h y 50m ",
        progreso: 80
    },
    {
        id: crypto.randomUUID(),
        nombre: "Bases de Datos NoSQL",
        descripcion: "Introducción a las bases de datos NoSQL, enfocándose en las diferencias con las bases de datos relacionales y en el uso de MongoDB y otros sistemas NoSQL.",
        capacitador: "Laura Torres",
        duracion: "2h",
        progreso: 100
    }
];