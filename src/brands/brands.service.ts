import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid'


@Injectable()
export class BrandsService {

  private brands: Brand[] =[
    // {
    //   id: "77892161-59e0-45b9-bdb1-eae52a2cdc73" ,
    //   name: "toyota",
    //   createdAt: 1623456789,
    // }
  ]


  create(createBrandDto: CreateBrandDto) {
    const findBrand_name = this.brands.find( brand => brand.name === createBrandDto.name )
    if(findBrand_name) throw new NotFoundException(`la marca ${createBrandDto.name} ya existe`)
    
    const brandNew: Brand = {
      id: uuid(),
     ...createBrandDto,
     name: createBrandDto.name.toLocaleLowerCase(),
      createdAt: new Date().getTime()
    }

    this.brands.push(
      brandNew
    )
    return brandNew
  }

  findAll() {
    return this.brands
  }

  findOne(id: string) {
    const findBrand =  this.brands.find(brand => brand.id === id)
    if(!findBrand) throw new NotFoundException(`no se encontro #${id} brand`)
    return findBrand
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }

  fillBrandsWithSeedData(brands: Brand[]){
    this.brands = brands
    console.log(this.brands)
 }
}
