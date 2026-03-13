import { Project } from '../domain/model/project.entity.js'
import { TechnologyAssembler } from './technology.assembler.js'

export class ProjectAssembler {
    static toEntityFromResource(resource) {
        let project = new Project({
            ...resource,
            technologies: []
        })
        project.technologies = TechnologyAssembler.toEntitiesFromResource(resource.technologies)
        return project
    }

    static toEntitiesFromResource(resource) {
        return resource.map(item => this.toEntityFromResource(item))
    }
}