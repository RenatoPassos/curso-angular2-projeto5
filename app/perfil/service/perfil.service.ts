/**
 * Created by treina.coede on 14/12/2016.
 */
import {Injectable} from "@angular/core";
import {Perfil} from "../class/perfil";
import {PERFIS} from "../mock/mock.perfis";

@Injectable()
export class PerfilService {

    /**
     *
     * @returns {Promise<Perfil[]>}
     */
    getList(): Promise<Perfil[]> {
        return Promise.resolve(PERFIS);
    }
}
