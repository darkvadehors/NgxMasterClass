import { Injectable } from '@angular/core';

const MASTERCLASS = [
  {
    name: 'Angular Architecture pour Entreprise avec Workspace Nx',
    desc: ''
  },
  {
    name: 'Reactive Angular Architectures avec RxJS & NGRX'
  },
  {
    name: `Backend NestJS pour projet Angular  avec Workspace Nx`
  },
  {
    name: `Angular DDD Architecture pour Entreprise avec Workspace Nx`
  },
  {
    name: `Angular Reactive DDD Architecture pour Entreprise avec Workspace Nx`
  },
  {
    name: `Backend pour Angular avec AngularFire et Google Cloud`
  }
]
@Injectable({
  providedIn: 'root'
})
export class MasterClassService {

  constructor() { }

  getAllMasterClass() {
    return MASTERCLASS;
  }
}
