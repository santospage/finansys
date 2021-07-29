import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Category } from './pages/categories/shared/category.model';

export class InmemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      {id: 1, name: 'Moradia', description: 'Pagamento de contas de casa'},
      {id: 2, name: 'Saude'  , description: 'Plano de saude e remedios'},
      {id: 3, name: 'Lazer'  , description: 'Cinema, parques, praia, etc'},
      {id: 4, name: 'Salario', description: 'Recebimento de salario'},
      {id: 5, name: 'Freelas', description: 'Trabalhos de freelancer'}
    ];

    return { categories };
  }
}
