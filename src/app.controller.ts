import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return 'Hola mundo!!';
  }


  @Get('nuevo')
  newEndPoint() {
    return 'yo soy nuevo';
  }

  @Get('/ruta/')
  hello() {
    return 'con /sas/';
  }

  @Get('products/filter')
  getProduct() {
    return `soy un filter`;
  }

  @Get('products/:productId')
  getProductFilter(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `category: ${id} and product: ${productId}`;
  }

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string
  ) {
    return `products: limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }
}
