import { Component, OnInit } from '@angular/core';
import { SitemapConfiguration, ProjectConfiguration, GroupConfiguration, LinkConfiguration } from '../configuration';
import { Systemtype } from '../enumerations';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  constructor() {
    this.buildSiteMapConfiguration();
  }

  private siteMapConfiguration: SitemapConfiguration;

  ngOnInit() {
  }

  private buildSiteMapConfiguration() {
    this.siteMapConfiguration = new SitemapConfiguration([
      new ProjectConfiguration(
        'elVIS', 'elVIS - Elektronisches Kursverwaltungssystem',
        [
          new GroupConfiguration(
            'elVIS_E', 'E-Umgebung', Systemtype.DEV, 'Umfasst das Entwicklungssystem',
            [
              new LinkConfiguration('elVIS_E_CRM', 'CRM', 'http://elVIS-e.bbrz.at'),
              new LinkConfiguration('elVIS_E_SP', 'SharePoint', 'http://elVISdms-e.bbrz.at')
            ]
          ),
          new GroupConfiguration(
            'elVIS_Q', 'Q-Umgebung', Systemtype.QS, 'Qualitätssicherungssystem',
            [
              new LinkConfiguration('elVIS_Q_CRM', 'CRM', 'http://elVIS-q.bbrz.at'),
              new LinkConfiguration('elVIS_Q_SP', 'SharePoint', 'http://elVISdms-q.bbrz.at')
            ]
          ),
          new GroupConfiguration(
            'elVIS_P', 'P-Umgebung', Systemtype.PROD, 'Produktivsystem',
            [
              new LinkConfiguration('elVIS_P_CRM', 'CRM', 'http://elVIS.bbrz.at'),
              new LinkConfiguration('elVIS_P_SP', 'SharePoint', 'http://elVISdms.bbrz.at')
            ]
          )
        ]
      ),
      new ProjectConfiguration(
        'iRIS', 'iRIS - Reha Infosystem',
        [
          new GroupConfiguration(
            'iRIS_E', 'E-Umgebung', Systemtype.DEV, 'Umfasst das Entwicklungssystem',
            [
              new LinkConfiguration('iRIS_E_CRM', 'CRM', 'https://iris-e.bbrz.at'),
              new LinkConfiguration('iRIS_E_SP', 'SharePoint', 'https://irisdms-e.bbrz.at')
            ]
          ),
          new GroupConfiguration(
            'iRIS_Q', 'Q-Umgebung', Systemtype.QS, 'Qualitätssicherungssystem',
            [
              new LinkConfiguration('iRIS_Q_CRM', 'CRM', 'https://iris-q.bbrz.at'),
              new LinkConfiguration('iRIS_Q_SP', 'SharePoint', 'https://irisdms-q.bbrz.at')
            ]
          ),
          new GroupConfiguration(
            'iRIS_P', 'P-Umgebung', Systemtype.PROD, 'Produktivsystem',
            [
              new LinkConfiguration('iRIS_P_CRM', 'CRM', 'https://iris.bbrz.at'),
              new LinkConfiguration('iRIS_P_SP', 'SharePoint', 'https://irisdms.bbrz.at')
            ]
          ),
          new GroupConfiguration(
            'iRIS_PoC', 'PoC-Umgebung (Win2k12 R2)', Systemtype.DEV, 'PoC mit Windows Server 2012 R2',
            [
              new LinkConfiguration('iRIS_PoC_CRM', 'CRM', 'https://irispoc.bbrz.at'),
              new LinkConfiguration('iRIS_PoC_SP', 'SharePoint', 'https://irispocdms.bbrz.at')
            ]
          ),
          new GroupConfiguration(
            'iRIS_PoC2012', 'PoC-Umgebung (Win2k12)', Systemtype.DEV, 'PoC mit Windows Server 2012',
            [
              new LinkConfiguration('iRIS_PoCWin2k12_CRM', 'CRM', 'https://irispoc-win2k12.bbrz.at'),
              new LinkConfiguration('iRIS_PoCWin2k12_SP', 'SharePoint', 'https://irispocdms-win2k12.bbrz.at')
            ]
          )
        ]
      ),
      new ProjectConfiguration(
        'FABiS', 'FABiS - TBD',
        [
          new GroupConfiguration(
            'FABiS_E', 'E-Umgebung', Systemtype.DEV, 'Umfasst das Entwicklungssystem',
            [
              new LinkConfiguration('FABiS_E_CRM', 'CRM', 'https://fabis-e.office.root.local'),
              new LinkConfiguration('FABiS_E_SP', 'SharePoint', 'https://fabisdms-e.office.root.local')
            ]
          ),
          new GroupConfiguration(
            'FABiS_Q', 'Q-Umgebung', Systemtype.QS, 'Qualitätssicherungssystem',
            [
              new LinkConfiguration('FABiS_Q_CRM', 'CRM', 'https://fabis-q.office.root.local'),
              new LinkConfiguration('FABiS_Q_SP', 'SharePoint', 'https://fabisdms-q.office.root.local')
            ]
          ),
          new GroupConfiguration(
            'FABiS_P', 'P-Umgebung', Systemtype.PROD, 'Produktivsystem',
            [
              new LinkConfiguration('FABiS_P_CRM', 'CRM', 'https://fabis.office.root.local'),
              new LinkConfiguration('FABiS_P_SP', 'SharePoint', 'https://fabisdms.office.root.local')
            ]
          )
        ]
      ),
      new ProjectConfiguration(
        'RFK', 'RFK - Reha-Fachkraft',
        [
          new GroupConfiguration(
            'RFK_E', 'E-Umgebung', Systemtype.DEV, 'Umfasst das Entwicklungssystem',
            [
              new LinkConfiguration('RFK_E_CRM', 'CRM', 'http://crm4reha/REHA-COLLEGE-EV01'),
              new LinkConfiguration('RFK_E_SP', 'SharePoint', 'http://crm4fabdms/reharfk-e')
            ]
          ),
          new GroupConfiguration(
            'RFK_P', 'P-Umgebung', Systemtype.PROD, 'Produktivsystem',
            [
              new LinkConfiguration('RFK_P_CRM', 'CRM', 'http://crm4reha/REHA-COLLEGE-V01'),
              new LinkConfiguration('RFK_P_SP', 'SharePoint', 'http://crm4fabdms/reharfk')
            ]
          )
        ]
      )
    ]);
  }

}
