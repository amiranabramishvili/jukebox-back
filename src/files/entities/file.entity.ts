import { BaseEntity } from "src/base/base.entity";
import {Column, Entity } from "typeorm";

@Entity()
export class FileEntity extends BaseEntity {

    @Column()
    fileName: string;

    @Column()
    url: string


}
