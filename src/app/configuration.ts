import { Systemtype } from './enumerations';

// eg. iRIS-E (CRM)
export class LinkConfiguration {
    constructor(public id: string, public label: string, public url: string) { }
}

// eg. E-Umgebung
export class GroupConfiguration {

    constructor(
        public id: string,
        public label: string,
        public systemType: Systemtype,
        public description: string,
        public links: Array<LinkConfiguration>) { }
}

// eg. iRIS
export class ProjectConfiguration {

    constructor(
        public id: string,
        public label: string,
        public groups: Array<GroupConfiguration>) { }
}

export class SitemapConfiguration {

    constructor(
        public projects: Array<ProjectConfiguration>) { }
}


