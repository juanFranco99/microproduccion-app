import { Router } from "@angular/router";

export class RouterHelper {
    router : Router;

    redir(page: string){
        this.router.navigate([page]);
    }

}
