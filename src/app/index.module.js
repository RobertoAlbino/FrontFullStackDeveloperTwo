import * as angular from 'angular';
import restangular from 'restangular';
import { default as uiRouter } from '@uirouter/angularjs';
import { default as uiBootstrap } from 'angular-ui-bootstrap';
import { default as angularLoadingBar } from 'angular-loading-bar';
import { default as angularUiGrid } from 'angular-ui-grid';

// Configurações globais da aplicação
import MainConfig from './index.config';

// Serviços da aplicação
import toastrService from './services/toastr.service';

// Rotas da aplicação
import { loginRoute }  from './entities/login/login.route';
import { menuUsuarioRoute } from './entities/usuario/menu-usuario/menu-usuario.route';
import { menuFornecedorRoute } from './entities/fornecedor/menu-fornecedor/menu-fornecedor.route';
import { gerenciarProdutosRoute } from './entities/produto/gerenciar-produtos/gerenciar-produtos.route';

// Diretivas
import directives from './directives/index';

export default angular.module('app', [
      directives, 
      restangular, 
      angularUiGrid,
      uiBootstrap,
      uiRouter,
      angularLoadingBar
])
.service('toastrService', toastrService)
.config(MainConfig)
.config(loginRoute)
.config(menuUsuarioRoute)
.config(menuFornecedorRoute)
.config(gerenciarProdutosRoute)
.name;
