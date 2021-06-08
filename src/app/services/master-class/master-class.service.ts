import { Injectable } from '@angular/core';

const MASTERCLASS = [
  {
    name: 'Angular Framework en Entreprise',
    desc: '',
    url: 'angular-architecture-entreprise-workspace-nx',
    online: false
  },
  {
    name: 'Reactive Angular Application avec RxJS & NGRX',
    url: 'reactive-angular-application-rxjs-ngrx',
    online: false
  },
  {
    name: `Backend NestJS pour projet Angular avec Workspace Nx`,
    url: 'backend-nestjs-workspace-nx',
    online: false
  },
  {
    name: `Angular DDD Architecture pour Entreprise avec Workspace Nx`,
    url: 'angular-ddd-architecture-entreprise-workspace-nx',
    online: false,
    learning: `<p>À la fin de cette masterclass intensifve, tu seras capable de concevoir tes projets en mode monorepository avec Nx qui te permet de faire cohabiter l'ensemble des éléments dont ton projet est constitué (backend, frontend et librairies). </p><p>Tu apprendras comment subdiviser les fonctionnalités en plusieurs bibliothèques sur le principe DDD et comment définir des restrictions d'accès à appliquer pour la conception de l'architecture. De plus, tu repartiras avec un exemple complet de projet.</p>`,
    desc: `<p>Ce workshop intensif est destiné aux participants qui connaissent déjà les bases du développement avec Angular et qui sont définitivement déterminés à passer au niveau supérieur.</p> <p>Les développeurs expérimentés trouveront aussi leur bonheur en découvrant de nouveaux patterns d'architecture professionnelle et innovante avec Angular et Nx.</p>`,
    steps: [
      {
        name: 'I. Environnement',
        desc: `Présentation des projets Forntend + Backend. Présentation de Nx, installation création d'un workspace en monorepository (git). Initiation aux principes DDD. Présentation des librairies et modélisation de l'architecture des softwares au sein de l'architecture sur les principes de DDD.`
      },
      {
        name: `II. Datas & Modélisation`,
        desc: `Analyse des flux de données. Création et partage des interfaces de données entre les projets (front/back). Découpage pour les librairies de domaine`
      },
      {
        name: `III. Software Architecture`,
        desc: `Création et découpage des librairies par domaine et features (DDD). Mise en place des librairies d'interfaces utilisateur (UI) découpage par platform.`
      },
      {
        name: 'IV. Backend',
        desc: `Mise en place du backend Node.js avec NestJS dans le workspace Nx. Connexion à une base de données MongoDB Atlas avec le module Mongoose. Modelisation de l'API avec le module Swagger UI.`
      },
      {
        name: `V. Frontend`,
        desc: `Création des platform features librairie pour l'implémentation des domaine features. Implémentation des librairies d'interface par platform. Utilisation en lazyloading des platform features dans les applications frontend.`
      },
      {
        name: `VI. DevOps`,
        desc: `Visualisation graphique de l'architecture avec liaisons des dependence. Configuration du workspace Nx pour gestion multi-build et distribution sur NPM des librairies. Présentation des solutions pour la mise en production du backend et du frontend. Principes de mise en place d'une chaine d'automatisation devops avec les GitHub Actions.`
      }
    ]
  },
  {
    name: `Angular Reactive DDD Architecture pour Entreprise avec Workspace Nx`,
    url: 'angular-reactive-ddd-architecture-entreprise-workspace-nx',
    online: false
  },
  {
    name: `Backend pour Angular avec AngularFire et Google Cloud`,
    url: 'backend-angularfire-deploy-google-cloud',
    online: false
  }
];
@Injectable({
  providedIn: 'root'
})
export class MasterClassService {

  constructor() { }

  getAllMasterClass() {
    return MASTERCLASS;
  }
}
