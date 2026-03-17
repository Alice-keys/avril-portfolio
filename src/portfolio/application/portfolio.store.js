import { reactive } from 'vue'
import { PortfolioData } from '../infrastructure/portfolio.data.js'
import { DeveloperAssembler } from '../infrastructure/developer.assembler.js'
import { ProjectAssembler } from '../infrastructure/project.assembler.js'
import { SkillCategoryAssembler } from '../infrastructure/skill-category.assembler.js'

const portfolioData = new PortfolioData()

export const portfolioStore = reactive({
    developer: null,
    projects: [],
    skillCategories: [],
    currentProjectIndex: 0,

    loadData() {
        console.log('loadData called')
        this.developer = DeveloperAssembler
            .toEntityFromResource(portfolioData.getDeveloper())
        console.log('developer:', this.developer)

        this.projects = ProjectAssembler
            .toEntitiesFromResource(portfolioData.getProjects())

        this.skillCategories = SkillCategoryAssembler
            .toEntitiesFromResource(portfolioData.getSkillCategories())
    },

    setCurrentProject(index) {
        this.currentProjectIndex = index
    }
})