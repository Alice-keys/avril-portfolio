import { Technology } from '../domain/model/technology.entity.js'

export class TechnologyAssembler {
    static toEntityFromResource(resource) {
        return new Technology(resource)
    }

    static toEntitiesFromResource(resource) {
        return resource.map(item => this.toEntityFromResource(item))
    }
}