/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { Injectable } from '@angular/core';
import { Usuario } from '../class/usuario';

//adicione as linhas abaixo:
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsuarioService {
    //adicione esta linha:
    //private usuarioUrl = 'https://cursoangularjs2restful.herokuapp.com/usuario';
    private usuarioUrl = 'https://natanieltse.herokuapp.com/usuario';
    
    //adicione o construtor da classe
    constructor(private http: Http) {  }

    /**
     *
     * @returns {Observable<Usuario[]>}
     */
    getList(): Observable<Usuario[]> {
        //adicione esse trecho de código
        return this.http.get(this.usuarioUrl)
            .map(res => res.json())
            .catch(this.handleError);
    }

    // getList(): Promise<Usuario[]> {
    //     return Promise.resolve(USUARIOS);
    // }

    //Crie esse método
    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}