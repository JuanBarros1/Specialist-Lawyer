export interface QuickLink {
    label: string;
    href: string;
}

export const QUICK_LINKS: QuickLink[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Specialties", href: "#specialties" },
    { label: "Practice Areas", href: "#areas" },
    { label: "Contact", href: "#contact" }
];

export const LEGAL_AREAS: string[] = [
    "Social Security Law",
    "Disability Rights",
    "Family Law"
];
