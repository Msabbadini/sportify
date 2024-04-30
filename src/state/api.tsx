import {IApi} from "@/state/interfaces";
import MockedAPI from "@/state/mock"
import BackEndAPI from "@/state/backend"

class Api {
    private _api:IApi

    constructor() {
        this._api = BackEndAPI;
    }

    set useMockedStore (enabled:boolean) {
        console.log(`%c>>> USE ${enabled ? "m.o.c.k.e.d" : "b.a.c.k.e.n.d"} API`, "color: lime; font-size: 25px; font-weight:700;")
        this._api = enabled ? MockedAPI : BackEndAPI
    }

    get api ():IApi { return this._api; }
}

const API = new Api()
export default API;
