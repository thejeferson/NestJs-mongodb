import { ApiProperty } from '@nestjs/swagger';
export class CreateBookDto {
  @ApiProperty({ 
    example: 'Nest.js: Framework progresivo de Node.Js (English Edition)',
  })
  readonly title: string; 

  @ApiProperty({ example: 'Desarrollo de software' })
  readonly genre: string;

  @ApiProperty({
    example:
      'el desarrollo del software es una gran profesión que requiere talento',
  })
  readonly description: string;

  @ApiProperty({ example: 'Jeferson Tapia' })
  readonly author: string;

  @ApiProperty({ example: 127 })
  readonly pages: number;

  @ApiProperty({
    example: 'https://m.media-amazon.com/images/I/41fveBeDWmL._SY346_.jpg',
  })
  readonly image_url: string;

  @ApiProperty({ example: ['NestJS', 'REST API'] }) 
  readonly keywords: string[];
}

