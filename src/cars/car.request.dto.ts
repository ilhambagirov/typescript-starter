import { IsNotEmpty } from "class-validator";

export class CarRequestDto {
    @IsNotEmpty()
    readonly brand: string;

    @IsNotEmpty()
    readonly model: string;
}