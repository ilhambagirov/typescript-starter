import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Car extends Model {
    @Column(
        {
            type: DataType.STRING,
            allowNull: false,
        }
    )
    @ApiProperty()
    brand: string
    @Column(
        {
            type: DataType.STRING,
            allowNull: false,
        }
    )
    @ApiProperty()
    model: string
}