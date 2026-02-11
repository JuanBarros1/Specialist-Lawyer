export interface Testimonial {
    id: number;
    name: string;
    role: string;
    image: string;
    content: string;
    stars: number;
}

// Images are imported directly to ensure bundler handles them correctly
import testimonial1 from "@/assets/testimonial-1.webp";
import testimonial2 from "@/assets/testimonial-2.webp";
import testimonial3 from "@/assets/testimonial-3.webp";
import testimonial4 from "@/assets/testimonial-4.webp";
import testimonial5 from "@/assets/testimonial-5.webp";
import testimonial6 from "@/assets/testimonial-6.webp";
import testimonial7 from "@/assets/testimonial-7.webp";
import testimonial8 from "@/assets/testimonial-8.webp";

export const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: "Maria Silva",
        role: "Retired",
        image: testimonial1,
        content: "Secured my special pension. Exceptional knowledge and attentive service. I recommend to anyone needing a social security lawyer.",
        stars: 5,
    },
    {
        id: 2,
        name: "João Santos",
        role: "Person with Disability",
        image: testimonial2,
        content: "Helped me secure my rights. Fast process and positive outcome. Humanized service from start to finish.",
        stars: 5,
    },
    {
        id: 3,
        name: "Carlos Oliveira",
        role: "Retired",
        image: testimonial3,
        content: "Reversed a negative Social Security decision. Very grateful for the work done. Dedicated and competent professional.",
        stars: 5,
    },
    {
        id: 4,
        name: "Ana Costa",
        role: "Mother",
        image: testimonial4,
        content: "Conducted my case with professionalism and sensitivity. Excellent! Always available to clarify my doubts.",
        stars: 5,
    },
    {
        id: 5,
        name: "Luciana Mendes",
        role: "Public Servant",
        image: testimonial5,
        content: "Secured my sickness benefit when I needed it most. Humanized service and results beyond expectations.",
        stars: 5,
    },
    {
        id: 6,
        name: "Roberto Alves",
        role: "Entrepreneur",
        image: testimonial6,
        content: "First-class consultancy! Resolved complex issues with speed and exemplary professionalism.",
        stars: 5,
    },
    {
        id: 7,
        name: "Dona Conceição",
        role: "Retired",
        image: testimonial7,
        content: "Fought for my pension when I had no hope left. Eternal gratitude for all the support.",
        stars: 5,
    },
    {
        id: 8,
        name: "Felipe Rodrigues",
        role: "Young Professional",
        image: testimonial8,
        content: "Perfect guidance on labor rights. Secured fair and fast compensation.",
        stars: 5,
    }
];
