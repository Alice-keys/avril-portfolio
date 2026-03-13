// portfolio.data.js
const data = {
    developer: {
        name: "Avril",
        title: "Frontend Developer",
        photoUrl: "/assets/photo.jpg",
        cvUrl: import.meta.env.VITE_CV_URL,
        email: "avril.navarro.16@gmail.com",
        whatsapp: "+51942993152",
        linkedinUrl: "https://linkedin.com/in/yourprofile",
        socialLinks: [
            { platform: "LinkedIn",   url: "https://linkedin.com/in/yourprofile", iconUrl: "pi pi-linkedin"  },
            { platform: "GitHub",     url: "https://github.com/yourprofile",      iconUrl: "pi pi-github"    },
            { platform: "Instagram",  url: "https://instagram.com/yourprofile",   iconUrl: "pi pi-instagram" }
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