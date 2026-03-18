// portfolio.data.js
const data = {
    developer: {
        name: "Avril",
        title: "Frontend Developer",
        photoUrl: "/src/assets/photo.jpeg",
        cvUrl: '/assets/cv-avril-navarro.pdf',
        email: "avril.navarro.16@gmail.com",
        whatsapp: "+51942993152",
        linkedinUrl: "https://linkedin.com/in/yourprofile",
        socialLinks: [
            { platform: "LinkedIn",   url: "https://linkedin.com/in/yourprofile", iconUrl: "pi pi-linkedin"  },
            { platform: "GitHub",     url: "https://github.com/yourprofile",      iconUrl: "pi pi-github"    },
            { platform: "Instagram",  url: "https://instagram.com/yourprofile",   iconUrl: "pi pi-instagram" },
            { platform: "Gmail",     url: "mailto:avril.navarro.16@gmail.com",    iconUrl: "pi pi-envelope"  }
        ]
    },
    projects: [
        {
            id: "1",
            title: "CatchUp",
            description: "News API client application built with Vue.js and PrimeVue.",
            imageUrl: "/assets/projects/catchup.png",
            technologies: [
                { name: "Vue.js",      iconUrl: "/assets/icons/vue.svg"        },
                { name: "JavaScript",  iconUrl: "/assets/icons/javascript.svg" },
                { name: "PrimeVue",    iconUrl: "/assets/icons/primevue.svg"   }
            ],
            githubUrl: "https://github.com/yourprofile/catchup",
            deployUrl: "https://catchup.netlify.app"
        },
        {
            id: "2",
            title: "Avril Portfolio",
            description: "Personal portfolio built with Vue.js and DDD architecture.",
            imageUrl: "/src/assets/hero.png",
            technologies: [
                { name: "Vue.js",      iconUrl: "/src/assets/icons/vue.svg"        },
                { name: "JavaScript",  iconUrl: "/src/assets/icons/javascript.svg" },
                { name: "PrimeVue",    iconUrl: "/src/assets/icons/primevue.svg"   }
            ],
            githubUrl: "https://github.com/yourprofile/portfolio",
            deployUrl: "https://avril-portfolio.netlify.app"
        },
        {
            id: "3",
            title: "Proyecto 3",
            description: "Another amazing project built with modern technologies.",
            imageUrl: "/src/assets/hero.png",
            technologies: [
                { name: "Angular",     iconUrl: "/src/assets/icons/angular.svg"   },
                { name: "JavaScript",  iconUrl: "/src/assets/icons/javascript.svg"},
                { name: "Spring Boot", iconUrl: "/src/assets/icons/spring.svg"    }
            ],
            githubUrl: "https://github.com/yourprofile/proyecto3",
            deployUrl: "https://proyecto3.netlify.app"
        }
    ],
    skillCategories: [
        {
            name: "languages",
            skills: [
                { name: "JavaScript", iconUrl: "/assets/icons/javascript.svg" },
                { name: "Python",     iconUrl: "/assets/icons/python.svg"     },
                { name: "C++",        iconUrl: "/assets/icons/cpp.svg"        }
            ]
        },
        {
            name: "frameworks",
            skills: [
                { name: "Vue.js",      iconUrl: "/assets/icons/vue.svg"      },
                { name: "Angular",     iconUrl: "/assets/icons/angular.svg"  },
                { name: "Spring Boot", iconUrl: "/assets/icons/spring.svg"   }
            ]
        },
        {
            name: "tools",
            skills: [
                { name: "Git",      iconUrl: "/assets/icons/git.svg"      },
                { name: "WebStorm", iconUrl: "/assets/icons/webstorm.svg" },
                { name: "Figma",    iconUrl: "/assets/icons/figma.svg"    }
            ]
        },
        {
            name: "soft-skills",
            skills: [
                { name: "Teamwork",         iconUrl: "" },
                { name: "Problem Solving",  iconUrl: "" },
                { name: "Communication",    iconUrl: "" }
            ]
        }
    ]
}

export class PortfolioData {
    getDeveloper() {
        return data.developer
    }

    getProjects() {
        return data.projects
    }

    getSkillCategories() {
        return data.skillCategories
    }
}