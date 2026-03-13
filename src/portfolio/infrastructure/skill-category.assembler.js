import { SkillCategory } from '../domain/model/skill-category.entity.js'
import { SkillAssembler } from './skill.assembler.js'

export class SkillCategoryAssembler {
    static toEntityFromResource(resource) {
        let skillCategory = new SkillCategory({
            ...resource,
            skills: []
        })
        skillCategory.skills = SkillAssembler.toEntitiesFromResource(resource.skills)
        return skillCategory
    }

    static toEntitiesFromResource(resource) {
        return resource.map(item => this.toEntityFromResource(item))
    }
}