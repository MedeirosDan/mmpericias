interface Slide {
    src: string;
    title?: string;
    description?: string;
    alt: string;
    className: string;
}

export const slides: Slide[] = [
    { src: "/images/testimonial1.jpg", title: "Depoimento 1", description: "Esse é o primeiro depoimento de um cliente satisfeito.", alt: "Foto do cliente 1", className: "depoUser" },
    { src: "/images/testimonial2.jpg", title: "Depoimento 2", description: "Outro feedback positivo de um cliente.", alt: "Foto do cliente 2", className: "depoUser" },
    { src: "/images/testimonial3.jpg", title: "Depoimento 3", description: "Mais um cliente feliz com nossos serviços.", alt: "Foto do cliente 3", className: "depoUser" },
    { src: "/images/testimonial4.jpg", title: "Depoimento 4", description: "Descrição do quarto slide", alt: "Foto do cliente 4", className: "depoUser" },
    { src: "/images/testimonial5.jpg", title: "Depoimento 5", description: "Descrição do quinto slide", alt: "Foto do cliente 5", className: "depoUser" }
];

export const slidesClients: Slide[] = [
    { src: "/images/testimonial1.jpg", alt: "Foto do cliente 1", className: "clients" },
    { src: "/images/testimonial2.jpg", alt: "Foto do cliente 2", className: "clients" },
    { src: "/images/testimonial3.jpg", alt: "Foto do cliente 3", className: "clients" },
    { src: "/images/testimonial4.jpg", alt: "Foto do cliente 4", className: "clients" },
    { src: "/images/testimonial5.jpg", alt: "Foto do cliente 5", className: "clients" }
];
