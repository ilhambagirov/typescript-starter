import { IsNotEmpty } from "class-validator";

export class MailResponseDto {
    @IsNotEmpty()
    readonly content: string;

    @IsNotEmpty()
    readonly email: string;
}