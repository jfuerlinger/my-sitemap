
// eg. iRIS-E (CRM)
export class LinkConfiguration {
    id: string;
    label: string;
    url: string;
}

// eg. E-Umgebung
export class GroupConfiguration {
    id: string;
    label: string;
    links: Array<LinkConfiguration>;

    constructor() {
        this.links = new Array<LinkConfiguration>();
    }
}

// eg. iRIS
export class ProjectConfiguration {
    id: string;
    label: string;
    groups: Array<GroupConfiguration>;

    constructor() {
        this.groups = new Array<GroupConfiguration>();
    }
}

export class SitemapConfiguration {
    projects: Array<ProjectConfiguration>;

    constructor() {
        this.projects = new Array<ProjectConfiguration>();
    }
}


