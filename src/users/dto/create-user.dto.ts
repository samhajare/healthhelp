import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsOptional, IsNumber, IsArray, ValidateNested  } from 'class-validator';
 
 
 
 

export class InsuredPersonDto {
  @ApiProperty()
  relation: string;
  @ApiProperty()
  age: number;
  @ApiProperty()
  name?: string;
}

export class CreateUserDto {
  @IsOptional()
  @IsString()
  @ApiProperty()  
  name?: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  phoneNumber: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  budget?: number;

  @IsOptional()
  @IsArray()
  @ApiProperty()
  coverageNeeds?: string[];

  @IsOptional()
  @IsArray()
  @ApiProperty()
  insuredPersons?: InsuredPersonDto[];
}

