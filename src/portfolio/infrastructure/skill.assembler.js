import { Skill } from '../domain/model/skill.entity.js'

export class SkillAssembler {
    static toEntityFromResource(resource) {
        return new Skill(resource)
    }

    static toEntitiesFromResource(resource) {
        return resource.map(item => this.toEntityFromResource(item))
    }
}