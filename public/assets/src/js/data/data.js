export let Links = [];
export let Logo = "";
export let field = {};

export function Data() {
    Logo = "G-BC";

    Links = [
        { link: "#home", file: "ទំព័រដើម" },
        { link: "#about", file: "អំពី យើង" },
        { link: "#service", file: "សេវាកម្ម" },
        { link: "#contact", file: "ទំនាក់ទំនង" },
    ];

    field = [
        { textGet: "Laravel PHP ,JS, CSS", ItemsGet: "Framework" },
        { textGet: "React, Vue, Svelte", ItemsGet: "Frontend" },
        { textGet: "MySQL, PostgreSQL", ItemsGet: "Database" },
        { textGet: "Docker, Kubernetes", ItemsGet: "DevOps" },// New item added backend
        { textGet: "Node.js, Express.js", ItemsGet: "Backend" },// New item added backend
    ];
    
}

export function Navbar() {
    return { NavLink: Links, Logo, field };
}
