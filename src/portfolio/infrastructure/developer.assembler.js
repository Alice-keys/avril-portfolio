import { Developer } from '../domain/model/developer.entity.js'
import { SocialLinkAssembler } from './social-link.assembler.js'

export class DeveloperAssembler {
    static toEntityFromResource(resource) {
        let developer = new Developer({
            ...resource,
            socialLinks: []
        })
        developer.socialLinks = SocialLinkAssembler.toEntitiesFromResource(resource.socialLinks)
        return developer
    }
}mm