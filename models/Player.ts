import { BaseModel } from './BaseModel';
import { getConnection, getRepository, Entity, getCustomRepository, Repository, getManager } from 'typeorm';

//Typeorm will register any table class with the @Entity wrapper. Add new models to the /models folder.
//Use Base Model properties and add custom properties or methods.

@Entity()
export class Player extends BaseModel{
    
    static async AddAsync(data: any){
        var player = new Player();
        player.profile = data;
        await getRepository(this).save(player);
    }
}