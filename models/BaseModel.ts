import { PrimaryGeneratedColumn, UpdateDateColumn, Column, Entity, getRepository, getManager, getConnection } from 'typeorm';

//This is an example of a Base Model for typeorm entities added to the database
//It is not necessary to create a Base Model however it is useful for generic methods and properties
export abstract class BaseModel{
    @PrimaryGeneratedColumn()
    id?: number;

    @Column("simple-json")
    profile: any;

    @UpdateDateColumn()
    updateDateTime?: Date

    static async FindAsync(id: number){
        return await getRepository(this).findOne(id);
    }

    static async FindAllAsync(){
        return await getRepository(this).findAndCount();
    }
}
