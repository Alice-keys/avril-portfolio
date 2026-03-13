import { Skill } from './skill.entity.js'

export class SkillCategory {
    constructor({
                    name = '',
                    skills = []
                }) {
        this.name = name
        this.skills = skills.map(s => new Skill(s))
    }
}